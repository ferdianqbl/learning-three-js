# THREE JS - SUMMARY

## MATERIAL

<hr>

1. MeshBasicMaterial (Common Material) [link](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)
2. MeshLambertMaterial (With lighting) [link](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)

> - Use interpolation coloring, faster but less accurate
> - emissive = light color
> - emissiveIntensity = light color intensity\
> - alphaMap, emissiveMap, ... = to use texture from local

3. MeshPhongMaterial (With lighting) [link](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial)

> - Coloring per pixel, slowly but more accurate
> - shininess = mengkilat
> - bumpMap = add depth (jendolan)
> - bumpScale = How much the bump map affects the material
