#include "CSVoxelSpace.h"

#include <UnigineRender.h>

using namespace Unigine;

namespace VoxelProjectUnigine
{
	void CSVoxelSpace::Init()
	{
		voxelSpace.AddStorage<VoxelStorageRoles::TEST_0>();

		Render::getEventEndPostMaterials().connect(this, &CSVoxelSpace::RenderCallback);
	}

	void CSVoxelSpace::RenderCallback()
	{
	}

	void CSVoxelSpace::RenderBlock(const VoxelProject::VoxelBlockBitset& voxelBlockBitset)
	{
	}
}