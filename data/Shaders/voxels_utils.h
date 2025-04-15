#ifndef VOXEL_UTILS_H
#define VOXEL_UTILS_H

struct VoxelUtils__IntersectResult
{
	float3 points[2];
	int isValid;
};

uint3 VoxelsUtils__MetersToVoxels(const float3 vec_meters)
{
	return uint3(vec_meters[0], vec_meters[1], vec_meters[2]);
}

uint VoxelsUtils__Pos3dToIndex(const uint3 pos3d, const int xSize, const int ySize)
{
    return pos3d[0] + pos3d[1] * xSize + pos3d[2] * xSize * ySize;
}

float3 VoxelsUtils__IndexToPos3dFloat(const int index, const int xSize, const int ySize)
{
    const int xySize = xSize * ySize;
    const float z = index / xySize;
    const int indexXY = index % xySize;
    const float x = indexXY % xSize;
    const float y = indexXY / xSize;

    return float3(x, y, z);
}

uint3 VoxelsUtils__IndexToPos3dInt(const uint index, const uint xSize, const uint ySize)
{
    const uint xySize = xSize * ySize;
    const uint z = index / xySize;
    const uint indexXY = index % xySize;
    const uint x = indexXY % xSize;
    const uint y = indexXY / xSize;

    return uint3(x, y, z);
}

float2 VoxelsUtils__IntersectLineAABB(const float3 startPoint, const float3 dir, const float3 bbMin, const float3 bbMax)
{
    // https://tavianator.com/2022/ray_box_boundary.html
    float tMin = 0;
    float tMax = FLT_MAX;

    unroll
    for (int i = 0; i < 3; ++i)
    {
        const float t0 = (bbMin[i] - startPoint[i]) / dir[i];
        const float t1 = (bbMax[i] - startPoint[i]) / dir[i];

        tMin = min(max(t0, tMin), max(t1, tMin));
        tMax = max(min(t0, tMax), min(t1, tMax));
    }

    return float2(tMin, tMax);
}

bool VoxelsUtils__CheckIntersectLineTwoPoints(const float2 intersectLineResult)
{
	return intersectLineResult[0] < intersectLineResult[1] && 0.0f <= intersectLineResult[1];
}

VoxelUtils__IntersectResult VoxelsUtils__IntersectSegmentAABB(const float3 startPoint, const float3 dir, const float3 bbMin, const float3 bbMax, const float segmentLength)
{
	const float2 intersectLineResult = VoxelsUtils__IntersectLineAABB(startPoint, dir, bbMin, bbMax);

	VoxelUtils__IntersectResult result;
	result.isValid = VoxelsUtils__CheckIntersectLineTwoPoints(intersectLineResult) && (intersectLineResult[0] <= segmentLength);

	result.points[0] = startPoint + dir * intersectLineResult[0] * (intersectLineResult[0] > 0.0f);
	result.points[1] = startPoint + dir * (intersectLineResult[1] > segmentLength ? segmentLength : intersectLineResult[1]);

	return result;
}

float VoxelsUtils__ShiftRectangleDistance(const float3 direction, const uint shiftValue)
{
	const float t = (shiftValue) / (abs(direction[0]) + abs(direction[1]) + abs(direction[2]));
	return t;
}

/*
void VoxelUtils__RayTrace(const float3 startPointLocal, const float3 rayDirLocal, const float maxDist, RWTexture3D<uint> voxelData)
{
	const float3 deltaDistances = abs(float3(1,1,1) / rayDirLocal);

	float3 currentPos = startPointLocal;
	uint3 currentVoxel = VoxelsUtils__MetersToVoxels(startPointLocal);

	float3 distances = float3(0,0,0);
	int3 voxelStep = int3(0,0,0);

	unroll
	for (int i = 0; i < 3; ++i)
	{
		const float signV = rayDirLocal[i] < 0 ? -1 : 1;
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
*/

/*
// Только для воксельной сетки с только положительными координатами
void VoxelUtils__RayTrace(const Vec3_meters& startPointLocal, const Vec3_meters& endPointLocal
	, _OutPointsPosType& outPointsPos = Utils::NULLOPT_STATIC, _OutVoxelsPosType& outVoxelsPos = Utils::NULLOPT_STATIC)
{
	const auto dir = endPointLocal - startPointLocal;
	RayTrace(startPointLocal, Unigine::Math::normalize(dir), dir.length(), outPointsPos, outVoxelsPos);
}
*/

#endif