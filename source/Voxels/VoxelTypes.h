#pragma once

#include <glm/glm.hpp>
#include <UnigineMathLib.h>

namespace VoxelProject
{
	using VoxelSizeType = uint32_t;
	using Vec3_voxels = glm::vec<3, VoxelSizeType>;
	using Vec3_meters = Unigine::Math::vec3;
	using Vec3_metersWorld = Unigine::Math::Vec3;

	template <typename _Vec3_meters>
	Vec3_voxels MetersToVoxels(const _Vec3_meters& vec_meters)
	{
		return { (VoxelSizeType)vec_meters[0], (VoxelSizeType)vec_meters[1], (VoxelSizeType)vec_meters[2] };
	}
}