#include "CSVoxelFieldMap.h"

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelFieldMap::Init()
	{
		Render::getEventEndPostMaterials().connect(this, &CSVoxelFieldMap::RenderCallback);
	}

	void CSVoxelFieldMap::RenderCallback()
	{
	}

}
