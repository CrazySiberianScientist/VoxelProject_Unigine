#pragma once

#include <UnigineComponentSystem.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"

#include "LogicOrders.h"
#include "Voxels/VoxelStorage.h"
#include "Voxels/VoxelStorageRoles.h"
#include "Voxels/VoxelSpace.h"

namespace VoxelProjectUnigine
{
	class CSVoxelDistanceField : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelDistanceField, Unigine::ComponentBase);

		VoxelBlockBitset voxelBlock;
		static constexpr float voxelSize_meters = 1.0f;
		const VoxelProject::Vec3_meters blockSize_meters{ VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters };

		PROP_PARAM(Material, compute_material);

	private:
		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update();

		void RenderCallback();

		Unigine::TexturePtr distanceFieldTexture;
		Unigine::RenderTargetPtr renderTarget;
	};
}
