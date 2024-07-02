#pragma once

namespace VoxelProjectUnigine
{
	struct GlobalInitOrder
	{
		enum
		{
			COMPONENT_FIELDS = -1
			, COMMON_LOGIC = 0
		};
	};

	struct GlobalUpdateOrder
	{
		enum
		{
			COMMON_LOGIC = 0
		};
	};
}