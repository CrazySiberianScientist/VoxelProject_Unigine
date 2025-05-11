#pragma once

#include <UnigineComponentSystem.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>
#include <UnigineMeshDynamic.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"

namespace VoxelProjectUnigine
{
	class CSVoxelRender : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelRender, Unigine::ComponentBase);
	};
}