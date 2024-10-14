#include <type_traits>
#include <any>

#include <UnigineComponentSystem.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"

import VoxelStorageRoles;
import VoxelStorage;
import VoxelSpace;

using namespace Unigine;
using namespace VoxelProject;
using namespace Utils;

namespace VoxelProjectUnigine
{
	class CSVoxelSpace : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelSpace, Unigine::ComponentBase);

	public:
		VoxelSpace<VoxelStorageRoles::Pack> voxelSpace{ 1 };

	private:
		COMPONENT_UPDATE(Init);
		void Init()
		{
			voxelSpace.storages.Emplace<uint8_t(0)>(VoxelSizeType(1), 1.0f);
		}

		COMPONENT_UPDATE(Update);
		void Update()
		{
			const auto s = voxelSpace.GetStorage<VoxelStorageRoles::TEST_0>().blockSideSize_meters;

			
		}

		void Test();
	};
}