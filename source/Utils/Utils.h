#pragma once

#include <vector>
#include <tuple>
#include <limits>
#include <algorithm>
#include <array>
#include <bitset>
#include <any>
#include <unordered_map>
#include <concepts>

namespace Utils
{
	template<typename _T>
	using SubscriptOperatorResultValueType = std::remove_cvref_t<decltype(std::declval<_T>()[{}])>;

	template <typename ..._Types>
	class TypesPack 
	{
	public:
		static constexpr auto typesNum = sizeof...(_Types);

		template<typename _Type, template<typename, typename> class _Comparator = std::is_same>
		static constexpr size_t GetTypeIndex() { return GetTypeIndex_impl<_Type, _Comparator>(TypesPack<_Types...>{}, 0); }

		template <template <typename...> typename _NewType, template <typename> typename _WrapType>
		struct WrappedPack { using type = _NewType<_WrapType<_Types>...>; };

		template<size_t _index>
		using TypeByIndex = std::tuple_element<_index, std::tuple<_Types...>>::type;

	private:
		template<typename _Type, template<typename, typename> class _Comparator, typename _CurrentType, typename ..._RemainedTypes>
		static constexpr size_t GetTypeIndex_impl(TypesPack<_CurrentType, _RemainedTypes...>, size_t counter)
		{
			if constexpr (_Comparator<_Type, _CurrentType>::value) { return counter; }
			else if constexpr (sizeof...(_RemainedTypes) != 0) { return GetTypeIndex_impl<_Type, _Comparator>(TypesPack<_RemainedTypes...>{}, counter + 1); }
			else { [] <bool flag = false>() { static_assert(flag, "[Error] TypesPack::GetTypeIndex - _Type isn't found in TypesPack"); }(); return 0; }
		}
	};

	template <typename ..._Types0, typename ..._Types1>
	constexpr decltype(auto) ConCatTypesPack(TypesPack<_Types0...>, TypesPack<_Types1...>) { return TypesPack<_Types0..., _Types1...>{}; }

	template <template <typename...> typename _NewType, typename ..._Types0, typename ..._Types1>
	constexpr decltype(auto) CombineTypesPack(TypesPack<_Types0...>, TypesPack<_Types1...>) { return _NewType<_Types0..., _Types1...>{}; }

	template <template <typename...> typename _NewType, typename ..._Types>
	constexpr decltype(auto) ConvertTypesPack(TypesPack<_Types...>) { return _NewType<_Types...>{}; }

	template <template <typename...> typename _NewType, template <typename> typename _WrapType, typename ..._Types>
	constexpr decltype(auto) WrapTypesPack(TypesPack<_Types...>) { return _NewType<_WrapType<_Types>...>{}; }

	template <typename ..._Types>
	constexpr decltype(auto) ConvertTypesToPointersPack(TypesPack<_Types...>) { return TypesPack<_Types*...>{}; }

	template <typename _Type>
	void RemoveFast(const typename std::vector<_Type>::iterator &it, std::vector<_Type> & container)
	{
		*it = container.back();
		container.pop_back();
	}

	template<size_t _MAX_VALUE>
	class PreferredIntegralType
	{
		using Types = std::tuple<uint8_t, uint16_t, uint32_t, uint64_t>;

		template<size_t _V>
		using PristineType = typename std::decay<decltype(std::get<_V>(Types()))>::type;

		template<size_t _INDEX>
		struct check_limit
		{
			static constexpr auto value =
				_MAX_VALUE >= std::numeric_limits<PristineType<_INDEX - 1>>::max()
				&& _MAX_VALUE <= std::numeric_limits<PristineType<_INDEX>>::max();
		};

		static constexpr size_t value_to_index()
		{
			static_assert(_MAX_VALUE >= 0, "Must be >= 0");
			if constexpr (_MAX_VALUE <= std::numeric_limits<PristineType<0>>::max()) return 0;
			else if constexpr (check_limit<1>::value) return 1;
			else if constexpr (check_limit<2>::value) return 2;
			else if constexpr (check_limit<3>::value) return 3;
		}

	public:
		using type = PristineType<value_to_index()>;
	};

