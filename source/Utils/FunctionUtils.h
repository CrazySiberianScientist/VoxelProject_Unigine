#pragma once

#include <tuple>

namespace Utils
{
	template< class R, class... A >
	struct Func_type_;

	template< class R, class... A >
	struct Func_type_<R(A...)>
	{
		using Return_type = R;
		using Args_tuple = std::tuple<std::decay_t<A>... >;
	};
}