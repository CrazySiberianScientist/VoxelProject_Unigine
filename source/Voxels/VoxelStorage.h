#pragma once

#include <vector>
#include <array>
#include <variant>
#include <stdint.h>
#include <type_traits>
#include <bitset>
#include <memory>

#include "VoxelTypes.h"
#include "Utils/MathUtils.h"

namespace VoxelProject
{
	// Размер кеш-линии обычного процессора в 64 байта
	//constexpr VoxelSizeType VOXEL_BLOCK_OPTIMAL_SIZE__BYTES = 64;

	// Примерный размер кеша L1 в байтах
	constexpr VoxelSizeType VOXEL_BLOCK_OPTIMAL_SIZE__BYTES = 32 * 1024;

	template<typename _VoxelBlock>
	struct VoxelMonilith
	{
		static bool IsMonolith(const _VoxelBlock* const voxelBlock)
		{
			return false;
		}
	};

	template<typename _VoxelBlock>
	concept VoxelBlock = requires (_VoxelBlock voxel_block)
	{
		typename _VoxelBlock::DataType;
		_VoxelBlock::BLOCK_SIDE_SIZE__VOXELS;
		requires(MathUtils::CalcCubicRootRemain(_VoxelBlock::BLOCK_SIZE__VOXELS) == 0);
	};

	struct VoxelBlockBitset
	{
		using DataType = bool;

		static constexpr VoxelSizeType VOXEL_SIZE__BITS = 1;
		static constexpr VoxelSizeType BLOCK_SIZE__BYTES = VOXEL_BLOCK_OPTIMAL_SIZE__BYTES;
		static constexpr VoxelSizeType BLOCK_SIZE__BITS = BLOCK_SIZE__BYTES * 8;
		static constexpr VoxelSizeType BLOCK_SIZE__VOXELS = BLOCK_SIZE__BITS / VOXEL_SIZE__BITS;
		static constexpr VoxelSizeType BLOCK_SIDE_SIZE__VOXELS = MathUtils::CalcCubicRoot(BLOCK_SIZE__VOXELS);
		
		VoxelBlockBitset(const DataType v = {})
		{
			if (v)
			{
				data.set();
			}
		}

		VoxelBlockBitset(const VoxelBlockBitset& other)
		{
			memcpy(this, &other, sizeof(VoxelBlockBitset));
		}

		void SetVoxel(const Vec3_voxels& localPos_voxels, const DataType& voxelValue)
		{
			const auto index = MathUtils::Pos3dToIndex(localPos_voxels, BLOCK_SIZE__VOXELS, BLOCK_SIZE__VOXELS);
			data[index] = voxelValue;
		}

		DataType GetVoxel(const Vec3_voxels& localPos_voxels) const
		{
			const auto index = MathUtils::Pos3dToIndex(localPos_voxels, BLOCK_SIZE__VOXELS, BLOCK_SIZE__VOXELS);
			return data[index];
		}

	public:
		std::bitset<BLOCK_SIZE__BITS> data;
	};

	template<>
	struct VoxelMonilith<VoxelBlockBitset>
	{
		inline static const VoxelBlockBitset monolithBlocks[2]{false, true};

		static const VoxelBlockBitset* GetMonolithForValue(const VoxelBlockBitset::DataType v)
		{
			return &monolithBlocks[(size_t)v];
		}

		static bool IsMonolith(const VoxelBlockBitset* const voxelBlock)
		{
			return voxelBlock >= monolithBlocks && voxelBlock < (monolithBlocks + std::size(monolithBlocks));
		}
	};


	template<VoxelBlock _VoxelBlock>
	struct VoxelStorage
	{
		std::vector<_VoxelBlock*> voxelBlocks;
		std::vector<_VoxelBlock*> uniqueVoxelBlocks;

		const VoxelSizeType spaceSideSize_blocks;
		const float voxelSideSize_meters;
		const float blockSideSize_meters;
		const float spaceSideSize_meters;


		VoxelStorage(const VoxelSizeType spaceSideSize_blocks_, const float voxelSideSize_meters_ = 1.0f)
			: spaceSideSize_blocks(spaceSideSize_blocks_)
			, voxelSideSize_meters(voxelSideSize_meters_)
			, blockSideSize_meters(CalcBlockSideSize_meters(voxelSideSize_meters_))
			, spaceSideSize_meters(spaceSideSize_blocks * voxelSideSize_meters_)
		{
			voxelBlocks.resize(MathUtils::Cubic(spaceSideSize_blocks), const_cast<_VoxelBlock*>(VoxelMonilith<_VoxelBlock>::GetMonolithForValue({})));
		}

		VoxelStorage(const VoxelStorage& other)
			: voxelBlocks(other.voxelBlocks)
			, uniqueVoxelBlocks(other.uniqueVoxelBlocks)
			, spaceSideSize_blocks(other.spaceSideSize_blocks)
			, voxelSideSize_meters(other.voxelSideSize_meters)
			, blockSideSize_meters(other.blockSideSize_meters)
			, spaceSideSize_meters(other.spaceSideSize_meters)
		{
		}

