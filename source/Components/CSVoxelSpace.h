#pragma once

#include <type_traits>
#include <any>

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
	class CSVoxelSpace : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelSpace, Unigine::ComponentBase);

	public:
		VoxelProject::VoxelSpace<VoxelStorageRoles::Pack> voxelSpace{ 1, 1.0f };

	private:
		COMPONENT_UPDATE(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init();

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			const auto s = voxelSpace.GetStorage<VoxelStorageRoles::TEST_0>().blockSideSize_meters;

			
		}

		void RenderCallback();

		void RenderBlock(const VoxelProject::VoxelBlockBitset & voxelBlockBitset);
	};
}