#pragma once

#include <concepts>
#include <array>

namespace Utils
{
	template <std::unsigned_integral _T>
	bool GetBit(const _T& value, const size_t bitIndex)
	{
		return value & (1u << bitIndex);
	}

	template <std::unsigned_integral _T>
	void SetBit(_T& value, const size_t bitIndex, const bool bitValue)
	{
		constexpr _T fullMask = ~_T{};
		const _T mask = ~(1u << bitIndex);
		value = (value & mask) | (_T(bitValue) << bitIndex);
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
		static constexpr size_t blocksNum = _size / blockSize_bits + (_size % blockSize_bits ? 1u : 0u);
		using BlockCollection = std::array<_BlockType, blocksNum>;


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
						SetBit(block, bitIndex, callback());
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