#include "CSVoxelDistanceField.h"

#include <UnigineLog.h>
#include <UnigineVisualizer.h>
#include <UnigineGame.h>

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelDistanceField::Init()
	{
		PROJECT_UTILS_COMPONENT_PROP_INIT(voxel_space);
		voxelBlock = &voxel_space->voxelBlock;

		Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallback);

		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_R32U, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		distanceFieldTexture->setSamplerFlags(Texture::SAMPLER_WRAP_CLAMP | Texture::SAMPLER_FILTER_POINT);
		distanceFieldTexture->setDebugName("distanceFieldTexture");

	}

	void CSVoxelDistanceField::Update()
	{
		CalcVisibleVoxels();
	}

	void CSVoxelDistanceField::RenderCallback()
	{
		//constexpr auto PASS_NAME = "testTransform";
		constexpr auto PASS_NAME = "testColor";

		const auto &iModelviewMatrix = Math::mat4(Game::getPlayer()->getCamera()->getIModelview());
		const auto &iProjectionMatrix = Math::inverse4(Game::getPlayer()->getCamera()->getProjection());

		const Math::mat4 blockIWorldTransform{ Math::inverse4(node->getWorldTransform()) };

		const auto screenSpaceToBlockLocal = blockIWorldTransform * /*iProjectionMatrix **/ iModelviewMatrix;

		RenderState::saveState();
		RenderState::clearStates();


		{
			auto currentScreenColorTexture = RenderState::getScreenColorTexture();

			auto colorTexture = Render::getTemporaryTexture(currentScreenColorTexture);
			colorTexture->copy(currentScreenColorTexture);


			{
				voxel_render_material->setTexture("color_texture", colorTexture);
				const auto shader = voxel_render_material->getShaderForce(PASS_NAME);
				shader->setParameterFloat4x4("screenSpaceToBlockLocal", screenSpaceToBlockLocal);

				auto rt = Render::getTemporaryRenderTarget();
				rt->bindColorTexture(0, currentScreenColorTexture);
				rt->bindUnorderedAccessTexture3D(1, distanceFieldTexture);
				rt->enable();

				voxel_render_material->renderScreen(PASS_NAME);

				rt->disable();
				rt->unbindAll();

				voxel_render_material->setTexture("color_texture", nullptr);

				Render::releaseTemporaryRenderTarget(rt);
			}


			Render::releaseTemporaryTexture(colorTexture);
		}

		RenderState::restoreState();
	}

	void CSVoxelDistanceField::CalcVisibleVoxels()
	{
		{
			auto& voxelBlockData = voxelBlock->data.blocks;
			voxelBlockBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, voxelBlockData.data(), sizeof(uint32_t), voxelBlockData.size());
			voxelBlockBuffer->setDebugName("voxelBlockBuffer");

			constexpr auto voxelsIndicesSize = VoxelBlockBitset::BLOCK_SIZE__VOXELS;

			voxelsPositionsBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, sizeof(uint32_t[4]), voxelsIndicesSize);
			voxelsPositionsBuffer->setDebugName("voxelsPositionsBuffer");

			static const uint32_t* const emptyBuffer = [] {
				auto v = new uint32_t[1];
				memset(v, 0, sizeof(uint32_t) * 1);
				return v; }();
			voxelsPositionsBufferSizeBuffer->create(StructuredBuffer::USAGE_GPU_RESOURCE, emptyBuffer, sizeof(uint32_t), 1);
			voxelsPositionsBufferSizeBuffer->setDebugName("voxelsPositionsBufferSizeBuffer");
		}

		RenderState::saveState();
		RenderState::clearStates();
		{
			RenderState::setStructuredBuffer(0, voxelBlockBuffer);

			renderTarget->bindStructuredBuffer(1, voxelsPositionsBuffer);
			renderTarget->bindStructuredBuffer(2, voxelsPositionsBufferSizeBuffer);

			//renderTarget->bindStructuredBuffer(0, voxelBlockBuffer);
			//renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

			renderTarget->enableCompute();
			compute_material->renderCompute("calc_voxel_indices");
			renderTarget->disable();

			//renderTarget->unbindStructuredBuffer(0);
			renderTarget->unbindAll();
		}
		RenderState::restoreState();

		Render::asyncTransferStructuredBuffer(MakeCallback(this, &CSVoxelDistanceField::CalcDistanceField), nullptr, voxelsPositionsBufferSizeBuffer);
	}

	void CSVoxelDistanceField::CalcDistanceField(void* const data)
	{
		constexpr auto PASS_NAME = "calc_distance_field";

		const auto voxelsIndicesBufferSize = ((uint32_t*)data)[0];
		//Log::message("voxelsIndicesBufferSize: %u\n", voxelsIndicesBufferSize);

		distanceFieldTexture->clearBuffer(Math::vec4(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS / 2));

		renderTarget->bindStructuredBuffer(0, voxelsPositionsBuffer);
		renderTarget->bindUnorderedAccessTexture3D(1, distanceFieldTexture);

		renderTarget->enableCompute();
		compute_material->renderCompute("calc_distance_field", voxelsIndicesBufferSize);
		renderTarget->disable();

		renderTarget->unbindAll();

	}

}
