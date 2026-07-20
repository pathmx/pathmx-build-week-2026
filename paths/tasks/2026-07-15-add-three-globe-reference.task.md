---
type: task
status: done
owner: Mark
date: 2026-07-15
due: 2026-07-16
related:
  - ../labs/index.path.md
  - ../labs/three-globe/index.demo.md
---

# Add A Reviewed 3D Globe Reference

## Outcome

Add a self-contained Build Week lab that demonstrates one data-backed Three.js
globe, local component resources, pointer interaction, and presentation-scoped
animation without copying the canonical demo's multi-scene gallery.

---

## Next Move

Review the current canonical globe and its local asset provenance, copy the
smallest complete runtime boundary, then verify build, Play lifecycle, pointer
interaction, narrow layout, and failure fallback on the exact lab route.

---

## Done When

- `/labs/three-globe` renders one readable, interactive globe.
- The lab links its component, data, notices, minimum PathMX version, and
  reviewed upstream source.
- Three.js, globe texture, and network data load locally without CDN requests.
- Browse, Play, pointer drag, narrow layout, lifecycle pause, dependency
  failure, and patch hygiene have recorded evidence.

---

## Activity

- **2026-07-15:** Claimed for implementation after the Bookshelf reference.
- **2026-07-15:** Copied the complete component, network data, local Three.js
  bundle, local NASA Earth texture, and both provenance notices from reviewed
  upstream commit `35af1917`. The landing Source intentionally uses one globe
  instead of the canonical three-scene gallery.
- **2026-07-15:** `pathmx build -o .pathmx-check` passed with 142 artifacts;
  the only warnings are the existing Tufte `theme.prose` field warnings. The
  generated manifest resolves `labs/three-globe/index.demo` to the exact
  `/labs/three-globe` route and contains every local globe resource.
- **2026-07-15:** Live desktop and 390 px audits passed. The texture, ten hub
  labels, eleven route count, caption, direct pointer drag, Browse layout, and
  component Beat in Play all rendered without horizontal overflow or console
  errors. Direct manipulation remains pointer-only; the caption and status
  preserve the scene's meaning, but the canvas has no keyboard rotation
  control and the component does not yet opt out of auto-rotation for reduced
  motion.
- **2026-07-15:** The focused upstream globe gauntlet passed all eight resource,
  animation, resize, drag, Play lifecycle, refresh, texture-failure, and WebGL
  fallback checks. `bun run dev:player-runtime -- check` passed 272 Player
  tests, typecheck, and runtime asset checks. The strict maintainability review
  found no blocker: the 699-line component remains one cohesive tag, the
  generated dependency is isolated under `vendor/`, and the lab adds no new
  branch or compatibility layer.
