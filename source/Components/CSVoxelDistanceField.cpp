#include "CSVoxelDistanceField.h"

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelDistanceField::Init()
	{
		//Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallback);

		distanceFieldTexture = Texture::create();
		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_R8, Texture::FORMAT_USAGE_UNORDERED_ACCESS);

		renderTarget = RenderTarget::create();
	}

	void CSVoxelDistanceField::Update()
	{
		renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);
		renderTarget->enableCompute();
		compute_material->renderCompute(Render::PASS_POST);
		renderTarget->disable();
		renderTarget->unbindUnorderedAccessTextures();
	}

	void CSVoxelDistanceField::RenderCallback()
	{
	}

}
