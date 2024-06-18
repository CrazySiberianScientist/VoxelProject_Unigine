#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"
#include "LogicOrders.h"

export module CSVoxelVisualizer;

import VoxelStorage;

using namespace Unigine;

export namespace VoxelProjectUnigine
{
	class CSVoxelVisualizer : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelVisualizer, Unigine::ComponentBase);

		PROP_PARAM(Color, valid_voxel_color, Unigine::Math::vec4_green);
		PROP_PARAM(Color, invalid_voxel_color, Unigine::Math::vec4_black);
		PROP_PARAM(Vec3, visualizer_distance, Unigine::Math::vec3(4.0f));

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			Log::message("Init KOKOKO!");
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{

		}
	};
}