		VoxelStorage(VoxelStorage&& other)
			: voxelBlocks(std::move(other.voxelBlocks))
			, uniqueVoxelBlocks(std::move(other.uniqueVoxelBlocks))
			, spaceSideSize_blocks(other.spaceSideSize_blocks)
			, voxelSideSize_meters(other.voxelSideSize_meters)
			, blockSideSize_meters(other.blockSideSize_meters)
			, spaceSideSize_meters(other.spaceSideSize_meters)
		{
		}

		~VoxelStorage()
		{
			for (const auto vb : uniqueVoxelBlocks)
			{
				delete vb;
			}
		}

		template<typename ..._Args>
		_VoxelBlock* CreateBlock(_Args&& ...args)
		{
			const auto block = new _VoxelBlock(std::forward<_Args>(args)...);
			uniqueVoxelBlocks.push_back(block);
			return block;
		}

		static constexpr float CalcBlockSideSize_meters(const float voxelSideSize_meters)
		{
			return voxelSideSize_meters * _VoxelBlock::BLOCK_SIDE_SIZE__VOXELS;
		}

		static constexpr Vec3_voxels VoxelsToBlocks_blocks(const Vec3_voxels& posLocal_voxels)
		{
			return posLocal_voxels / _VoxelBlock::BLOCK_SIDE_SIZE__VOXELS;
		}

		static constexpr Vec3_voxels CalcPosInBlock_voxels(const Vec3_voxels& pos_voxels, const Vec3_voxels& voxelBlockPos_blocks)
		{
			const auto voxelBlockOrigin_voxels = voxelBlockPos_blocks * _VoxelBlock::BLOCK_SIDE_SIZE__VOXELS;
			return pos_voxels - voxelBlockOrigin_voxels;
		}
		
		void SetVoxel(const Vec3_voxels &pos_voxels, const typename _VoxelBlock::DataType &voxel_value)
		{
			const auto pos_blocks = VoxelsToBlocks_blocks(pos_voxels);
			const auto posInBlock_voxels = CalcPosInBlock_voxels(pos_blocks, pos_blocks);
			const auto voxelBlockIndex = MathUtils::Pos3dToIndex(pos_blocks, spaceSideSize_blocks, spaceSideSize_blocks);

			auto &block = voxelBlocks[voxelBlockIndex];
			if (VoxelMonilith<_VoxelBlock>::IsMonolith(block))
			{
				block = CreateBlock(*block);
			}
			
			return block->SetVoxel(posInBlock_voxels, voxel_value);
		}

		typename _VoxelBlock::DataType GetVoxel(const Vec3_voxels& pos_voxels) const
		{
			const auto pos_blocks = VoxelsToBlocks_blocks(pos_voxels);
			const auto posInBlock_voxels = CalcPosInBlock_voxels(pos_blocks, pos_blocks);
			const auto voxelBlockIndex = MathUtils::Pos3dToIndex(pos_blocks, spaceSideSize_blocks, spaceSideSize_blocks);
			
			return voxelBlocks[voxelBlockIndex]->GetVoxel(posInBlock_voxels);
		}

		float GetVoxelSize_meters() const
		{
			return voxelSideSize_meters;
		}
	};

	
	template<VoxelBlock _VoxelBlock>
	struct VoxelTree
	{
		struct Node
		{
			static constexpr VoxelSizeType BRANCH_SPLIT_VALUE = 2;
			static constexpr VoxelSizeType BRANCH_CHILDREN_NUMBER = BRANCH_SPLIT_VALUE * BRANCH_SPLIT_VALUE * BRANCH_SPLIT_VALUE;

			using Branch = std::array<Node, BRANCH_CHILDREN_NUMBER>;
			using BranchNode = std::unique_ptr<Branch>;
			using Monolith = _VoxelBlock::DataType;
			using Voxels = std::unique_ptr<_VoxelBlock>;

			std::variant<BranchNode, Monolith, Voxels> data;

			template<typename _T> Node(_T&& v = _VoxelBlock::DataType())
				: data(std::move(v))
			{}

			//Node() : data(_VoxelBlock::DataType()) {}

			~Node()
			{
				// TODO
				//data.
			}
		};


		Node root{ typename Node::Monolith{} };
		_VoxelBlock voxel_block;

		const VoxelSizeType treeMaxLevel;
		const VoxelSizeType treeSideSize_voxelBlocks;
		const float voxelSideSize_meters;
		const float blockSideSize_meters;
		const float treeSideSize_meters;


	public:

