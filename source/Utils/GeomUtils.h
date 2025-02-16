#pragma once

#include <array>
#include <algorithm>
#include <math.h>
#include <limits>

#include "Voxels/VoxelTypes.h"

namespace GeomUtils
{
	template<typename _Vec3>
	struct IntersectResult
	{
		std::array<_Vec3,2> points;
		bool isValid;
	};

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

	template<typename _ValueType>
	bool CheckIntersectLineTwoPoints(const std::array<_ValueType, 2>& intersectLineResult)
	{
		return intersectLineResult[0] < intersectLineResult[1] && _ValueType{} <= intersectLineResult[1];
	}

	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{}[0]) >>
	auto IntersectRayAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax)
	{
		const auto intersectLineResult = IntersectLineAABB<_Vec3, _ValueType>(startPoint, dir, bbMin, bbMax);

		IntersectResult<_Vec3> result;
		result.isValid = CheckIntersectLineTwoPoints(intersectLineResult);

		if (result.isValid)
		{
			result.points[0] = startPoint + dir * intersectLineResult[0] * (intersectLineResult[0] > _ValueType{});
			result.points[1] = startPoint + dir * intersectLineResult[1];
		}
		

		return result;
	}



	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{}[0]) >>
	auto IntersectSegmentAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax, const _ValueType &segmentLength)
	{
		const auto intersectLineResult = IntersectLineAABB<_Vec3, _ValueType>(startPoint, dir, bbMin, bbMax);

		IntersectResult<_Vec3> result;
		result.isValid = CheckIntersectLineTwoPoints(intersectLineResult) && (intersectLineResult[0] <= segmentLength);

		if (result.isValid)
		{
			result.points[0] = startPoint + dir * intersectLineResult[0] * (intersectLineResult[0] > _ValueType{});
			result.points[1] = startPoint + dir * (intersectLineResult[1] > segmentLength ? segmentLength : intersectLineResult[1]);
		}

		return result;
	}

}