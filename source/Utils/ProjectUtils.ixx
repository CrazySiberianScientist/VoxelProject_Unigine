#include <Unigine.h>
#include <UnigineRender.h>

export module ProjectUtils;

export namespace ProjectUtils
{
	Unigine::Math::vec2 GetScreenPosition(const Unigine::Math::Vec3& point, const Unigine::CameraPtr& cam)
	{
		const auto width = Unigine::RenderState::getWidth();
		const auto height = Unigine::RenderState::getHeight();
		float aspect = Unigine::Math::itof(height) / Unigine::Math::itof(width);
		float screen_x, screen_y;
		if (cam->getScreenPosition(screen_x, screen_y, point, aspect) == 0)
			return { -1.0f, -1.0f };

		return { screen_x, screen_y };
	}
}