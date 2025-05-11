#include "CSVoxelSpace.h"

using namespace Unigine;

namespace VoxelProjectUnigine
{
	void CSVoxelSpace::Init()
	{
		voxelSpace.AddStorage<VoxelStorageRoles::TEST_0>();
	}
}