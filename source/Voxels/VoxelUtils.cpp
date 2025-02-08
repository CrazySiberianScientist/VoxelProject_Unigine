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
}
