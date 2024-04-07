#include <type_traits>
#include <UnigineComponentSystem.h>
#include "Utils/ProjectUtilsMacros.h"
#include "VoxelProject/utils/UtilsMacros.h"

export module CSVoxelSpaceTest;

import VoxelStorage;
import Utils;

using namespace Unigine;
using namespace VoxelProject;

export namespace VoxelProjectUnigine
{
	struct VoxelStorageRole
	{
		enum
		{
			TEST
		};
		using t = Utils::TypeTableElement<std::integral_constant<decltype(TEST), TEST>, VoxelStorage<VoxelBlockBitset>>;
		using Pack = Utils::TypesPack<
			Utils::IntegralTypeTableElement<TEST, VoxelStorage<VoxelBlockBitset>>
		>;
	};

	class CSVoxelSpaceTest : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelSpaceTest, Unigine::ComponentBase);

	public:

	};
}