	// NOTE: Min chunk size is 64bytes as cache line.
	template<typename _Type, size_t _CHUNK_SIZE_BYTES_RATIO = 10, size_t _MIN_CHUNK_SIZE_BYTES = 64>
	constexpr auto CalcPreferredChunkSizeBytes()
	{
		constexpr auto sizeof_type = sizeof(_Type);
		constexpr auto type_chunk_size_bytes = sizeof_type * _CHUNK_SIZE_BYTES_RATIO;
		if constexpr (type_chunk_size_bytes >= _MIN_CHUNK_SIZE_BYTES)
			return type_chunk_size_bytes;
		if constexpr ((_MIN_CHUNK_SIZE_BYTES % sizeof_type) != 0)
			return (_MIN_CHUNK_SIZE_BYTES / sizeof_type + 1) * sizeof_type;
		return _MIN_CHUNK_SIZE_BYTES;
	}

	template<typename _Type, size_t _CHUNK_SIZE_BYTES_RATIO = 10, size_t _MIN_CHUNK_SIZE_BYTES = 64>
	class ChunkBuffer
	{
	private:
		static constexpr auto CHUNK_SIZE_BYTES = CalcPreferredChunkSizeBytes<_Type, _CHUNK_SIZE_BYTES_RATIO, _MIN_CHUNK_SIZE_BYTES>();
		static constexpr auto CHUNK_SIZE = CHUNK_SIZE_BYTES / sizeof(_Type);

		using Chunk = std::array<uint8_t, CHUNK_SIZE_BYTES>;

	public:
		~ChunkBuffer()
		{
			for (auto &element : constructed_elements)
				element->~_Type();
			for (auto &chunk : chunks)
				delete chunk;
		}

		template<class ...Args>
		_Type* emplace_back(Args &&...args)
		{
			_Type *current_element = nullptr;
			if (destructed_elements.size())
			{
				current_element = destructed_elements.back();
				destructed_elements.pop_back();
			}
			else
			{
				const auto elements_count = constructed_elements.size();
				const auto current_chunk_i = elements_count / CHUNK_SIZE;
				Chunk *current_chunk = nullptr;
				if (current_chunk_i >= chunks.size())
					current_chunk = chunks.emplace_back(new Chunk);
				else current_chunk = chunks[current_chunk_i];

				const auto element_index = (elements_count - current_chunk_i * CHUNK_SIZE) * sizeof(_Type);
				current_element = reinterpret_cast<_Type*>(&((*current_chunk)[element_index]));
			}
			new (current_element) _Type(std::forward<Args>(args)...);
			constructed_elements.emplace_back(current_element);
			
			return current_element;
		}

		void remove(_Type *element)
		{
			auto found_it = std::find(constructed_elements.begin(), constructed_elements.end(), element);
			if (found_it == constructed_elements.end()) return;
			Utils::RemoveFast(found_it, constructed_elements);

			element->~_Type();
			destructed_elements.emplace_back(element);
		}

	private:
		std::vector<Chunk*> chunks;
		std::vector<_Type*> destructed_elements;
		std::vector<_Type*> constructed_elements;
	};

	template<typename _Type, size_t _CHUNK_SIZE_BYTES_RATIO = 10, size_t _MIN_CHUNK_SIZE_BYTES = 64>
	class ChunkTable
	{
	private:
		static constexpr auto CHUNK_SIZE_BYTES = CalcPreferredChunkSizeBytes<_Type, _CHUNK_SIZE_BYTES_RATIO, _MIN_CHUNK_SIZE_BYTES>();
		static constexpr auto CHUNK_SIZE = CHUNK_SIZE_BYTES / sizeof(_Type);

		struct Chunk
		{
			std::bitset<CHUNK_SIZE> valid;
			std::array<uint8_t, CHUNK_SIZE_BYTES> data;
		};

	public:
		~ChunkTable()
		{
			for (auto &chunk : chunks)
			{
				if (!chunk) continue;
				for (auto i = 0; i < CHUNK_SIZE; ++i)
				{
					if (!chunk->valid[i]) continue;
					reinterpret_cast<_Type*>(&chunk->data[i * sizeof(_Type)])->~_Type();
				}
				delete chunk;
			}
		}

