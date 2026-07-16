---
title: Three Globe Data Reference
description: A self-contained data-backed Three.js globe with local resources, pointer interaction, and presentation-scoped animation.
route: /labs/three-globe
theme:
  forceColorScheme: dark
  color:
    bg: "#071018"
    fg: "#EDF8FA"
    muted: "#9CB7BF"
    surface: "#0C1822"
    link: "#67E8F9"
    accent: "#22D3EE"
    border: "rgba(125, 211, 222, 0.24)"
    focus: "#A78BFA"
  measure: 88ch
---

[@three-globe]: ./three-globe.components.md

# Three Globe Data Reference

This is the smallest complete variant of PathMX's reviewed globe demo: one
data-backed scene, one local JSON file, one local Three.js bundle, and one local
NASA Earth texture. Drag the globe to inspect it directly; its slow rotation
continues only while the component's Beat is presented in Play.

## What to copy

- Import the [`<three-globe-scene>` definition](./three-globe.components.md).
- Keep the [network data](./three-globe-network.json),
  [Three.js license notices](./vendor/three.NOTICES.txt), and
  [NASA texture provenance](./vendor/earth-at-night-2012.NOTICE.txt) beside it.
- Copy `vendor/three.bundle.js` and `vendor/earth-at-night-2012.jpg`; the
  component declares both as local assets, so the reference does not need a
  runtime CDN.
- Change the tag's colors, layer toggles, title, note, and rotation speed. Keep
  its resource directives and `ctx.effect(..., { when: "presented" })`
  lifecycle ownership intact.

Minimum PathMX: `@fellowhumans/pathmx@0.1.10`.

Reviewed upstream commit:
[canonical demo](https://github.com/pathmx/pathmx/blob/35af1917/paths/demos/three-globe.demo.md),
[component definition](https://github.com/pathmx/pathmx/blob/35af1917/paths/demos/three-globe.components.md),
and [data file](https://github.com/pathmx/pathmx/blob/35af1917/paths/demos/three-globe-network.json).

---

<!--
type: experiment
id: inspect-global-routing-mesh
title: Inspect the Global Routing Mesh
-->

## Inspect the global routing mesh

The scene resolves ten hubs and eleven routes from its local data file. Its
visible caption and status panel preserve that meaning while WebGL owns the
visual rendering surface.

<three-globe-scene
  title="Global Routing Mesh"
  note="Ten hubs and eleven routes from local JSON and a local NASA Earth texture"
  color="#22d3ee"
  accent="#a78bfa"
  atmosphere="#60a5fa"
  rotationSpeed="0.16"
/>

[Back to the Build Week labs](../index.path.md)
