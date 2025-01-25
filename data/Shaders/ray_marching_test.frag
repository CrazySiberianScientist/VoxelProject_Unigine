#include <core/materials/shaders/render/common.h>

STRUCT_FRAG_BEGIN
	INIT_COLOR(float4)
STRUCT_FRAG_END

INIT_STRUCTURED_BUFFER(0, uint, voxelBlockData);

MAIN_FRAG_BEGIN(FRAGMENT_IN)

MAIN_FRAG_END