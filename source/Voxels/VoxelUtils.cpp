#include "VoxelUtils.h"

#include <algorithm>

namespace VoxelProject
{
	// Только для воксельной сетки с только положительными координатами
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal)
	{
		auto calcLimit = [&rayDirLocal](const float v, const size_t index) {
			return (float)(int)(v + copysign(1.0f, (float)rayDirLocal[index]));
			};
		const auto intersectLimits = MathUtils::MakeVecForEach<3>(startPointLocal_meters, calcLimit);

		auto calcDistance = [&startPointLocal_meters, &rayDirLocal](const float v, const size_t index) {
			const auto distance = (v - startPointLocal_meters[index]) / rayDirLocal[index];
			// Когда оно слишком мало, то прибавление этого числа не влияет на другое число из-за чего получается бесконечный цикл
			return distance > FLT_EPSILON ? distance : FLT_MAX;
			};
		const auto distances = MathUtils::MakeVecForEach<3>(intersectLimits, calcDistance);

		const float minDistance = std::min(distances[2], std::min(distances[0], distances[1]));
		return minDistance;
	}

	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& rayDirLocal, const float maxDist)
	{
		std::vector<Vec3_meters> points;

		float currentDist = {};
		auto currentPoint = startPointLocal;
		//points.push_back(currentPoint);
		for (;currentDist < maxDist;)
		{
			currentDist += CalcRayDelta(currentPoint, rayDirLocal);
			currentPoint = startPointLocal + rayDirLocal * currentDist;
			points.push_back(currentPoint);
		}

		return points;
	}

	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& endPointLocal)
	{
		const auto dir = endPointLocal - startPointLocal;
		return RayTrace(startPointLocal, Unigine::Math::normalize(dir), dir.length());
	}
}
