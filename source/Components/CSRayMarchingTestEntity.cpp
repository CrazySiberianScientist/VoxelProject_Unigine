#include "CSRayMarchingTestEntity.h"
#include "CSRayMarchingTest.h"

namespace VoxelProjectUnigine
{
	void CSRayMarchingTestEntity::Init()
	{
		CSRayMarchingTest::GetInstance()->RegisterEntity(this);
	}
}