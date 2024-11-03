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
			BlockTestFill(voxelBlock);
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

		void BlockTestFill(VoxelProject::VoxelBlockBitset& voxelBlockBitset)
		{
			VoxelSizeType voxelIndex = 0;
			auto forEachCallback = [&voxelIndex]() -> bool
				{
					return voxelIndex++ % 2;
				};

			voxelBlockBitset.ForEachVoxel<Utils::BitsetElementAccessMode::WRITE>(forEachCallback);
		}

		void RenderBlock(const VoxelProject::VoxelBlockBitset& voxelBlockBitset, const Unigine::Math::Mat4& blockWorldTransform)
		{
			constexpr float voxelSize_meters = 1.0f;

			const Vec3_meters blockSize_meters(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters);
			Visualizer::renderBox(vec3(blockSize_meters), blockWorldTransform, Math::vec4(1.0f, 1.0f, 0.0f, 0.6f));

			
			VoxelSizeType voxelIndex = 0;
			auto forEachCallback = [blockWorldTransform, voxelSize_meters, &voxelIndex](const bool bitValue)
				{
					auto localPos_meters = MathUtils::IndexToPos3d<Vec3_meters>(voxelIndex, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS);
					localPos_meters *= voxelSize_meters;
					
					const auto worldPos = localPos_meters * blockWorldTransform;
					Visualizer::renderPoint3D(worldPos, 0.1f, vec4_green);

					++voxelIndex;
				};
			voxelBlockBitset.ForEachVoxel(forEachCallback);
		}
	};
}