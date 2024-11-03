#pragma once

#include <stdint.h>
#include <concepts>
#include <bit>

#include "Utils/Utils.h"


namespace MathUtils
{
	/*export template<std::integral _T>
	constexpr _T CeilToPowerOfTwo(const _T v)
	{
		if (IsPowerOfTwo(v))
			return v;

		return (x & (x - 1)) == 0;
	}*/

	template<typename _Vec3d, typename _SizeType>
	constexpr size_t Pos3dToIndex(const _Vec3d& pos3d, const _SizeType xSize, const _SizeType ySize)
	{
		return pos3d[0] + pos3d[1] * xSize + pos3d[2] * xSize * ySize;
	}

	template<typename _Vec3d, typename _SizeType, typename _IndexType>
	constexpr _Vec3d IndexToPos3d(const _IndexType index,  const _SizeType xSize, const _SizeType ySize)
	{
		const auto xySize = xSize * ySize;
		const auto z = index / xySize;
		const auto indexXY = index % xySize;
		const auto x = indexXY % xSize;
		const auto y = indexXY / xSize;

		using RetType = std::remove_cvref_t<decltype(_Vec3d{} [0] ) > ;

		return {(RetType)x, (RetType)y, (RetType)z};
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