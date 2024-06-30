#include <unordered_map>
#include <tuple>

#include "Utils/UtilsMacros.h"
#include "Utils/Utils.h"
#include "VoxelTypes.h"

export module VoxelSpace;

export namespace VoxelProject
{
	
	template<typename> 
	struct VoxelSpace {};

	template<typename ..._Types>
	struct VoxelSpace<Utils::TypesPack<_Types...>>
	{
		using Pack = Utils::TypesPack<_Types...>;
		using KeyType = uint8_t;
		
		const VoxelSizeType spaceSideSize_blocks;
		const float voxelSideSize_meters;

		Utils::TypeTable<Pack, KeyType> storages;


		VoxelSpace(const VoxelSizeType spaceSideSize_blocks_, const float voxelSideSize_meters_ = 1.0f)
			: spaceSideSize_blocks(spaceSideSize_blocks_)
			, voxelSideSize_meters(voxelSideSize_meters_)
		{

		}

		template<KeyType _key>
		auto& GetStorage()
		{
			return storages.Get<_key>();
		}

		template<KeyType _key>
		auto& GetStorage() const
		{
			return storages.Get<_key>();
		}
		
		/*
		template<KeyType _key>
		auto& AddStorage()
		{
			return storages.Emplace<_key>(spaceSideSize_blocks, voxelSideSize_meters);
		}
		*/
	};
}