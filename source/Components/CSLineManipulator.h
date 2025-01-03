#pragma once

#include <UnigineComponentSystem.h>
#include <UnigineVisualizer.h>

#include "Utils/ProjectUtilsMacros.h"
#include "Voxels/VoxelTypes.h"
#include "LogicOrders.h"

#include <array>

import CSManipulator;

namespace VoxelProjectUnigine
{
	using namespace Unigine;
	using namespace VoxelProject;

	class CSLineManipulator : public Unigine::ComponentBase
	{
		PROJECT_UTILS_COMPONENT_DEFINE(CSLineManipulator, Unigine::ComponentBase);

		PROP_PARAM(Color, line_color, Unigine::Math::vec4(1.0f, 0.0f, 0.0f, 0.9f));
		PROP_PARAM(Color, start_color, Unigine::Math::vec4(0.0f, 1.0f, 0.0f, 0.9f));
		PROP_PARAM(Color, end_color, Unigine::Math::vec4(0.0f, 0.0f, 1.0f, 0.9f));

	public:
		PROP_PARAM(Node, start_point);
		PROP_PARAM(Node, end_point);

		std::array<Vec3_metersWorld, 2> GetWorldPoints() const
		{
			return { start_point.get()->getWorldPosition(), end_point.get()->getWorldPosition() };
		}

		COMPONENT_UPDATE(Update, GlobalUpdateOrder::COMMON_LOGIC);
		void Update()
		{
			const auto& points = GetWorldPoints();
			Visualizer::renderLine3D(points[0], points[1], line_color);

			const auto pointSize = 0.1f;
			Visualizer::renderPoint3D(points[0], pointSize, start_color);
			Visualizer::renderPoint3D(points[1], pointSize, end_color);
		}
	};
}