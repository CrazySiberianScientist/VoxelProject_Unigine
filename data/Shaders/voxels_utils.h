#ifndef VOXEL_UTILS_H
#define VOXEL_UTILS_H

struct VoxelUtils__IntersectResult
{
	float3 points[2];
	int isValid;
};

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

/*
uint3 VoxelRayTrace()
{
    
}
*/

#endif