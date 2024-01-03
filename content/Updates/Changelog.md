---
creation_date: 12/27/23
last-modified: 01/03/2024
authors: ["Kari K. Barry"]
---

# Latest release

## Version 0.1.1
#### 01/03/2023
- Add compression for mobile clients and Quest VR using [Splat-converter](https://splat-converter.glitch.me/)
- A-frame has been overwriting our favicon so a `"image/x-icon"` tag was added.
- [Plausible](https://plausible.io/) analytics telemetry was added to all sites.

---

## Version 0.1.0 🎉
#### 12/27/2023
- Switch from rendering scenes using a modified version of [Antimater15's Gaussian Splatting webGL code](https://github.com/antimatter15/splat) to using a version ported to [A-frame](https://aframe.io/). This brings additional benefits from incorporating [Three.js](https://threejs.org/) and WebGL 2.0. All code is now sourced from this [A-frame Gaussian Splatting repository](https://github.com/quadjr/aframe-gaussian-splatting).
- Change code hosting from [a fork](https://github.com/Kezzsim/abandoned_splat_demo) to a [dedicated repository](https://github.com/Kezzsim/abndn-frame).
- Added orbit controls as the default view controller, this locks the viewer into encircling the scanned object in each scene which is more natural than WASD.
- Added VR Component: Although it runs very poorly on Meta Quest Headsets, when attached to a computer scenes are now viewable in Virtual Reality with a full range of motion.

---

## Version 0.0.9
#### 12/18/2023
- Add preview links and custom favicons for easier sharing.
- Only show title animation on desktop browsers, mobile cannot handle it.
- Logo design, Font corrections etc.