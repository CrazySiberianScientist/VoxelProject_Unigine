#include <type_traits>
#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"
#include "VoxelProject/utils/UtilsMacros.h"

export module CSVoxelSpaceTest;

import VoxelStorageRoles;
import VoxelStorage;
import VoxelSpace;
import Utils;

using namespace Unigine;
using namespace VoxelProject;
using namespace Utils;

export namespace VoxelProjectUnigine
{
	class CSVoxelSpace : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelSpace, Unigine::ComponentBase);

	public:
		VoxelSpace<VoxelStorageRoles::Pack> voxelSpace{ 1 };

	private:
		COMPONENT_UPDATE(Update);
		void Update()
		{
			constexpr auto v = IntegralConstant<VoxelStorageRoles::TEST_0>::value;
			const auto s = voxelSpace.GetStorage<VoxelStorageRoles::TEST_0>().blockSideSize_meters;
			//voxelSpace.storages.

			const int* cptr;
			auto ptr = ConstCast(cptr);

			TypeTableBase tableb;
			TypeTable<VoxelStorageRoles::Pack> table;
			const auto &vt = table.Get<VoxelStorageRoles::TEST_2>();
			//TypeTable<VoxelStorageRole::Pack>::
			tableb.As<VoxelStorageRoles::Pack>();
		}
	};
}