		_Type *get(const size_t key)
		{
			Chunk* chunk = nullptr;
			const auto chunk_index = key / CHUNK_SIZE;

			if (chunk_index >= chunks.size() || !(chunk = chunks[chunk_index]))
				return nullptr;

			const auto element_index = key - chunk_index * CHUNK_SIZE;
			if (!chunk->valid[element_index])
				return nullptr;

			return reinterpret_cast<_Type*>(&chunk->data[element_index * sizeof(_Type)]);
		}

		template<class ...Args>
		_Type* emplace(const size_t key, Args &&...args)
		{
			Chunk* chunk = nullptr;
			const auto chunk_index = key / CHUNK_SIZE;
			if (chunk_index >= chunks.size())
			{
				chunks.resize(chunk_index + 1);
				chunk = new Chunk;
				chunks.back() = chunk;
			}
			else if (!(chunk = chunks[chunk_index]))
			{
				chunk = new Chunk;
				chunks[chunk_index] = chunk;
			}

			const auto element_index = key - chunk_index * CHUNK_SIZE;
			auto current_element = reinterpret_cast<_Type*>(&(chunk->data[element_index * sizeof(_Type)]));
			if (chunk->valid[element_index])
				return current_element;

			new (current_element) _Type(std::forward<Args>(args)...);
			chunk->valid[element_index] = true;

			return current_element;
		}

		void remove(const size_t key)
		{
			Chunk* chunk = nullptr;
			const auto chunk_index = key / CHUNK_SIZE;

			if (chunk_index >= chunks.size() || !(chunk = chunks[chunk_index]))
				return;

			const auto element_index = key - chunk_index * CHUNK_SIZE;
			if (!chunk->valid[element_index])
				return;

			chunk->valid[element_index] = false;
			auto element = reinterpret_cast<_Type*>(&chunk->data[element_index * sizeof(_Type)]);
			element->~_Type();
		}

	private:
		std::vector<Chunk*> chunks;
	};

	template<typename _Type>
	decltype(auto) ConstCast(const _Type * v)
	{
		return const_cast<_Type*>(v);
	}

	template<auto _keyValue>
	using IntegralConstant = std::integral_constant<decltype(_keyValue), _keyValue>;

	template<typename _KeyType, typename _ValueType>
	struct TypePair
	{
		using KeyType = _KeyType;
		using ValueType = _ValueType;
	};

	template<auto _keyValue, typename _ValueType>
	struct IntegralTypePair: TypePair<Utils::IntegralConstant<_keyValue>, _ValueType> {};

	template<typename _T0, typename _T1>
	struct TypeTableComp : std::bool_constant<std::is_same_v<_T0, typename _T1::KeyType>> {};

	template<typename> 
	struct TypeTableFixed {};

	template<typename ..._Types>
	struct TypeTableFixed<Utils::TypesPack<_Types...>>
	{
		using Pack = Utils::TypesPack<_Types...>;
		std::tuple<typename _Types::ValueType...> data;

		template<typename ..._Args>
		TypeTableFixed(_Args && ...args)
			: data(std::forward<_Args>(args)...)
		{
		}

		template<typename _Key>
		auto& GetValue()
		{
			return std::get<Pack::GetTypeIndex<_Key, TypeTableComp>()>(data);
		}
	};

	template<size_t _keyValue, typename _ValueType>
	struct TypeTableEntry
	{
		static constexpr auto keyValue = _keyValue;
		using ValueType = _ValueType;
	};

	template<typename _TypesPack, typename _KeyType = uint8_t, template <typename...> typename _CollectionType = std::unordered_map>
	struct TypeTable;

	template<typename _KeyType = uint8_t, template <typename...> typename _CollectionType = std::unordered_map>
	struct TypeTableBase
	{
		_CollectionType<_KeyType, std::any> collection;

		template<typename _TypesPack>
		auto& As()
		{
			return static_cast<TypeTable<_TypesPack, _KeyType, _CollectionType>&>(*this);
		}

		template<typename _TypesPack>
		const auto& As() const
		{
			return ConstCast(this)->As<_TypesPack>();
		}
	};

