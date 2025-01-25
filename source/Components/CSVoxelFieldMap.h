#pragma once

#include <UnigineComponentSystem.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"

#include "LogicOrders.h"
#include "Voxels/VoxelStorage.h"
#include "Voxels/VoxelStorageRoles.h"
#include "Voxels/VoxelSpace.h"

namespace VoxelProjectUnigine
{
	class CSVoxelFieldMap : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelFieldMap, Unigine::ComponentBase);

		VoxelBlockBitset voxelBlock;
		static constexpr float voxelSize_meters = 1.0f;
		const VoxelProject::Vec3_meters blockSize_meters{ VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters };

	private:
		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();

		void RenderCallback();

		Unigine::TexturePtr distanceFieldTexture;
	};
}
