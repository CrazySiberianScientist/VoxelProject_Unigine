#ifndef VOXEL_UTILS_H
#define VOXEL_UTILS_H

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

/*
uint3 VoxelRayTrace()
{
    
}
*/

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

auto VoxelsUtils__IntersectSegmentAABB(const _Vec3& startPoint, const _Vec3& dir, const _Vec3& bbMin, const _Vec3& bbMax, const _ValueType &segmentLength)
{
	const auto intersectLineResult = IntersectLineAABB<_Vec3, _ValueType>(startPoint, dir, bbMin, bbMax);

	IntersectResult<_Vec3> result;
	result.isValid = CheckIntersectLineTwoPoints(intersectLineResult) && (intersectLineResult[0] <= segmentLength);

	if (result.isValid)
	{
		result.points[0] = startPoint + dir * intersectLineResult[0] * (intersectLineResult[0] > _ValueType{});
		result.points[1] = startPoint + dir * (intersectLineResult[1] > segmentLength ? segmentLength : intersectLineResult[1]);
	}

	return result;
}

#endif