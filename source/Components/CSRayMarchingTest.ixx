#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>
#include <UnigineRender.h>
#include <UnigineTextures.h>
#include <UnigineGame.h>
#include <UnigineMathLib.h>

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

			//Game::getPlayer()->getCamera()->get

			positions.clear();
			for (const auto& entity : entities)
			{
				const Math::vec3 viewPos(modelviewMatrix * entity->getNode()->getPosition());

				/*
				if (viewPos.z > 0.0)
					continue;
				*/

				positions.emplace_back(viewPos, entity->size.get());

				//const auto projectedPos = projectionMatrix * viewPos;
				//const auto screenPos = Math::vec4(ProjectUtils::GetScreenPosition(entity->getNode()->getPosition(), Game::getPlayer()->getCamera()), entity->size.get(), 0);
				//positions.emplace_back(screenPos);
			}

			positionsBuffer->create(StructuredBuffer::USAGE_CPU_RESOURCE, positions.data(), sizeof(Math::vec4), positions.size());
		}

		void RenderCallback() 
		{
			{
				const auto camera = Game::getPlayer()->getCamera();
				const auto fovV = camera->getFov();

				// FOV_h = 2 × atan ( (width / height) × tan(FOV_v / 2))
				const auto fovH = Math::Consts::RAD2DEG * 2 * Math::atan((float)Renderer::getWidth() / Renderer::getHeight() * Math::tan(Math::Consts::DEG2RAD * fovV / 2));

				material->setParameterFloat("fov_h", fovH);
			}


			RenderState::saveState();
			RenderState::clearStates();

			
			{
				auto currentScreenColorTexture = RenderState::getScreenColorTexture();
				auto currentScreenDepthTexture = RenderState::getScreenDepthTexture();

				const auto format = currentScreenDepthTexture->getFormat();

				auto colorTexture = Render::getTemporaryTexture(currentScreenColorTexture);

				//auto depthTexture = Render::getTemporaryTexture(currentScreenDepthTexture);
				auto depthTexture = Texture::create();
				depthTexture->create2D(currentScreenDepthTexture->getWidth(), currentScreenDepthTexture->getHeight(), Texture::FORMAT_R32F, Texture::FORMAT_USAGE_UNORDERED_ACCESS | Texture::FORMAT_USAGE_RENDER);

				auto screenDepthTexture = Render::getTemporaryTexture(currentScreenDepthTexture);

				auto tmpTexture = Render::getTemporaryTexture(currentScreenColorTexture);
				//tmpTexture->copy(currentScreenColorTexture);

				colorTexture->copy(currentScreenColorTexture);
				screenDepthTexture->copy(currentScreenDepthTexture);

				{
					RenderState::setStructuredBuffer(0, positionsBuffer);

					auto rt = Render::getTemporaryRenderTarget();
					//rt->bindColorTexture(0, tmpTexture);
					//rt->bindDepthTexture(depthTexture);
					rt->bindColorTexture(1, depthTexture);
					rt->enable();

					material->renderScreen("depth");

					rt->disable();
					rt->unbindAll();


					Render::releaseTemporaryRenderTarget(rt);
				}

				{
					material->setTexture("color_texture", colorTexture);
					material->setTexture("depth_texture", depthTexture);
					material->setTexture("screen_depth_texture", screenDepthTexture);

					auto rt = Render::getTemporaryRenderTarget();
					rt->bindColorTexture(0, currentScreenColorTexture);
					rt->enable();

					material->renderScreen("color");

					rt->disable();
					rt->unbindAll();

					material->setTexture("color_texture", nullptr);
					material->setTexture("depth_texture", nullptr);
					material->setTexture("screen_depth_texture", nullptr);

					Render::releaseTemporaryRenderTarget(rt);
				}
				

				Render::releaseTemporaryTexture(colorTexture);
				Render::releaseTemporaryTexture(screenDepthTexture);

				depthTexture->destroy();
				depthTexture.clear();
				
			}
			
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