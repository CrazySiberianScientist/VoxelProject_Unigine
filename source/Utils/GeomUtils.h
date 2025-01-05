#pragma once

#include <array>
#include <algorithm>
#include <math.h>
#include <limits>

#include "Voxels/VoxelTypes.h"

namespace GeomUtils
{
	// возвращает два `t` для точек пересечения, где point = startPoint + dir * t; Если t < 0, то пересечения нет
	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{} [0] ) >>
	std::array<_ValueType, 2> IntersectLineAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax)
	{
		constexpr auto vecSize = 3;

		// https://tavianator.com/2022/ray_box_boundary.html
		_ValueType tMin = {};
		_ValueType tMax = std::numeric_limits<_ValueType>::infinity();

		for (int i = 0; i < vecSize; ++i)
		{
			const auto t0 = (bbMin[i] - startPoint[i]) / dir[i];
			const auto t1 = (bbMax[i] - startPoint[i]) / dir[i];

			tMin = std::min(std::max(t0, tMin), std::max(t1, tMin));
			tMax = std::max(std::min(t0, tMax), std::min(t1, tMax));
		}

		return { tMin, tMax };
	}

	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{}[0]) >>
	bool CheckIntersectLineAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax)
	{
		const auto intersectLineResult = IntersectLineAABB<_Vec3, _ValueType>(startPoint, dir, bbMin, bbMax);
		return intersectLineResult[0] < intersectLineResult[1];
	}

	template<typename _Vec3>
	struct IntersectRayResult
	{
		std::array<_Vec3,2> points;
		bool isValid;
	};

	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{}[0]) >>
	auto IntersectRayAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax)
	{
		const auto intersectLineResult = IntersectLineAABB<_Vec3, _ValueType>(startPoint, dir, bbMin, bbMax);

		IntersectRayResult<_Vec3> result;

		result.points[0] = startPoint + (intersectLineResult[0] > _ValueType{}) * dir * intersectLineResult[0];
		result.points[1] = startPoint + dir * intersectLineResult[1];
		result.isValid = intersectLineResult[0] < intersectLineResult[1] && _ValueType{} <= intersectLineResult[1];

		return result;
	}
}