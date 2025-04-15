#include "VoxelUtils.h"

#include <algorithm>

namespace VoxelProject
{
	// Только для воксельной сетки с только положительными координатами
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal)
	{
		auto calcLimit = [&rayDirLocal](const float v, const size_t index) {
			return (rayDirLocal[index] >= 0.0) ? floor(v + 1.0f) : ceil(v - 1.0f);
			};
		const auto intersectLimits = MathUtils::MakeVecForEach<3>(startPointLocal_meters, calcLimit);

		auto calcDistance = [&startPointLocal_meters, &rayDirLocal](const float limit, const size_t index) {
			return (limit - startPointLocal_meters[index]) / rayDirLocal[index];
			};
		const auto distances = MathUtils::MakeVecForEach<3>(intersectLimits, calcDistance);

		const float minDistance = std::min(distances[2], std::min(distances[0], distances[1]));

		// При очень маленьком значении числа суммирование с этим числом не имеет эффекта, из-за чего получается бесконечный цикл
		constexpr auto MAX_DISTANCE = FLT_EPSILON * 100;
		return std::max(minDistance, MAX_DISTANCE);
	}

	MeterSizeType RayTraceStep(const Vec3_meters& currentPointLocal, const Vec3_meters& rayDirLocal, const MeterSizeType maxDist, const VoxelSizeType step_voxels)
	{
		const auto deltaDistances = abs(Vec3_meters(step_voxels) / rayDirLocal);

		auto currentPos = currentPointLocal / step_voxels;
		auto currentVoxel = MetersToVoxels(currentPos);

		auto minDist = FLT_MAX;
		for (int i = 0; i < 3; ++i)
		{
			const auto signV = copysign(1.0f, rayDirLocal[i]);
			const auto deltaPos = -signV * (currentPos[i] - currentVoxel[i]) + (signV > 0.0f ? 1 : 0);
			const auto currentDist = deltaPos * deltaDistances[i];

			minDist = std::min(currentDist, minDist);
		}

		return minDist;
	}

	Vec3_voxelsDiff ShiftRectangleDistance(const Vec3_meters& direction, const VoxelSizeType shiftValue)
	{
		const auto t = shiftValue / (abs(direction[0]) + abs(direction[1]) + abs(direction[2]));
		return MetersToVoxels(direction * t);
	}
}
