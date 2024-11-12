#pragma once

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

namespace VoxelProject
{
	// Только для случая, когда луч растёт в положительную сторону XYZ
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal)
	{
		const auto rayDirLocalSign = MathUtils::VecForEach<3>(rayDirLocal, MathUtils::Sign<float>);

		/*
		auto roundDir = [&rayDirLocal](const float v) {
			return (v >= 0) ? 
			};
		*/

		const auto intersectLimits = Unigine::Math::ceil(startPointLocal_meters);
		
	}
}