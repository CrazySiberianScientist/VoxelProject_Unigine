module CSRayMarchingTestEntity;

import CSRayMarchingTest;

namespace VoxelProjectUnigine
{
	
	void CSRayMarchingTestEntity::Init()
	{
		CSRayMarchingTest::GetInstance()->RegisterEntity(this);
	}
	
}