		VoxelTree(const VoxelSizeType treeMaxLevel_, const float voxelSideSize_meters_ = 1.0f)
			: treeMaxLevel(treeMaxLevel_)
			, treeSideSize_voxelBlocks(CalcTreeSideSize_voxelBlocks(treeMaxLevel_))
			, voxelSideSize_meters(voxelSideSize_meters_)
			, blockSideSize_meters(CalcBlockSideSize_meters(voxelSideSize_meters_))
			, treeSideSize_meters(treeSideSize_voxelBlocks * voxelSideSize_meters_)
		{}

		void AddNode(float root_size) 
		{
			//const auto child_size = root_size / LEAF_SPLIT_VALUE;
			
		}

		static constexpr VoxelSizeType CalcTreeSideSize_voxelBlocks(const VoxelSizeType treeLevel)
		{
			static_assert(Node::BRANCH_SPLIT_VALUE == 2);
			return 1 << treeLevel;
		}

		constexpr VoxelSizeType CalcBranchSideSize_voxels(const VoxelSizeType treeLevel) const
		{
			return treeSideSize_meters / treeLevel;
		}

		static constexpr float CalcBlockSideSize_meters(const float voxelSideSize_meters)
		{
			return voxelSideSize_meters * _VoxelBlock::BLOCK_SIDE_SIZE_VOXELS;
		}
		
		VoxelSizeType CalcBranchChildIndex(const Vec3_voxels& pos_voxels, const VoxelSizeType currentBranchSize_voxels) const
		{
			const auto localPosInCurrentBranch_voxels = CalcBranchLocalPos_Voxels(pos_voxels, currentBranchSize_voxels);

			const VoxelSizeType childBranchSize_voxels = currentBranchSize_voxels / Node::BRANCH_SPLIT_VALUE;
			const auto localPos_childBranches = localPosInCurrentBranch_voxels / childBranchSize_voxels;

			const VoxelSizeType childIndex = MathUtils::Pos3dToIndex(localPos_childBranches, Node::BRANCH_SPLIT_VALUE, Node::BRANCH_SPLIT_VALUE);

			return childIndex;
		}

		constexpr decltype(auto) CalcBranchLocalPos_Voxels(const Vec3_voxels& pos_voxels, const VoxelSizeType currentBranchSize_voxels) const
		{
			const auto currentBranchOrigin_voxels = (pos_voxels / currentBranchSize_voxels) * currentBranchSize_voxels ;
			const auto localPosInCurrentBranch_voxels = pos_voxels - currentBranchOrigin_voxels;

			return localPosInCurrentBranch_voxels;
		}
		
		// TODO: Доделать это, добавить проверку размера текущего блока меньше-больше BLOCK_SIZE__METERS
		void SetVoxel(const typename _VoxelBlock::DataType &voxelValue, const Vec3_voxels &pos_voxels, Node &node, const int32_t treeLevel)
		{
			if (auto* const v = std::get_if<Node::BranchNode>(node.data)) 
			{
				const auto next_tree_level = treeLevel + 1;
				const auto branch_child_index = CalcBranchChildIndex(pos_voxels, CalcBranchSideSize_voxels(next_tree_level));

				auto &branch = *v;
				auto &child_node = branch[branch_child_index];
				
				SetVoxel(voxelValue, pos_voxels, child_node, next_tree_level);
				
				return;
			}

			if (auto* const v = std::get_if<Node::Monolith>(node.data)) 
			{
				node.data = typename Node::BranchNode(new typename Node::Branch);
				
				SetVoxel(voxelValue, pos_voxels, node, treeLevel);
				
				return;
			}

			if (auto* const v = std::get_if<Node::Voxels>(node.data)) 
			{
				const auto local_pos__voxels = CalcBranchLocalPos_Voxels(pos_voxels, CalcBranchSideSize_voxels(treeLevel));
				v->SetVoxel(voxelValue, local_pos__voxels);
				return;
			}
		}

		typename _VoxelBlock::DataType GetVoxel(const Vec3_voxels &pos_voxels, const Node &node, const int32_t tree_level)
		{
			if (auto* const v = std::get_if<Node::BranchNode>(node.data)) 
			{
				const auto next_tree_level = tree_level + 1;
				const auto branch_child_index = CalcBranchChildIndex(pos_voxels, CalcBranchSideSize_voxels(next_tree_level));

				auto &branch = *v;
				auto &child_node = branch[branch_child_index];
				
				return GetVoxel(pos_voxels, child_node, next_tree_level);
			}

			if (auto* const v = std::get_if<Node::Monolith>(node.data)) 
			{
				return *v;
			}

			if (auto* const v = std::get_if<Node::Voxels>(node.data)) 
			{
				const auto local_pos__voxels = CalcBranchLocalPos_Voxels(pos_voxels, tree_level);
				return v->GetVoxel(local_pos__voxels);
			}
		}

		typename _VoxelBlock::DataType GetVoxel(const Vec3_voxels& posLocal_voxels)
		{

		}

		float GetVoxelSize_meters() const
		{
			return voxelSideSize_meters;
		}
	};
}