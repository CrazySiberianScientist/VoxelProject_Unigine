#include <stdint.h>
#include <concepts>
#include <bit>

import Utils;
export module MathUtils;


export namespace MathUtils
{
	/*export template<std::integral _T>
	constexpr _T CeilToPowerOfTwo(const _T v)
	{
		if (IsPowerOfTwo(v))
			return v;

		return (x & (x - 1)) == 0;
	}*/

	template<typename _Vec3d, typename _SizeType>
	constexpr size_t Pos3dToIndex(const _Vec3d& pos_3d, const _SizeType x_size, const _SizeType y_size)
	{
		return pos_3d[0] + pos_3d[1] * x_size + pos_3d[2] * x_size * y_size;
	}
	
	template<typename _T>
	constexpr float MakeFloatFromIntegers(_T ip, _T fp)
	{
		float float_fp(fp);
		for (; float_fp >= 1.0f; float_fp /= 10.0f) {}
		return ip + float_fp;
	}

	template<typename _T>
	constexpr _T Cubic(const _T v)
	{
		return v * v * v;
	}

	template<std::unsigned_integral _T>
	constexpr _T Log2(const _T v)
	{
		return std::bit_width(v) - 1;
	}

	template<std::unsigned_integral _T>
	constexpr _T CalcCubicRoot(const _T v)
	{
		return _T(1) << (Log2(v) / 3);
	}

	template<std::unsigned_integral _T>
	constexpr _T CalcCubicRootRemain(const _T v)
	{
		auto root = CalcCubicRoot(v);
		auto power = Log2(root);
		return v - (root << 2 * power);
	}
}