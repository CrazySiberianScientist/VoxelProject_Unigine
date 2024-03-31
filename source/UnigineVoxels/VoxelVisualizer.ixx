#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"

export module VoxelVisualizer;

import VoxelStorage;

using namespace Unigine;

export namespace VoxelProject
{
	class VoxelVisualizer : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(VoxelVisualizer, Unigine::ComponentBase);

		COMPONENT_INIT(Init);
		void Init()
		{
			Log::message("Init KOKOKO!");
		}
	};
}