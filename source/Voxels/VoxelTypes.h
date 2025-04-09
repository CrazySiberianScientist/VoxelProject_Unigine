#pragma once

#include <glm/glm.hpp>
#include <UnigineMathLib.h>

#include "Utils/Utils.h"

namespace VoxelProject
{
	using VoxelSizeType = uint32_t;
	using VoxelDiffSizeType = int32_t;
	using MeterSizeType = float;
	using MeterWorldSizeType = double;

	using Vec3_voxels = glm::vec<3, VoxelSizeType>;
	using Vec3_voxelsDiff = glm::vec<3, VoxelDiffSizeType>;

	using Vec3_meters = Unigine::Math::vec3;
	using Vec3_metersWorld = Unigine::Math::Vec3;

	template <typename _Vec3_meters, typename _Vec3OutType = Vec3_voxels>
	_Vec3OutType MetersToVoxels(const _Vec3_meters& vec_meters)
	{
		using ElementType = Utils::CollectionElementType<_Vec3OutType>;
		return { (ElementType)vec_meters[0], (ElementType)vec_meters[1], (ElementType)vec_meters[2] };
	}
}