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

	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& rayDirLocal, const float maxDist)
	{
		std::vector<Vec3_meters> points;

		const auto speedVec = (Vec3_meters(1.0f) / rayDirLocal).abs();

		auto currentVoxel = MetersToVoxels(startPointLocal);
		auto currentPos = startPointLocal;
		
		Vec3_meters distancesVec(0.0f);
		Vec3_voxels voxelStepVec(0);
		for (int i = 0; i < 3; ++i)
		{
			const auto signV = copysign(1.0f, rayDirLocal[i]);
			voxelStepVec[i] = (int)signV;
			
			const auto deltaPos = -signV * (currentPos[i] - currentVoxel[i]) + (signV > 0.0f ? 1.0f : 0.0f);
		}



		return points;
	}

	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& endPointLocal)
	{
		const auto dir = endPointLocal - startPointLocal;
		return RayTrace(startPointLocal, Unigine::Math::normalize(dir), dir.length());
	}
}
