#include <type_traits>
#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"
#include "VoxelProject/utils/UtilsMacros.h"

export module CSVoxelSpaceTest;

import VoxelStorage;
import VoxelSpace;
import Utils;

using namespace Unigine;
using namespace VoxelProject;

export namespace VoxelProjectUnigine
{
	struct VoxelStorageRole
	{
		enum
		{
			TEST_0,
			TEST_1,
		};
		using Pack = Utils::TypesPack<
			Utils::IntegralTypeTableElement<TEST_0, VoxelStorage<VoxelBlockBitset>>,
			Utils::IntegralTypeTableElement<TEST_1, VoxelStorage<VoxelBlockBitset>>
		>;
	};

	class CSVoxelSpaceTest : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelSpaceTest, Unigine::ComponentBase);

	public:
		VoxelSpace<VoxelStorageRole::Pack> voxelSpace{ 1 };

	private:
		COMPONENT_UPDATE(Update);
		void Update()
		{
			int kakan = 666;
		}
	};
}