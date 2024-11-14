#pragma once

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

namespace VoxelProject
{
	// Только для случая, когда луч растёт в положительную сторону XYZ
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal)
	{
		auto roundDir = [&rayDirLocal](const float v, const size_t index) {
			return (rayDirLocal[index] >= 0) ? ceil(v) : floor(v);
			};
		

		const auto intersectLimits = MathUtils::VecForEach<3>(startPointLocal_meters, roundDir);

	}
}