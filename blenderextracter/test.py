import bpy
import os
import sys

bpy.data.objects["name"].data.body = sys.argv[5]

print(sys.argv)

blend_file_path = bpy.data.filepath
directory = os.path.dirname(blend_file_path)
target_file = os.path.join(directory + "/../output/", sys.argv[5] + '.fbx')
bpy.ops.export_scene.fbx(filepath=target_file)
