#pragma once

#include <array>
#include <algorithm>

#include "Voxels/VoxelTypes.h"

namespace GeomUtils
{
	// возвращает два `t` для точек пересечения, где point = startPoint + dir * t; Если t < 0, то пересечения нет
	template <typename _Vec3, typename _ValueType = std::decay_t<decltype(_Vec3{} [0] ) >>
	std::array<_ValueType, 2> IntersectRayAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax)
	{
		constexpr auto vecSize = 3;

		const auto tIsectMin = (bbMin - startPoint) / dir;
		const auto tIsectMax = (bbMax - startPoint) / dir;

		int tValuesSize = 0;
		std::array<_ValueType, vecSize * 2> tValues;

		for (int i = 0; i < vecSize; ++i)
		{
			const auto t = tIsectMin[i];
			if (t < 0.0)
			{
				continue;
			}

			tValues[tValuesSize] = t;
			++tValuesSize;
		}
		for (int i = 0; i < vecSize; ++i)
		{
			const auto t = tIsectMax[i];
			if (t < 0.0)
			{
				continue;
			}

			tValues[tValuesSize] = t;
			++tValuesSize;
		}

		std::partial_sort(tValues.begin(), tValues.begin() + 2, tValues.begin() + tValuesSize);

		const auto firstPoint = startPoint + dir * tMin;

	}
}