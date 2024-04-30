// Include the UUSL header
#include <core/materials/shaders/render/common.h>

// Input data struct
STRUCT(VERTEX_IN)
	INIT_ATTRIBUTE(float4, 0, POSITION)		// Vertex position
	INIT_ATTRIBUTE(float4, 1, TEXCOORD0)	// Vertex texcoords
	INIT_ATTRIBUTE(float4, 2, COLOR0)		// Vertex color
END

// Output data struct
STRUCT(VERTEX_OUT)
	INIT_POSITION							// Output projected position
	INIT_DATA(float2, 0, DATA_UV)			// Texcoords (x and y only)
END

MAIN_BEGIN(VERTEX_OUT, VERTEX_IN)
	
	// Set output position
	float4 position = mul4(s_transform[0], s_transform[1], s_transform[2], float4(IN_ATTRIBUTE(0).xyz, 1.0f));
	
	OUT_POSITION = mul4(s_projection, position);
	DATA_UV = IN_ATTRIBUTE(1).xy;
	
MAIN_END
