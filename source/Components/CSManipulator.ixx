#include <UnigineComponentSystem.h>
#include <UnigineWidgets.h>
#include <UnigineGame.h>
#include "Utils/ProjectUtilsMacros.h"

export module CSManipulator;

using namespace Unigine;

export namespace VoxelProjectUnigine
{
	class CSManipulator : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSManipulator, Unigine::ComponentBase);

	public:
		enum
		{
			TRANSLATE
			, ROTATE
			, SCALE
		};

	private:
		PROP_PARAM(Switch, type, TRANSLATE, "TRANSLATE,ROTATE,SCALE");

		Unigine::WidgetManipulatorPtr widgetManipulator;
		int currentType = 0;

	public:
		void SwitchType()
		{
			switch (currentType)
			{
			case TRANSLATE: currentType = ROTATE; break;
			case ROTATE: currentType = TRANSLATE; break;
			default: break;
			}

			Shutdown();
			InitWidget();
		}

	private:
		COMPONENT_INIT(Init);
		void Init()
		{
			currentType = type;

			InitWidget();
		}

		COMPONENT_UPDATE(Update);
		void Update()
		{
			if (Input::isKeyDown(Input::KEY_BACKSPACE))
				SwitchType();

			auto player = Game::getPlayer();
			widgetManipulator->setProjection(player->getProjection());
			widgetManipulator->setModelview(player->getIWorldTransform());

			if (auto body = node->getObjectBody())
				body->setVelocityTransform(widgetManipulator->getTransform());
			else
				node->setWorldTransform(widgetManipulator->getTransform());
		}

		COMPONENT_SHUTDOWN(Shutdown);
		void Shutdown()
		{
			if (widgetManipulator)
			{
				auto gui = Gui::getCurrent();
				gui->removeChild(widgetManipulator);
			}
		}

		void InitWidget()
		{

			switch (currentType)
			{
			case TRANSLATE: widgetManipulator = WidgetManipulatorTranslator::create(Gui::getCurrent()); break;
			case ROTATE: widgetManipulator = WidgetManipulatorRotator::create(Gui::getCurrent()); break;
			case SCALE: widgetManipulator = WidgetManipulatorScaler::create(Gui::getCurrent()); break;
			}

			Gui::getCurrent()->addChild(widgetManipulator, Gui::ALIGN_OVERLAP);
			widgetManipulator->setTransform(node->getWorldTransform());
			widgetManipulator->setBasis(node->getWorldTransform());
		}
	};
}