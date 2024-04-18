export module VoxelStorageRoles;

import VoxelStorage;
import Utils;

/*

*/

export namespace VoxelProjectUnigine
{
	// Если использовать все namespace, то тупит intellisence в модулях, где есть import этого
	using Utils::TypeTableEntry;
	using VoxelProject::VoxelStorage;
	using VoxelProject::VoxelBlockBitset;

	struct VoxelStorageRoles
	{
		enum
		{
			TEST_0,
			TEST_1,
			TEST_2
		};

		using Pack = Utils::TypesPack<
			Utils::TypeTableEntry<TEST_0, VoxelProject::VoxelStorage<VoxelProject::VoxelBlockBitset>>,
			Utils::TypeTableEntry<TEST_1, VoxelProject::VoxelStorage<VoxelProject::VoxelBlockBitset>>,
			Utils::TypeTableEntry<TEST_2, VoxelProject::VoxelStorage<VoxelProject::VoxelBlockBitset>>
		>;
	};
	
}