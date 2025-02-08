#include "CSVoxelDistanceField.h"

namespace VoxelProjectUnigine
{
	using namespace Unigine;

	void CSVoxelDistanceField::Init()
	{
		//Render::getEventEndPostMaterials().connect(this, &CSVoxelDistanceField::RenderCallback);

		distanceFieldTexture = Texture::create();
		distanceFieldTexture->create3D(VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS
			, Texture::FORMAT_RGBA8, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);
		distanceFieldTexture->setDebugName("distanceFieldTexture");

		renderTarget = RenderTarget::create();
	}

	void CSVoxelDistanceField::Update()
	{
		renderTarget->bindUnorderedAccessTexture3D(0, distanceFieldTexture);
		renderTarget->enableCompute();
		compute_material->renderCompute("block_distance_field");
		renderTarget->disable();
		renderTarget->unbindUnorderedAccessTextures();

		
	}

	void CSVoxelDistanceField::RenderCallback()
	{
	}

}
