#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>

#include <Voxels/VoxelStorage.h>
#include "Voxels/VoxelTypes.h"
#include "Utils/ProjectUtilsMacros.h"
#include "LogicOrders.h"

#include <span>

export module CSVoxelVisualizer;
using namespace Unigine;
using namespace Unigine::Math;
using namespace VoxelProject;

export namespace VoxelProjectUnigine
{
	class CSVoxelVisualizer : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSVoxelVisualizer, Unigine::ComponentBase);

		PROP_PARAM(Color, valid_voxel_color, Unigine::Math::vec4_green);
		PROP_PARAM(Color, invalid_voxel_color, Unigine::Math::vec4_black);
		PROP_PARAM(Vec3, visualizer_distance, Unigine::Math::vec3(4.0f));

		VoxelBlockBitset voxelBlock;

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			Log::message("Init KOKOKO!");
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			RenderBlock(voxelBlock, node->getWorldTransform());
		}

		uint32_t UIntGetBit(const uint32_t value, const uint32_t bitIndex)
		{
			static const uint32_t maxBitIndex = sizeof(uint32_t) * 8 - 1;
			const uint32_t shiftedValue = value >> (maxBitIndex - bitIndex);
			return shiftedValue & 1;
		}

		uint32_t BitsetGetBit(const uint32_t * const bitset, const uint32_t bitIndex)
		{
			static const uint32_t chunkSizeBits = sizeof(uint32_t) * 8;
			const uint32_t chunkIndex = bitIndex / chunkSizeBits;
			const uint32_t bitIndexInChunk = bitIndex % chunkSizeBits;
			return UIntGetBit(bitset[chunkIndex], bitIndexInChunk);
		}

		void RenderBlock(const VoxelProject::VoxelBlockBitset& voxelBlockBitset, const Unigine::Math::Mat4& blockWorldransform)
		{
			const float voxelSize_meters = 1.0f;
			const Vec3_meters blockSize_meters(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters);
			Visualizer::renderBox(vec3(blockSize_meters), blockWorldransform, Math::vec4(1.0f, 1.0f, 0.0f, 0.6f));

			size_t voxelIndex = 0;
			
		}
	};
}