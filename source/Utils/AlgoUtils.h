#pragma once

#include <utility>

namespace AlgoUtils
{
	template<typename _Vec3Type>
	_Vec3Type SortVec3(const _Vec3Type& vec3)
	{
		_Vec3Type retVec3 = vec3;
		if (retVec3[0] > retVec3[1])
			std::swap(retVec3[0], retVec3[1]);
		if (retVec3[1] > retVec3[2])
			std::swap(retVec3[1], retVec3[2]);
		if (retVec3[0] > retVec3[1])
			std::swap(retVec3[0], retVec3[1]);

		return retVec3;
	}
}