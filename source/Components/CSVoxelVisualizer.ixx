#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>

#include <Voxels/VoxelStorage.h>
#include "Voxels/VoxelTypes.h"
#include "Voxels/VoxelUtils.h"
#include "Utils/ProjectUtilsMacros.h"
#include "Utils/GeomUtils.h"
#include "LogicOrders.h"

#include "CSLineManipulator.h"
#include "CSVoxelSpace.h"

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

	public:
		PROJECT_UTILS_COMPONENT_PROP(CSVoxelSpace, voxel_space);

		PROP_PARAM(Color, valid_voxel_color, Unigine::Math::vec4(0.0f, 1.0f, 0.0f, 0.2f));
		PROP_PARAM(Color, invalid_voxel_color, Unigine::Math::vec4(0.0f, 0.0f, 0.0f, 0.2f));
		PROP_PARAM(Vec3, visualizer_distance, Unigine::Math::vec3(4.0f));
		PROJECT_UTILS_COMPONENT_PROP(CSLineManipulator, line_manipulator);


		static constexpr float voxelSize_meters = 1.0f;
		const Vec3_meters blockSize_meters { VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS * voxelSize_meters };

		COMPONENT_INIT(InitPropParams, GlobalInitOrder::COMPONENT_FIELDS);
		void InitPropParams()
		{
			PROJECT_UTILS_COMPONENT_PROP_INIT(voxel_space);
			PROJECT_UTILS_COMPONENT_PROP_INIT(line_manipulator);
		}

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			//BlockTestFill(voxelBlock);
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			//RenderBlock(voxelBlock, node->getWorldTransform());

			{
				const auto testLineWP = line_manipulator->GetWorldPoints();
				const std::array testLineLP = { node->toLocal(testLineWP[0]), node->toLocal(testLineWP[1]) };

				const auto lineDir = testLineLP[1] - testLineLP[0];
				const auto lineLength = lineDir.lengthFast();
				const auto lineNorm = lineDir / lineLength;
				
				constexpr auto correctionValue = FLT_EPSILON * 1000;
				const Vec3_meters correctionBorder(correctionValue);
				const auto intersectResult = GeomUtils::IntersectSegmentAABB(testLineLP[0], lineNorm, correctionBorder, blockSize_meters - correctionBorder, lineLength);
				if (intersectResult.isValid)
				{
					for (const auto& p : intersectResult.points)
					{
						const auto wP = node->toWorld(p);
						Visualizer::renderPoint3D(wP, 0.02, Math::vec4(1, 0, 1, 1));
					}



					std::vector<Vec3_meters> points;
					std::vector<Vec3_voxels> voxelsPos;
					//constexpr auto correctionValue = FLT_EPSILON * 1000;
					constexpr auto correctionValue = 0.0f;
					Vec3_meters intersectShrinkedP0 = intersectResult.points[0] + lineNorm * correctionValue;
					Vec3_meters intersectShrinkedP1 = intersectResult.points[1] - lineNorm * correctionValue;

					
					RayTrace(intersectShrinkedP0, intersectShrinkedP1, 1, points, voxelsPos);
					for (auto& p : points)
					{
						const auto wP = node->toWorld(p);
						Visualizer::renderPoint3D(wP, 0.01, Math::vec4(1, 1, 0, 1));
					}
					
					
					/*
					{
						const auto startPos = intersectShrinkedP0;
						auto rayDir = intersectShrinkedP1 - intersectShrinkedP0;
						const auto maxDist = rayDir.length();
						rayDir /= maxDist;


						float currentDist = 0.0f;
						while (currentDist < maxDist)
						{
							const auto currentPos = startPos + rayDir * currentDist;
							{
								const auto wP = node->toWorld(currentPos);
								Visualizer::renderPoint3D(wP, 0.01, Math::vec4(1, 1, 0, 1));

								voxelsPos.push_back(MetersToVoxels(currentPos));
							}
							

							//const auto deltaDist = RayMarchStep(currentPos, rayDir, 1);
							const auto deltaDist = RayMarchStep(currentPos, rayDir, 2) + FLT_EPSILON * 10;

							currentDist += deltaDist;
						}
					}
					*/

					{
						voxel_space->voxelBlock.data.Fill(false);
						for (const auto& voxelPos : voxelsPos)
						{
							voxel_space->voxelBlock.SetVoxel(voxelPos, true);
						}
					}

				}
			}
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
			{
				auto localTransform = Mat4_identity;
				localTransform.setTranslate(dvec3(blockSize_meters) / 2);
				Visualizer::renderBox(blockSize_meters, blockWorldTransform * localTransform, Math::vec4(1.0f, 1.0f, 0.0f, 0.6f));
			}

			
			VoxelSizeType voxelIndex = 0;
			auto forEachCallback = [this, blockWorldTransform, &voxelIndex](const bool bitValue)
				{
					auto localPos_meters = MathUtils::IndexToPos3d<Vec3_metersWorld>(voxelIndex, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS, VoxelBlockBitset::BLOCK_SIDE_SIZE__VOXELS);
					//localPos_meters *= voxelSize_meters;

					auto localTransform = Mat4_identity;
					localTransform.setTranslate(localPos_meters + dvec3_one / 2);
					
					//const auto worldPos = localPos_meters * blockWorldTransform;
					//Visualizer::renderPoint3D(worldPos, 0.1f, vec4_green);
					const auto worldTransform = blockWorldTransform * localTransform;
					
					if (bitValue)
						Visualizer::renderSolidBox(vec3_one, worldTransform, valid_voxel_color);
					else
						Visualizer::renderBox(vec3_one, worldTransform, invalid_voxel_color);

					++voxelIndex;
				};
			voxelBlockBitset.ForEachVoxel(forEachCallback);
		}
	};
}