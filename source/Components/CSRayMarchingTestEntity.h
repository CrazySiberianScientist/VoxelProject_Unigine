#pragma once

#include <UnigineComponentSystem.h>
#include <UnigineGame.h>

#include "Utils/ProjectUtilsMacros.h"
#include "LogicOrders.h"


namespace VoxelProjectUnigine
{
	class CSRayMarchingTestEntity : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSRayMarchingTestEntity, Unigine::ComponentBase);

	public:
		PROP_PARAM(Float, size, 1.0f);

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();
	};
}