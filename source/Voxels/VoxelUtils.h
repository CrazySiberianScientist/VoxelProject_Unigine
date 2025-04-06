#pragma once

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

#include <Utils/Utils.h>
#include <Utils/UtilsMacros.h>

namespace VoxelProject
{
	template<typename _Vec3Type>
	auto RectangleDistance(const _Vec3Type& start, const _Vec3Type& end)
	{
		const auto delta = end - start;
		return abs(delta[0]) + abs(delta[1]) + abs(delta[2]);
	}

	// Только для воксельной сетки с только положительными координатами
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal);

	// Только для воксельной сетки с только положительными координатами
	template<typename _OutPointsPosType = std::nullopt_t, typename _OutVoxelsPosType = std::nullopt_t>
	void RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& rayDirLocal, const float maxDist
		, _OutPointsPosType& outPointsPos = Utils::NULLOPT_STATIC, _OutVoxelsPosType& outVoxelsPos = Utils::NULLOPT_STATIC)
	{
		const auto deltaDistances = (Vec3_meters(1.0f) / rayDirLocal).abs();

		auto currentPos = startPointLocal;
		auto currentVoxel = MetersToVoxels(startPointLocal);

		Vec3_meters distances(0.0f);
		std::array<int32_t, 3> voxelStep{};
		for (int i = 0; i < 3; ++i)
		{
			const auto signV = copysign(1.0f, rayDirLocal[i]);
			voxelStep[i] = (int)signV;

			const auto deltaPos = -signV * (currentPos[i] - currentVoxel[i]) + (signV > 0.0f ? 1.0f : 0.0f);
			distances[i] = deltaPos * deltaDistances[i];
		}

		auto getMinIndex = [](const Vec3_meters& v)
			{
				int minIndex = 0;
				for (int i = 0; i < 3; ++i)
				{
					minIndex = v[i] < v[minIndex] ? i : minIndex;
				}
				return minIndex;
			};

		while (true)
		{
			const auto minDistIndex = getMinIndex(distances);
			const auto currentDist = distances[minDistIndex];

			if constexpr (!UTILS_IS_NULLOPT(outPointsPos))
				outPointsPos.push_back(startPointLocal + rayDirLocal * currentDist);

			if constexpr (!UTILS_IS_NULLOPT(outVoxelsPos))
				outVoxelsPos.push_back(currentVoxel);

			if (currentDist >= maxDist)
			{
				break;
			}

			distances[minDistIndex] += deltaDistances[minDistIndex];
			currentVoxel[minDistIndex] += voxelStep[minDistIndex];
		}
	}

	// Только для воксельной сетки с только положительными координатами
	template<typename _OutPointsPosType = std::nullopt_t, typename _OutVoxelsPosType = std::nullopt_t>
	void RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& endPointLocal
		, _OutPointsPosType& outPointsPos = Utils::NULLOPT_STATIC, _OutVoxelsPosType& outVoxelsPos = Utils::NULLOPT_STATIC)
	{
		const auto dir = endPointLocal - startPointLocal;
		RayTrace(startPointLocal, Unigine::Math::normalize(dir), dir.length(), outPointsPos, outVoxelsPos);
	}
}