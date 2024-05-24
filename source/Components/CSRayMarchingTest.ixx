#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>

#include "Utils/ProjectUtilsMacros.h"

export module CSRayMarchingTest;

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
		TexturePtr renderTexture = Texture::create();


		Vector<Math::vec4> positions;

		////////////////

		COMPONENT_INIT(Init, GlobalInitOrder::COMMON_LOGIC);
		void Init()
		{
			renderTexture->create2D(600, 600, Texture::FORMAT_RGB8);

			Render::getEventEndPostMaterials().connect(this, &CSRayMarchingTest::RenderCallback);

			{
				positions = { Math::vec4_red, Math::vec4_green, Math::vec4_blue, Math::vec4_white };
				//positions.push_back(Math::vec4_white);
				positionsBuffer->create(StructuredBuffer::USAGE_CPU_RESOURCE, positions.get(), sizeof(Math::vec4), positions.size());
			}
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

			RenderState::saveState();
			RenderState::clearStates();

			RenderState::setStructuredBuffer(0, positionsBuffer);
			
			{
				auto screen_texture = RenderState::getScreenColorTexture();
				auto source = Render::getTemporaryTexture(screen_texture);
				source->copy(screen_texture);

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