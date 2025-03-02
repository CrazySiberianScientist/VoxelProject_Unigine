uint Pos3dToIndex(const uint3 pos3d, const int xSize, const int ySize)
{
    return pos3d[0] + pos3d[1] * xSize + pos3d[2] * xSize * ySize;
}

float3 IndexToPos3dFloat(const int index, const int xSize, const int ySize)
{
    const int xySize = xSize * ySize;
    const float z = index / xySize;
    const int indexXY = index % xySize;
    const float x = indexXY % xSize;
    const float y = indexXY / xSize;

    return float3(x, y, z);
}

int3 IndexToPos3dInt(const int index, const int xSize, const int ySize)
{
    const int xySize = xSize * ySize;
    const int z = index / xySize;
    const int indexXY = index % xySize;
    const int x = indexXY % xSize;
    const int y = indexXY / xSize;

    return int3(x, y, z);
}