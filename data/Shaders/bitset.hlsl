bool GetBit(const uint value, const uint bitIndex)
{
    return value & (1u << bitIndex);
}

void SetBit(out uint value, const uint bitIndex, const bool bitValue)
{
    const uint mask = ~(1u << bitIndex);
    value = (value & mask) | (uint(bitValue) << bitIndex);
}