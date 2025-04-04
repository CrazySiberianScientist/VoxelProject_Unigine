#ifndef BIT_UTILS_H
#define BIT_UTILS_H

bool BitUtils__GetBit(const uint value, const uint bitIndex)
{
    return value & (1u << bitIndex);
}

void BitUtils__SetBit(out uint value, const uint bitIndex, const bool bitValue)
{
    const uint mask = ~(1u << bitIndex);
    value = (value & mask) | (uint(bitValue) << bitIndex);
}

bool BitUtils__BitsetGetBit(StructuredBuffer<uint> bitset, const uint bitIndex)
{
    const uint blockSize_bits = 32;
    const uint blockIndex = bitIndex / blockSize_bits;
    const uint bitIndexInBlock = bitIndex % blockSize_bits;
    return BitUtils__GetBit(bitset[blockIndex], bitIndex);
}

#endif