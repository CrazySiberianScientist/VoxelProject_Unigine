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
	}

	void CSVoxelDistanceField::Update()
	{
		CalcVisibleVoxels();
	}

	void CSVoxelDistanceField::RenderCallback()
	{

	}

	void CSVoxelDistanceField::CalcVisibleVoxels()
	{
		{
			auto& voxelBlockData = voxelBlock->data.blocks;
			voxelBlockBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, voxelBlockData.data(), sizeof(uint32_t), voxelBlockData.size());
			voxelBlockBuffer->setDebugName("voxelBlockBuffer");

			// +1 элемент для хранения размера, voxelsIndicesBuffer[0] будет хранить размер буффера
			constexpr auto voxelsIndicesSize = VoxelBlockBitset::BLOCK_SIZE__VOXELS + 1;
			static const uint32_t* const emptyBuffer = [] {
				auto v = new uint32_t[voxelsIndicesSize];
				memset(v, 0, sizeof(uint32_t) * voxelsIndicesSize);
				return v; }();

				voxelsIndicesBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, emptyBuffer, sizeof(uint32_t), VoxelBlockBitset::BLOCK_SIZE__VOXELS);
				voxelsIndicesBuffer->setDebugName("voxelsIndicesBuffer");
		}

		RenderState::saveState();
		RenderState::clearStates();
		{
			RenderState::setStructuredBuffer(0, voxelBlockBuffer);

			renderTarget->bindStructuredBuffer(1, voxelsIndicesBuffer);

			//renderTarget->bindStructuredBuffer(0, voxelBlockBuffer);
			renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

			renderTarget->enableCompute();
			compute_material->renderCompute("calc_voxel_indices");
			renderTarget->disable();

			//renderTarget->unbindStructuredBuffer(0);
			renderTarget->unbindAll();
		}
		RenderState::restoreState();

		{
			auto transferCallback = [this](void* data) {
				const auto v = ((uint32_t*)data)[0];
				Log::message("voxelsIndicesSize: %u\n", v);
				};
			Render::asyncTransferStructuredBuffer(MakeCallback(transferCallback), nullptr, voxelsIndicesBuffer);
		}
	}

	void CSVoxelDistanceField::CalcDistanceField(void* const data)
	{
	}

}
