#include <UnigineComponentSystem.h>
#include <UnigineGame.h>
#include "Utils/ProjectUtilsMacros.h"

export module CSRayMarchingTestEntity;

import LogicOrders;

export namespace VoxelProjectUnigine
{
	class CSRayMarchingTestEntity : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSRayMarchingTestEntity, Unigine::ComponentBase);


		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();
	};
}