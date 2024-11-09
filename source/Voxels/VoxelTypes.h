#pragma once

#include <glm/glm.hpp>
#include <UnigineMathLib.h>

namespace VoxelProject
{
	using VoxelSizeType = uint32_t;
	using Vec3_voxels = glm::vec<3, VoxelSizeType>;
	using Vec3_meters = Unigine::Math::vec3;
}