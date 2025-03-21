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

		Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallbackTest0);

		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_R8, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		distanceFieldTexture->setDebugName("distanceFieldTexture");

		testTexture->create2D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_R8, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		testTexture->setDebugName("testTexture");


		{
			static const MeshDynamic::Attribute attributes[] = {
				{0, MeshDynamic::TYPE_FLOAT, 4},
			};

			//voxelBorderMesh->bind();

			voxelBorderMesh->setVertexFormat(attributes, 1);
			/*
			//voxelBorderMesh->setVertexFormat(nullptr, 0);

			voxelBorderMesh->addIndices(0, 1, 2);
			voxelBorderMesh->addVertexFloat4(0, 0, 0, 0, 1);
			voxelBorderMesh->addVertexFloat4(0, 0, 1, 0, 1);
			voxelBorderMesh->addVertexFloat4(0, 1, 1, 0, 1);

			voxelBorderMesh->flushIndices();
			voxelBorderMesh->flushVertex();
			
			voxelBorderMesh->unbind();
			*/
		}
		

	}

	void CSVoxelDistanceField::Update()
	{
		return;
		CalcVisibleVoxels();
	}

	void CSVoxelDistanceField::RenderCallback()
	{
		constexpr auto PASS_NAME = "block_distance_field_test";

		RenderState::saveState();
		RenderState::clearStates();

		auto renderTarget = Render::getTemporaryRenderTarget();


		renderTarget->bindColorTexture3D(0, distanceFieldTexture);

		renderTarget->enable();

		compute_material->renderScreen(PASS_NAME);

		renderTarget->disable();
		renderTarget->unbindAll();


		Render::releaseTemporaryRenderTarget(renderTarget);

		RenderState::restoreState();
	}

	void CSVoxelDistanceField::RenderCallbackTest0()
	{
		//constexpr auto PASS_NAME = "calc_distance_field";
		constexpr auto PASS_NAME = "block_distance_field";

		RenderState::saveState();
		RenderState::clearStates();
		RenderState::setBufferMask(0, RenderState::BUFFER_COLOR);
		RenderState::setPolygonCull(RenderState::CULL_NONE);
		RenderState::setDepthFunc(RenderState::DEPTH_NONE);
		RenderState::flushStates();

		auto renderTarget = Render::getTemporaryRenderTarget();

		//renderTarget->bindStructuredBuffer(0, voxelsPositionsBuffer);
		//renderTarget->bindColorTexture3D(1, distanceFieldTexture);
		renderTarget->bindColorTexture(1, distanceFieldTexture);
		//renderTarget->bindColorTexture(1, testTexture);

		
		const auto pass = compute_material->getRenderPass(PASS_NAME);
		const auto shader = compute_material->getShaderForce(pass);
		if (shader == nullptr)
			return;


		Renderer::setMaterial(pass, compute_material);
		Renderer::setShaderParameters(pass, shader, compute_material, true);
		
		voxelBorderMesh->bind();


		//voxelBorderMesh->clearVertex();
		voxelBorderMesh->clearIndices();

		voxelBorderMesh->addIndices(0, 1, 2);
		voxelBorderMesh->flushIndices();
		//voxelBorderMesh->flushVertex();

		//const int v = voxelBorderMesh->getVideoMemoryUsage();
		//Log::message("getVideoMemoryUsage: %d\n", v);

		renderTarget->enable();
		//voxelBorderMesh->render(MeshDynamic::MODE_TRIANGLES, MeshDynamic::USAGE_FLUSH_INDICES);
		voxelBorderMesh->renderInstancedSurface(MeshDynamic::MODE_TRIANGLES, 1);
		//voxelBorderMesh->renderInstancedSurface(MeshDynamic::MODE_TRIANGLES, 0, 0, 3, 2);
		//compute_material->renderScreen(PASS_NAME);
		renderTarget->disable();
		renderTarget->unbindAll();

		voxelBorderMesh->unbind();

		RenderState::restoreState();

		Render::releaseTemporaryRenderTarget(renderTarget);
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
		//constexpr auto PASS_NAME = "calc_distance_field";
		constexpr auto PASS_NAME = "block_distance_field";

		const auto voxelsIndicesBufferSize = ((uint32_t*)data)[0];
		//Log::message("voxelsIndicesBufferSize: %u\n", voxelsIndicesBufferSize);

		//renderTarget->bindStructuredBuffer(0, voxelsPositionsBuffer);
		//renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);

		/*
		renderTarget->enableCompute();
		compute_material->renderCompute("calc_distance_field", voxelsIndicesBufferSize);
		renderTarget->disable();

		renderTarget->enable();
		//voxelBorderMeshRender->renderInstancedSurface(MeshRender::MODE_TRIANGLES, 1)
		renderTarget->disable();
		renderTarget->unbindAll();
		*/

		RenderState::saveState();
		RenderState::clearStates();
		RenderState::setBufferMask(0, RenderState::BUFFER_COLOR);
		RenderState::setPolygonCull(RenderState::CULL_NONE);
		RenderState::setDepthFunc(RenderState::DEPTH_NONE);
		RenderState::flushStates();

		auto renderTarget = Render::getTemporaryRenderTarget();

		renderTarget->bindStructuredBuffer(0, voxelsPositionsBuffer);
		//renderTarget->bindColorTexture3D(1, distanceFieldTexture);
		renderTarget->bindColorTexture(1, testTexture);

		
		const auto pass = compute_material->getRenderPass(PASS_NAME);
		const auto shader = compute_material->getShaderForce(pass);
		if (shader == nullptr)
			return;


		Renderer::setMaterial(pass, compute_material);
		Renderer::setShaderParameters(pass, shader, compute_material, true);
		
		voxelBorderMesh->bind();

		voxelBorderMesh->addIndices(0, 1, 2);
		/*
		voxelBorderMesh->addVertexFloat4(0.5, 0, 0, 0, 0);
		voxelBorderMesh->addVertexFloat4(0.5, 1, 0, 0, 0);
		voxelBorderMesh->addVertexFloat4(0.5, 1, 1, 0, 0);
		*/

		//voxelBorderMesh->clearVertex();
		voxelBorderMesh->clearIndices();

		voxelBorderMesh->flushIndices();
		//voxelBorderMesh->flushVertex();

		renderTarget->enable();
		//voxelBorderMesh->render(MeshDynamic::MODE_TRIANGLES, MeshDynamic::USAGE_FLUSH_INDICES);
		//voxelBorderMesh->renderInstancedSurface(MeshDynamic::MODE_LINES, 2);
		voxelBorderMesh->renderInstancedSurface(MeshDynamic::MODE_TRIANGLES, 0, 0, 3, 1);
		//compute_material->renderScreen(PASS_NAME);
		renderTarget->disable();
		renderTarget->unbindAll();

		voxelBorderMesh->unbind();

		RenderState::restoreState();

		Render::releaseTemporaryRenderTarget(renderTarget);
	}

}
