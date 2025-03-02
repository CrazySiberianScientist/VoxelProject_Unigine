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

import CSVoxelVisualizer;

namespace VoxelProjectUnigine
{
	class CSVoxelDistanceField : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelDistanceField, Unigine::ComponentBase);

		VoxelBlockBitset* voxelBlock{};
		static constexpr float voxelSize_meters = 1.0f;
		const VoxelProject::Vec3_meters blockSize_meters{ VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters };

		Unigine::TexturePtr distanceFieldTexture;
		Unigine::RenderTargetPtr renderTarget;
		Unigine::StructuredBufferPtr voxelBlockBuffer = Unigine::StructuredBuffer::create();

		PROP_PARAM(Material, compute_material);

		PROJECT_UTILS_COMPONENT_PROP(class CSVoxelVisualizer, voxel_space);

	private:
		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update();

		void RenderCallback();

		
	};
}
