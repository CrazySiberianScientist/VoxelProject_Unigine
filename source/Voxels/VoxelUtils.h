#pragma once

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

namespace VoxelProject
{
	// Только для воксельной сетки с только положительными координатами
	float CalcRayDelta(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal);
	std::vector<Vec3_meters> RayTrace(const Vec3_meters& startPointLocal_meters, const Vec3_meters& rayDirLocal);
}