	template<typename _TypesPack, typename _KeyType, template <typename...> typename _CollectionType>
	struct TypeTable : TypeTableBase<_KeyType, _CollectionType>
	{
	private:
		template<typename _Type, typename _CurrentType>
		struct Cmp
		{
			static constexpr auto value = (_Type::value == _CurrentType::keyValue);
		};

	public:

		template<_KeyType _key>
		auto& Get()
		{
			constexpr auto index = _TypesPack::template GetTypeIndex<IntegralConstant<_key>, Cmp>();
			using CurrentType = typename _TypesPack:: template TypeByIndex<index>::ValueType;

			auto foundIt = this->collection.find(_key);
			return std::any_cast<CurrentType&>(foundIt->second);
		}

		template<_KeyType _key>
		auto& Get() const
		{
			return ConstCast(this)->Get<_key>();
		}
		
		template<_KeyType _key, typename ..._ConstructorArgs>
		auto& Emplace(_ConstructorArgs && ...constructorArgs)
		{
			constexpr auto index = _TypesPack::template GetTypeIndex<IntegralConstant<_key>, Cmp>();
			using CurrentType = typename _TypesPack:: template TypeByIndex<index>::ValueType;

			return this->collection.emplace(_key, CurrentType{ std::forward<_ConstructorArgs>(constructorArgs)...}).first->second;
		}
	};

	template< class R, class... A >
	struct Func_type_;

	template< class R, class... A >
	struct Func_type_<R(A...)>
	{
		using Return_type = R;
		using Args_tuple = std::tuple<std::decay_t<A>... >;
	};

	template <std::unsigned_integral _T>
	bool GetBit(const _T & value, const size_t bitIndex)
	{
		return value & (1u << bitIndex);
	}

	template <std::unsigned_integral _T>
	bool SetBit(_T & value, const size_t bitIndex, const bool bitValue)
	{
		constexpr _T fullMask = ~_T{};
		const _T mask = ~(1u << bitIndex);
		return value & mask | _T(bitValue) << bitIndex;
	}

	struct BitsetElementAccessMode
	{
		using Type = int;
		enum
		{
			READ,
			WRITE,
			RW
		};
	};

	template<size_t _size, typename _BlockType = uint32_t>
	class Bitset
	{
	public:
		static constexpr size_t blockSize_bits = sizeof(_BlockType) * 8;
		using BlockCollection = std::array<_BlockType, _size>;


	public:
		BlockCollection blocks;

	public:
		Bitset() = default;
		Bitset(const bool fillValue)
		{
			Fill(fillValue);
		}

		void Fill(const bool fillValue)
		{
			blocks.fill(fillValue ? ~_BlockType{} : _BlockType{});
		}


		void Set(const uint32_t bitIndex, const bool bitValue)
		{
			const auto blockIndex = bitIndex / blockSize_bits;
			const auto bitIndexInBlock = bitIndex % blockSize_bits;
			SetBit(blocks[blockIndex], bitIndex, bitValue);
		}

		bool Get(const uint32_t bitIndex) const
		{
			const auto blockIndex = bitIndex / blockSize_bits;
			const auto bitIndexInBlock = bitIndex % blockSize_bits;
			return GetBit(blocks[blockIndex], bitIndex);
		}


		template<BitsetElementAccessMode::Type _mode, typename _Callback>
		void ForEach(const _Callback& callback)
		{
			for (auto& block : blocks)
			{
				for (auto bitIndex = 0u; bitIndex < blockSize_bits; ++bitIndex)
				{
					if constexpr (_mode == BitsetElementAccessMode::READ)
					{
						callback(GetBit(block, bitIndex));
					}
					else if constexpr (_mode == BitsetElementAccessMode::WRITE)
					{
						SetBit(block, callback(), bitIndex);
					}
					else if constexpr (_mode == BitsetElementAccessMode::RW)
					{
						const auto value = GetBit(block, bitIndex);
						SetBit(block, callback(value), bitIndex);
					}
				}
			}
		}

		template<typename _Callback>
		void ForEach(const _Callback& callback) const
		{
			for (auto& block : blocks)
			{
				for (auto bitIndex = 0u; bitIndex < blockSize_bits; ++bitIndex)
				{
					callback(GetBit(block, bitIndex));
				}
			}
		}
	};
}