#include "CSVoxelDistanceField.h"

#include <UnigineLog.h>
#include <UnigineVisualizer.h>

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelDistanceField::Init()
	{
		PROJECT_UTILS_COMPONENT_PROP_INIT(voxel_space);
		voxelBlock = &voxel_space->voxelBlock;

		//Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallback);

		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_RGBA8, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		distanceFieldTexture->setDebugName("distanceFieldTexture");

		voxelsIndices->create(StructuredBuffer::USAGE_GPU_RESOURCE, sizeof(uint32_t), VoxelBlockBitset::BLOCK_SIZE__VOXELS);
		voxelsIndicesSize->create(StructuredBuffer::USAGE_GPU_RESOURCE, sizeof(uint32_t), 1);
	}

	void CSVoxelDistanceField::Update()
	{
		{
			auto transferCallback = [this](void* data) {
				const auto v = ((uint32_t*)data)[0];
				Log::message("voxelsIndicesSize: %u\n", v);
				};
			Render::asyncTransferStructuredBuffer(MakeCallback(transferCallback), nullptr, voxelsIndicesSize);
		}

		{
			auto& voxelBlockData = voxelBlock->data.blocks;
			voxelBlockBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, voxelBlockData.data(), sizeof(uint32_t), voxelBlockData.size());
			voxelBlockBuffer->setDebugName("voxelBlockBuffer");

			static const uint32_t* const emptyBuffer = [] { 
				auto v = new uint32_t[VoxelBlockBitset::BLOCK_SIZE__VOXELS];
				memset(v, 0, sizeof(uint32_t) * VoxelBlockBitset::BLOCK_SIZE__VOXELS);
				return v; }();

			voxelsIndices->create(StructuredBuffer::USAGE_GPU_RESOURCE, emptyBuffer, sizeof(uint32_t), VoxelBlockBitset::BLOCK_SIZE__VOXELS);
			voxelsIndices->setDebugName("voxelsIndices");

			voxelsIndicesSize->create(StructuredBuffer::USAGE_GPU_RESOURCE, emptyBuffer, sizeof(uint32_t), 1);
			voxelsIndicesSize->setDebugName("voxelsIndicesSize");
		}
		
		RenderState::saveState();
		RenderState::clearStates();
		{
			RenderState::setStructuredBuffer(0, voxelBlockBuffer);

			renderTarget->bindStructuredBuffer(1, voxelsIndices);
			renderTarget->bindStructuredBuffer(2, voxelsIndicesSize);

			//renderTarget->bindStructuredBuffer(0, voxelBlockBuffer);
			renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

			renderTarget->enableCompute();
			compute_material->renderCompute("block_distance_field");
			renderTarget->disable();

			//renderTarget->unbindStructuredBuffer(0);
			renderTarget->unbindAll();
		}
		RenderState::restoreState();
	}

	void CSVoxelDistanceField::RenderCallback()
	{
		{
			auto& voxelBlockData = voxelBlock->data.blocks;
			voxelBlockBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, voxelBlockData.data(), sizeof(uint32_t), voxelBlockData.size());
		}
		
		//RenderState::saveState();
		//RenderState::clearStates();
		{
			//RenderState::setStructuredBuffer(0, voxelBlockBuffer);

			renderTarget->bindStructuredBuffer(1, voxelBlockBuffer);
			renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

			renderTarget->enableCompute();
			compute_material->renderCompute("block_distance_field");
			renderTarget->disable();

			//renderTarget->unbindStructuredBuffer(1);
			renderTarget->unbindUnorderedAccessTextures();
		}
		//RenderState::restoreState();
	}

}
