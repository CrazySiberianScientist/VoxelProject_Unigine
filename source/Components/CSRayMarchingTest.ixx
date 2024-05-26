#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>
#include <UnigineGame.h>

#include "Utils/ProjectUtilsMacros.h"

export module CSRayMarchingTest;

import ProjectUtils;
import LogicOrders;
import CSRayMarchingTestEntity;

using namespace Unigine;

/*

void EngineExpression::renderPass(const char *pass)
{
	if (material == NULL)
		return;
	if (!material->renderScreen(pass))
		Log::error("MaterialExpression::renderPass(): can't find \"%s\" pass in \"%asset\" material\n", pass, material->getPath());
}
void EngineExpression::renderPassToTexture(const char pass, Texture texture)
{
	if (!material)
		return;
	RenderTarget *rt = engine.render->getTemporaryRenderTarget();
	rt->bindColorTexture(0, texture);
	rt->enable();
	{
		renderPass(pass);
	}
	rt->disable();
	rt->unbindAll();
	engine.render->releaseTemporaryRenderTarget(rt);
}

*/

export namespace VoxelProjectUnigine
{
	class CSRayMarchingTest : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSRayMarchingTest, Unigine::ComponentBase);

		PROP_PARAM(Material, material);

		inline static CSRayMarchingTest* instance;
		bool _ = (instance = this, false);

		Vector<CSRayMarchingTestEntity*> entities;

		StructuredBufferPtr positionsBuffer = StructuredBuffer::create();


		std::vector<Math::vec4> positions;

		////////////////

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			Render::getEventEndPostMaterials().connect(this, &CSRayMarchingTest::RenderCallback);
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			/*
			Visualizer::setEnabled(true);
			for (const auto& e : entities)
			{
				Visualizer::renderPoint3D(e->getNode()->getWorldPosition(), 0.1, Math::vec4_red);
			}
			*/


			RefreshPositionsBuffer();
		}

		void RefreshPositionsBuffer()
		{
			const auto &modelviewMatrix = Game::getPlayer()->getCamera()->getModelview();
			const auto &projectionMatrix = Game::getPlayer()->getCamera()->getProjection();

			positions.clear();
			for (const auto& entity : entities)
			{
				const Math::vec3 viewPos(modelviewMatrix * entity->getNode()->getPosition());
				if (viewPos.z > 0.0)
					continue;
				//positions.emplace_back(viewPos, entity->size.get());

				//const auto projectedPos = projectionMatrix * viewPos;
				const auto screenPos = Math::vec4(ProjectUtils::GetScreenPosition(entity->getNode()->getPosition(), Game::getPlayer()->getCamera()), entity->size.get(), 0);
				positions.emplace_back(screenPos);
			}

			positionsBuffer->create(StructuredBuffer::USAGE_CPU_RESOURCE, positions.data(), sizeof(Math::vec4), positions.size());
		}

		void RenderCallback() 
		{

			RenderState::saveState();
			RenderState::clearStates();

			RenderState::setStructuredBuffer(0, positionsBuffer);
			
			{
				auto screen_texture = RenderState::getScreenColorTexture();
				auto source = Render::getTemporaryTexture(screen_texture);
				source->copy(screen_texture);
				material->setTexture("screen_texture", source);

				{
					auto rt = Render::getTemporaryRenderTarget();
					rt->bindColorTexture(0, screen_texture);
					rt->enable();

					material->renderScreen("my_pass");

					rt->disable();
					rt->unbindAll();
					Render::releaseTemporaryRenderTarget(rt);
				}

				Render::releaseTemporaryTexture(source);
				
			}

			//material->runExpression("RENDER_CALLBACK_END_POST_MATERIALS", 1, 1);
			RenderState::restoreState();
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