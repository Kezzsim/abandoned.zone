---
creation_date: 12/13/23
authors: ["Kari K. Barry"]
---

*abandoned.ai* relies on two different types of technology in order to facilitate its mission:
- **Capturing Methods**
	- [[#(1) Photography (1822)|Photography]]
	- [[#(2) Photogrammetry (1867)|Photogrammetry]]
- **Rendering Methods**
	- [[#(3) Structure from Motion (1976)|Structure from motion]]
	- [[#(4) NeRF (2022)|NeRF]]
	- [[#(5) Gaussian Splatting (2023)|Gaussian Splatting]]

On occasion the boundaries between these resource areas can become obfuscated as different software and hardware applications package them together to create a finished product. This article serves to be a broad overview of how these technologies came about and why they're all pertinent to the current zeitgeist enabling the existence of *abandoned.ai*.

---

# (1) Photography (1822)
#### Method : Capture
![sculpture of someone holding an old camera](https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%D0%97%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0_%C2%AB%D0%97%D0%BD%D0%B0%D0%BC%D1%8F%C2%BB_%28%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%29_f008.jpg/640px-%D0%97%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0_%C2%AB%D0%97%D0%BD%D0%B0%D0%BC%D1%8F%C2%BB_%28%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%29_f008.jpg) 
<br/>
[Image attribution](https://commons.wikimedia.org/wiki/File:%D0%97%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0_%C2%AB%D0%97%D0%BD%D0%B0%D0%BC%D1%8F%C2%BB_(%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA)_f008.jpg)
<br/>
A technology as old as time, yet still a crucial part of the process when creating digital places. Many different types of cameras exist in various different configurations, some better than others when it comes to spatial reconstruction. There are 360° cameras that can grab entire environments in one go, there are automated pan and tilt cameras that can scan rooms on their own. <br/>
For guidelines see the section : [[Photography]]

# (2) Photogrammetry (1867)
#### Method : Capture
![A person in a photogrammetric capture rig featuring many cameras simultaneously in use](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Esper_LightCage_photogrammetry_camera_rig.jpg/640px-Esper_LightCage_photogrammetry_camera_rig.jpg) 
<br/>
[Image attribution](https://commons.wikimedia.org/wiki/File:Esper_LightCage_photogrammetry_camera_rig.jpg)
<br/>
To capture an entire environment, you need a lot of data. Using photographs, the key is to just take more pictures. For over a century people have understood how to combine pictures to form a facsimile of a larger space. ***Photogrammetry*** in it's raw element is a lot like a panorama, uninformed of geometry but a vast depiction of space in a rasterized form. It took a while photogrammetric data could be processed into something meaningful. <br/>
For guidelines see the section : [[Photogrammetry]]

# (3) Structure from Motion (1976)
#### Method : Rendering
![A diagrams showing how many photographs can come together to form structure](https://www.cs.cornell.edu/~snavely/bundler/images/Colosseum.jpg) 
<br/>
[Image attribution](https://www.cs.cornell.edu/~snavely/bundler/)
<br/>
From this point onward emphasis shifts away from the camera, towards the computer. ***Structure from Motion*** (SfM) takes a series of images which share overlapping identifiable features (known as *landmarks*) and puts them through a *localizing* algorithm. This allows the computer to create points in three dimensional space that refer to areas of the image.<br/>
For guidelines see the section : [[Structure from Motion]]

# (4) NeRF (2022)
#### Method : Rendering
![[NeRF_depth.gif]]
<br/>
[Image attribution](https://www.matthewtancik.com/nerf)
<br/>
SfM mostly gives us, as the name implies, *structure*, which comes in the form of point clouds. These are often imperfect, sparse representations of objects and space which lack scalable representations of color and luminosity. Due to recent advancements in Machine Learning, ***Neural Radiance Fields*** (NeRF) have emerged as an enhanced way to convert photogrammetric images into spatial data. Radiance fields incorporate physical aspects of light including directionality to create a more realistic representation of objects. Although highly effective, NeRFs require substantial compute to both train and render (view).<br/>
For guidelines see the section : [[NeRF]]

# (5) Gaussian Splatting (2023)
## This is the method *abandoned.ai* currently uses
#### Method : Rendering
[[Gaussian Splatting]]![[gaussian_nerf_comparison.png]]
<br/>
[Image attribution](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
<br/>
NeRF provides a baseline for rendering spaces, yet at times it does so perhaps a bit to literally. Radiance fields can be represented in different ways, normally a NeRF viewer would express the entire trajectory of a beam of light which means scenes need to be completely re-rendered after changing the view. However, these can be compressed into *gaussians*, small blurred particles that roughly express the light in a way that is much less computationally intense.<br/>
For guidelines see the section : [[Gaussian Splatting]]