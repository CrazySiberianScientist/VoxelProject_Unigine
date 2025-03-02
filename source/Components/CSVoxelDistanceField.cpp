#include "CSVoxelDistanceField.h"

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelDistanceField::Init()
	{
		PROJECT_UTILS_COMPONENT_PROP_INIT(voxel_space);
		voxelBlock = &voxel_space->voxelBlock;

		//Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallback);

		distanceFieldTexture = Texture::create();
		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_RGBA8, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		distanceFieldTexture->setDebugName("distanceFieldTexture");

		renderTarget = RenderTarget::create();
	}

	void CSVoxelDistanceField::Update()
	{
		{
			auto& voxelBlockData = voxelBlock->data.blocks;
			voxelBlockBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, voxelBlockData.data(), sizeof(uint32_t), voxelBlockData.size());
			voxelBlockBuffer->setDebugName("voxelBlockBuffer");
		}
		
		RenderState::saveState();
		RenderState::clearStates();
		{
			RenderState::setStructuredBuffer(0, voxelBlockBuffer);

			//renderTarget->bindStructuredBuffer(0, voxelBlockBuffer);
			renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

			renderTarget->enableCompute();
			compute_material->renderCompute("block_distance_field");
			renderTarget->disable();

			//renderTarget->unbindStructuredBuffer(0);
			renderTarget->unbindUnorderedAccessTextures();
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
