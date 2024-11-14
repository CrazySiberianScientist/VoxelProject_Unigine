#pragma once

#include <tuple>

namespace Utils
{
	// https://functionalcpp.wordpress.com/2013/08/05/function-traits/

	template<typename>
	struct CallableTypes;

	template< class _ReturnType, class... _ArgsTypes >
	struct CallableTypes<_ReturnType(_ArgsTypes...)>
	{
		using ReturnType = _ReturnType;
		using ArgsTypes = std::tuple<std::decay_t<_ArgsTypes>... >;
		static constexpr auto argsNum = std::tuple_size_v<ArgsTypes>;
	};

	// function pointer
	template< typename _ReturnType, typename... _ArgsTypes >
	struct CallableTypes<_ReturnType(*)(_ArgsTypes...)> : CallableTypes<_ReturnType(_ArgsTypes...)> {  };

	// member function pointer
	template<class _ClassType, class _ReturnType, class... _ArgsTypes>
	struct CallableTypes<_ReturnType(_ClassType::*)(_ArgsTypes...)> : CallableTypes<_ReturnType(_ArgsTypes...)>
	{
		using ClassType = _ClassType;
	};

	// const member function pointer
	template<class _ClassType, class _ReturnType, class... _ArgsTypes>
	struct CallableTypes<_ReturnType(_ClassType::*)(_ArgsTypes...) const> : CallableTypes<_ReturnType(_ClassType::*)(_ArgsTypes...)>
	{};

	// member object pointer
	template<class _ClassType, class _ReturnType>
	struct CallableTypes<_ReturnType(_ClassType::*)> : CallableTypes<_ReturnType(_ClassType&)>
	{};

	template<typename _Functor>
	struct CallableTypes : CallableTypes<decltype(&_Functor::operator())>
	{};

	template<class _Functor>
	struct CallableTypes<_Functor&> : public CallableTypes<_Functor>
	{};

	template<class _Functor>
	struct CallableTypes<_Functor&&> : public CallableTypes<_Functor>
	{};
}