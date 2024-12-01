#pragma once

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

namespace VoxelProject
{
	// Только для воксельной сетки с только положительными координатами
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal);

	// Только для воксельной сетки с только положительными координатами
	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& rayDirLocal, const float maxDist);
	// Только для воксельной сетки с только положительными координатами
	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& endPointLocal);
}