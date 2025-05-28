#pragma once

#define PROJECT_UTILS_REGISTER_COMPONENT(CLASS_NAME)																											\
class ComponentRegistrator_##CLASS_NAME																											\
{																																				\
public:																																			\
	ComponentRegistrator_##CLASS_NAME()																											\
	{																																			\
		Unigine::ComponentSystem::get()->addInitCallback(Unigine::MakeCallback(this, &ComponentRegistrator_##CLASS_NAME::register_component));	\
	}																																			\
	void register_component()																													\
	{																																			\
		Unigine::ComponentSystem::get()->registerComponent<CLASS_NAME>();																		\
	}																																			\
	~ComponentRegistrator_##CLASS_NAME()																										\
	{																																			\
		Unigine::ComponentSystem::get()->unregisterComponent<CLASS_NAME>();																		\
	}																																			\
} inline static const __component_registrator_##CLASS_NAME;

#define PROJECT_UTILS_COMPONENT_DEFINE(CLASS_NAME, PARENT_NAME)\
COMPONENT(CLASS_NAME, PARENT_NAME);\
PROP_NAME(#CLASS_NAME);\
PROJECT_UTILS_REGISTER_COMPONENT(CLASS_NAME)


#define PROJECT_UTILS_COMPONENT_PROP(TYPE, NAME)\
PROP_PARAM(Node, NAME##_node);\
class TYPE *NAME = nullptr;

#define PROJECT_UTILS_COMPONENT_PROP_INIT(NAME)\
NAME = Unigine::ComponentSystem::get()->getComponent<std::remove_pointer<decltype(NAME)>::type>(NAME##_node.get() ? NAME##_node : getNode());\
