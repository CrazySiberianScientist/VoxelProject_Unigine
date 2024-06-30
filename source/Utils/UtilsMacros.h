#pragma once

#define UTILS_ENUM_SEQUENCE(NAME, ...)\
struct NAME{\
	enum {__VA_ARGS__, NUMBER};\
	using type = std::index_sequence<__VA_ARGS__>;\
}


#define UTILS_TYPE_TABLE_ELEMENT(KEY, VALUE)\
struct KEY {};\
template<> struct TypeTableElement<KEY> { VALUE value; };