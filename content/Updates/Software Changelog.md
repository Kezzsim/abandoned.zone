---
actual_creation_date: 12/27/23
creation_date: 02/07/2024
authors: ["Kari K. Barry"]
---

# Latest release

## Website

### Version 0.1.2
<a class="github-button" href="https://github.com/Kezzsim/abndn-frame/commit/e7eef513b6a1d1ab841b3138ea76933bc240f4a4" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="View commit e7eef51 on github">bb40b3e</a>
#### 02/07/2023
 - Add one new space, the *Radiology Waiting Room : Building Seven*
 - Create a dynamic loading system that reads a JSON file which can contain multiple spaces and cycle through them on reload. Previously there was only one space.
 - Show metadata about the space being viewed including site, bldg, floor etc.
 - [Plausible](https://plausible.io/) analytics telemetry was removed from all sites.

## VRchat

(No releases yet)

---

# Previous Website releases

## Version 0.1.1 
<a class="github-button" href="https://github.com/Kezzsim/abndn-frame/commit/bb40b3ef1554ca585027bf316271877c9c220965" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="View commit bb40b3e on github">bb40b3e</a>
#### 01/03/2023
 - Add compression for mobile clients and Quest VR using [Splat-converter](https://splat-converter.glitch.me/)
 - A-frame has been overwriting our favicon so a `"image/x-icon"` tag was added.
 - [Plausible](https://plausible.io/) analytics telemetry was added to all sites.

## Version 0.1.0 🎉
<a class="github-button" href="https://github.com/Kezzsim/abndn-frame/commit/7cf62f357b9adff12c3c81896fa714e4bd90e1dd" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="View commit 7cf62f3 on github">7cf62f3</a>
#### 12/27/2023
- Switch from rendering scenes using a modified version of [Antimater15's Gaussian Splatting webGL code](https://github.com/antimatter15/splat) to using a version ported to [A-frame](https://aframe.io/). This brings additional benefits from incorporating [Three.js](https://threejs.org/) and WebGL 2.0. All code is now sourced from this [A-frame Gaussian Splatting repository](https://github.com/quadjr/aframe-gaussian-splatting).
- Change code hosting from [a fork](https://github.com/Kezzsim/abandoned_splat_demo) to a [dedicated repository](https://github.com/Kezzsim/abndn-frame).
- Added orbit controls as the default view controller, this locks the viewer into encircling the scanned object in each scene which is more natural than WASD.
- Added VR Component: Although it runs very poorly on Meta Quest Headsets, when attached to a computer scenes are now viewable in Virtual Reality with a full range of motion.

## Version 0.0.9
<a class="github-button" href="https://github.com/Kezzsim/abandoned_splat_demo/commit/b65c14ccd8f69842e247fb76d9b446a32620ad33" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="View commit b65c14c on github">b65c14c</a>
#### 12/18/2023
- Add preview links and custom favicons for easier sharing.
- Only show title animation on desktop browsers, mobile cannot handle it.
- Logo design, Font corrections etc.

---

# Previous VRchat releas

(No releases yet)

<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>