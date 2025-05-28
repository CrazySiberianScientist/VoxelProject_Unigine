#pragma once

#include <UnigineComponentSystem.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>
#include <UnigineMeshDynamic.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"
#include "LogicOrders.h"

namespace VoxelProjectUnigine
{
	class CSVoxelRender : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelRender, Unigine::ComponentBase);

		PROJECT_UTILS_COMPONENT_PROP(CSVoxelDistanceField, voxel_distance_field);
		PROP_PARAM(Material, voxel_render_material);

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();

		void RenderCallback();
	};
}