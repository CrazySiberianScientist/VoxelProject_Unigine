#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"

export module CSVoxelVisualizer;

import VoxelStorage;

using namespace Unigine;

export namespace VoxelProjectUnigine
{
	class CSVoxelVisualizer : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelVisualizer, Unigine::ComponentBase);

		COMPONENT_INIT(Init);
		void Init()
		{
			Log::message("Init KOKOKO!");
		}
	};
}