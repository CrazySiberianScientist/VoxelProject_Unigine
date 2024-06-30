#pragma once

#include <vector>
#include <tuple>
#include <utility>

namespace Utils
{
	template<typename ..._Types>
	class StructOfVectors
	{
	public:
		template<size_t _I>
		auto &get(const size_t index) { return std::get<_I>(vectors)[index]; }

		template<size_t _I>
		auto &get(const size_t index) const { return std::get<_I>(vectors)[index]; }

		template<size_t _I>
		auto data() const { return std::get<_I>(vectors).data(); }

		template<typename ..._Args>
		void append(_Args &&...args) { append_impl(std::index_sequence_for<_Types...>{}, std::forward<_Args>(args)...); }

		auto size() const { return std::get<0>(vectors).size(); }
		void clear() { clear_impl(std::index_sequence_for<_Types...>{}); }

	private:
		template<size_t... _I>
		void clear_impl(std::index_sequence<_I...>) { std::initializer_list<char>{(std::get<_I>(vectors).clear(), 0)...}; }

		template<size_t... _I, typename ..._Args>
		void append_impl(std::index_sequence<_I...>, _Args &&...args) { std::initializer_list<char>{(std::get<_I>(vectors).emplace_back(std::forward<_Args>(args)), 0)...}; }

		std::tuple<std::vector<_Types>...> vectors;
	};
}