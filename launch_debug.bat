@echo off
chcp 65001
setlocal EnableDelayedExpansion
set app=bin\VoxelProject_Unigine_x64d.exe
start ""  "%app%" -video_app dx12 -video_refresh 0 -video_debug 2 -video_debug_shader 1 -main_window_size 0 0 -main_window_resizable 1 -main_window_fullscreen 0 -render_vsync 0 -video_offscreen 0 -sound_app auto -data_path ../data/ -extern_plugin UnigineFbxImporter,UnigineGLTFImporter,UnigineFbxExporter,UnigineUsdExchanger -console_command "config_autosave 0 && world_load \"VoxelProject_Unigine\""
