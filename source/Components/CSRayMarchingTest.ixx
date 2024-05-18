#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>
#include <UnigineRender.h>
#include "Utils/ProjectUtilsMacros.h"

export module CSRayMarchingTest;

import LogicOrders;
import CSRayMarchingTestEntity;

using namespace Unigine;

export namespace VoxelProjectUnigine
{
	class CSRayMarchingTest : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSRayMarchingTest, Unigine::ComponentBase);

		PROP_PARAM(Material, material);

		inline static CSRayMarchingTest* instance;
		bool _ = (instance = this, false);

		Vector<CSRayMarchingTestEntity*> entities;

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			Render::getEventEndPostMaterials().connect(this, &CSRayMarchingTest::RenderCallback);
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			Visualizer::setEnabled(true);
			for (const auto& e : entities)
			{
				Visualizer::renderPoint3D(e->getNode()->getWorldPosition(), 0.1, Math::vec4_red);
			}
		}

		void RenderCallback()
		{
			material->runExpression("RENDER_CALLBACK_END_POST_MATERIALS", 1, 1);
		}

	public:
		static auto GetInstance()
		{
			return instance;
		}

		void RegisterEntity(CSRayMarchingTestEntity* const entity)
		{
			entities.push_back(entity);
		}
	};
}