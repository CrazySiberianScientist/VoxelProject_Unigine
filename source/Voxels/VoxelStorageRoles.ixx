#include "Utils/Utils.h"

export module VoxelStorageRoles;

import VoxelStorage;

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
			TypeTableEntry<TEST_0, VoxelStorage<VoxelBlockBitset>>,
			TypeTableEntry<TEST_1, VoxelStorage<VoxelBlockBitset>>,
			TypeTableEntry<TEST_2, VoxelStorage<VoxelBlockBitset>>
		>;
	};
	
}