int Pos3dToIndex(const float3 pos3d, const int xSize, const int ySize)
{
    return pos3d[0] + pos3d[1] * xSize + pos3d[2] * xSize * ySize;
}

float3 IndexToPos3d(const int index, const int xSize, const int ySize)
{
    const int xySize = xSize * ySize;
    const float z = index / xySize;
    const int indexXY = index % xySize;
    const float x = indexXY % xSize;
    const float y = indexXY / xSize;

    return float3(x, y, z);
}