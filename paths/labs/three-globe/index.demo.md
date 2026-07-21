---
title: Global Routing Mesh
description: A data-backed Three.js globe with local resources, pointer interaction, and presentation-scoped animation.
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

# Global Routing Mesh

Ten hubs and eleven routes, rendered from local data on a night-side Earth.
Drag the globe to inspect it; slow rotation continues only while this Beat is
presented in Play.

<!--
type: experiment
id: inspect-global-routing-mesh
title: Inspect the Global Routing Mesh
-->

<three-globe-scene
  title="Global Routing Mesh"
  note="Ten hubs and eleven routes from local JSON and a local NASA Earth texture"
  color="#22d3ee"
  accent="#a78bfa"
  atmosphere="#60a5fa"
  rotationSpeed="0.16"
/>

[Back to the labs](../index.path.md)
