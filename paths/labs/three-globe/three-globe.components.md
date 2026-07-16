---
title: Three Globe Components
parseComponents: true
componentName: three-globe-scene
theme:
  dark:
    color:
      bg: oklch(0.06 0.02 260)
      fg: oklch(0.94 0.02 200)
      muted: oklch(0.68 0.03 220)
      surface: oklch(0.11 0.025 260)
      link: oklch(0.78 0.12 200)
      accent: oklch(0.78 0.14 200)
      border: oklch(0.28 0.03 260)
      focus: oklch(0.82 0.14 200)
---

# Three Globe Scene

`<three-globe-scene>` renders a data-backed globe directly with Three.js. The
tag keeps the PathMX side simple: authored JSON declares points and logical
arcs, `@data.network` makes that file part of the graph, and the instance script
resolves it through `ctx.data.network.json()`. Three.js and the equirectangular
Earth texture ship as local assets, so the fixture works without a CDN and
native `import(url)` shares one evaluated module across instances. Scene
construction and teardown belong to `ctx.effect`, which leaves no renderer or
animation work off-Beat.

The public attributes are intentionally small. Authors can set `title`, `note`,
`color`, `accent`, `atmosphere`, `autoRotate`, `rotationSpeed`, and layer
switches for `points`, `arcs`, `labels`, and `rings`. All layers default on.

[@data.network]: ./three-globe-network.json
[@asset.renderer]: ./vendor/three.bundle.js
[@asset.globe]: ./vendor/earth-at-night-2012.jpg

## HTML

```html
<figure
  class="three-demo-scene three-globe-scene"
  data-auto-rotate="{{ autoRotate: true }}"
  data-rotation-speed="{{ rotationSpeed: 0.16 }}"
  data-show-points="{{ points: true }}"
  data-show-arcs="{{ arcs: true }}"
  data-show-labels="{{ labels: true }}"
  data-show-rings="{{ rings: true }}"
  style="--three-color: {{ color: #22d3ee }}; --three-accent: {{ accent: #a78bfa }}; --three-atmosphere: {{ atmosphere: #60a5fa }}"
>
  <div class="three-demo-scene__viewport three-globe-scene__viewport">
    <canvas
      class="three-demo-scene__canvas"
      aria-label="{{ title: Data globe }}"
    ></canvas>
    <span
      class="three-demo-scene__state"
      data-three-status
      role="status"
      aria-live="polite"
      >Loading globe data</span
    >
    <span class="three-demo-scene__hint">Drag globe</span>
    <div class="three-globe-scene__hud" aria-hidden="true">
      <span data-globe-count="points">-- hubs</span>
      <span data-globe-count="arcs">-- routes</span>
    </div>
  </div>
  <figcaption class="three-demo-scene__caption">
    <strong>{{ title: Data Globe }}</strong>
    <span>{{ note: File-backed points, arcs, labels, and rings }}</span>
  </figcaption>
</figure>
```

## CSS

The viewport matches the existing Three.js demo scene contract while leaving
room for a cinematic globe hero. Status and hint elements reuse the shared
class names from the rest of the demo.

```css
:self {
  --three-color: #22d3ee;
  --three-accent: #a78bfa;
  --three-atmosphere: #60a5fa;
  display: grid;
  gap: 0.7rem;
  min-inline-size: 0;
  margin: 0;
}

.three-globe-scene__viewport {
  position: relative;
  overflow: hidden;
  aspect-ratio: 21 / 9;
  min-block-size: 18rem;
  border: 1px solid
    color-mix(in oklch, var(--three-color) 38%, var(--pmx-color-border));
  border-radius: 0.85rem;
  background:
    radial-gradient(
      circle at 50% 45%,
      color-mix(in oklch, var(--three-color) 25%, transparent),
      transparent 30%
    ),
    radial-gradient(
      circle at 76% 24%,
      color-mix(in oklch, var(--three-accent) 28%, transparent),
      transparent 28%
    ),
    linear-gradient(155deg, #020617, color-mix(in oklch, #111827 62%, black));
  box-shadow:
    0 0 0 1px color-mix(in oklch, var(--three-accent) 18%, transparent) inset,
    0 1.5rem 4rem color-mix(in oklch, black 38%, transparent),
    0 0 3rem color-mix(in oklch, var(--three-atmosphere) 12%, transparent);
  cursor: grab;
  touch-action: none;
}

:self[data-globe-dragging="true"] .three-globe-scene__viewport {
  cursor: grabbing;
}

.three-demo-scene__canvas {
  display: block;
  inline-size: 100%;
  block-size: 100%;
}

.three-demo-scene__state {
  position: absolute;
  inset-block-start: 0.65rem;
  inset-inline-start: 0.65rem;
  padding: 0.28rem 0.45rem;
  border: 1px solid color-mix(in oklch, white 18%, transparent);
  border-radius: 999px;
  background: color-mix(in oklch, black 46%, transparent);
  color: white;
  font-family: var(--pmx-font-mono);
  font-size: 0.68rem;
}

:self[data-three-state="ready"] .three-demo-scene__state {
  opacity: 0;
}

:self[data-three-state="error"] .three-demo-scene__state {
  opacity: 1;
  background: color-mix(in oklch, #ef4444 72%, black);
}

.three-demo-scene__hint {
  position: absolute;
  inset-block-end: 0.65rem;
  inset-inline-end: 0.75rem;
  padding: 0.22rem 0.5rem;
  border-radius: 999px;
  background: color-mix(in oklch, black 52%, transparent);
  color: color-mix(in oklch, white 78%, var(--three-accent));
  font-family: var(--pmx-font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms ease;
}

:self[data-three-state="ready"] .three-demo-scene__hint {
  opacity: 0.72;
}

.three-globe-scene__hud {
  position: absolute;
  inset-block-start: 0.65rem;
  inset-inline-end: 0.65rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 0.4rem;
  max-inline-size: min(18rem, calc(100% - 7rem));
  pointer-events: none;
}

.three-globe-scene__hud span {
  padding: 0.28rem 0.48rem;
  border: 1px solid color-mix(in oklch, var(--three-color) 36%, transparent);
  border-radius: 999px;
  background: color-mix(in oklch, black 48%, transparent);
  color: color-mix(in oklch, white 82%, var(--three-color));
  font-family: var(--pmx-font-mono);
  font-size: 0.68rem;
}

.three-demo-scene__caption {
  display: grid;
  gap: 0.12rem;
}

.three-demo-scene__caption strong {
  line-height: 1.1;
}

.three-demo-scene__caption span {
  color: var(--pmx-color-muted);
  font-size: 0.86rem;
}

@container pathmx-runtime (max-width: 720px) {
  .three-globe-scene__viewport {
    aspect-ratio: 16 / 11;
    min-block-size: 15rem;
  }
}
```

## JavaScript

The script imports the emitted local module URL, reads local JSON through the
current `ctx.data` helpers, and treats pointer dragging as local ephemeral
state. `ctx.effect(..., { when: "presented" })` owns continuous rendering;
module/data loading and semantic loading/error UI remain authored here.

```js
const rendererModule = import(ctx.assets.renderer.url)
const rendererResources = Promise.all([
  rendererModule,
  ctx.data.network.json(),
  rendererModule.then(function (module) {
    return new module.THREE.TextureLoader().loadAsync(ctx.assets.globe.url)
  }),
]).then(
  function (results) { return { results } },
  function (error) { return { error } },
)

const canvas = $(".three-demo-scene__canvas")
const viewport = $(".three-globe-scene__viewport")
const status = $("[data-three-status]")
const pointCount = $('[data-globe-count="points"]')
const arcCount = $('[data-globe-count="arcs"]')
const autoRotate = parseBoolean(el.dataset.autoRotate, true)
const rotationSpeed =
  Number.parseFloat(el.dataset.rotationSpeed || "0.16") || 0.16
const showPoints = parseBoolean(el.dataset.showPoints, true)
const showArcs = parseBoolean(el.dataset.showArcs, true)
const showLabels = parseBoolean(el.dataset.showLabels, true)
const showRings = parseBoolean(el.dataset.showRings, true)
const drag = {
  active: false,
  x: 0,
  y: 0,
  startX: 0,
  startY: 0,
  rotationX: -0.28,
  rotationY: -0.62,
}
let disposed = false

function parseBoolean(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback
  return !/^(false|no|0)$/i.test(String(value))
}

function colorVar(name, fallback) {
  return getComputedStyle(el).getPropertyValue(name).trim() || fallback
}

function setStatus(state, text) {
  el.dataset.threeState = state
  el.setAttribute("aria-busy", state === "loading" ? "true" : "false")
  if (status) status.textContent = text
}

function disposeMaterial(material) {
  if (Array.isArray(material)) {
    material.forEach(disposeMaterial)
  } else if (material && typeof material.dispose === "function") {
    if (material.map && typeof material.map.dispose === "function") {
      material.map.dispose()
    }
    material.dispose()
  }
}

function disposeObject(object) {
  if (!object || typeof object.traverse !== "function") return
  object.traverse(function (child) {
    if (child.geometry && typeof child.geometry.dispose === "function") {
      child.geometry.dispose()
    }
    if (child.material) disposeMaterial(child.material)
  })
}

function disposeInput() {
  if (viewport) {
    viewport.removeEventListener("pointerdown", onPointerDown)
    viewport.removeEventListener("pointermove", onPointerMove)
    viewport.removeEventListener("pointerup", onPointerUp)
    viewport.removeEventListener("pointercancel", onPointerUp)
    viewport.removeEventListener("pointerleave", onPointerUp)
  }
}

function onPointerDown(event) {
  drag.active = true
  drag.startX = event.clientX
  drag.startY = event.clientY
  drag.x = drag.rotationY
  drag.y = drag.rotationX
  el.dataset.globeDragging = "true"
  if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId)
}

function onPointerMove(event) {
  if (!drag.active) return
  const rect = viewport.getBoundingClientRect()
  const width = Math.max(1, rect.width)
  const height = Math.max(1, rect.height)
  drag.rotationY = drag.x + ((event.clientX - drag.startX) / width) * 3.8
  drag.rotationX = Math.max(
    -0.95,
    Math.min(0.55, drag.y + ((event.clientY - drag.startY) / height) * 2.4),
  )
}

function onPointerUp(event) {
  drag.active = false
  el.dataset.globeDragging = "false"
  if (viewport.releasePointerCapture) {
    try {
      viewport.releasePointerCapture(event.pointerId)
    } catch (err) {
      // Pointer capture may already be gone after leave/cancel.
    }
  }
}

function createStarfield(THREE, scene) {
  const starCount = 650
  const positions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 1200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 640
    positions[i * 3 + 2] = -120 - Math.random() * 620
  }
  const starGeometry = new THREE.BufferGeometry()
  starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  const starMaterial = new THREE.PointsMaterial({
    color: new THREE.Color(colorVar("--three-atmosphere", "#60a5fa")),
    size: 1.8,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  })
  scene.add(new THREE.Points(starGeometry, starMaterial))
  return { starGeometry, starMaterial }
}

function normalizePoints(raw) {
  return Array.isArray(raw)
    ? raw
        .map(function (point) {
          return {
            id: String(point.id || ""),
            name: String(point.name || point.id || "Point"),
            lat: Number(point.lat),
            lng: Number(point.lng),
            value: Number(point.value || 1),
            color: point.color || colorVar("--three-color", "#22d3ee"),
            label: point.label || point.name || point.id || "",
            ring: point.ring === true,
          }
        })
        .filter(function (point) {
          return point.id && Number.isFinite(point.lat) && Number.isFinite(point.lng)
        })
    : []
}

function resolveArcs(raw, byId) {
  if (!Array.isArray(raw)) return []
  return raw
    .map(function (arc) {
      const start = byId.get(arc.from)
      const end = byId.get(arc.to)
      if (!start || !end) return null
      return {
        startLat: start.lat,
        startLng: start.lng,
        endLat: end.lat,
        endLng: end.lng,
        color: arc.color || [
          start.color || colorVar("--three-color", "#22d3ee"),
          end.color || colorVar("--three-accent", "#a78bfa"),
        ],
      }
    })
    .filter(Boolean)
}

function mountScene(results, signal) {
  const THREE = results[0].THREE
  const network = results[1]
  const globeTexture = results[2]

  let closed = false
  let frame = 0
  let renderer
  let resizeObserver
  let globeRoot
  let scene
  let camera
  let starGeometry

  function unmountScene() {
    if (closed) return
    closed = true
    if (frame) cancelAnimationFrame(frame)
    frame = 0
    if (resizeObserver) resizeObserver.disconnect()
    disposeObject(scene)
    if (renderer) renderer.dispose()
  }

  try {
    const points = normalizePoints(network.points)
    const byId = new Map(points.map(function (point) { return [point.id, point] }))
    const arcs = resolveArcs(network.arcs, byId)
    const rings = points.filter(function (point) { return point.ring })

    if (pointCount) pointCount.textContent = points.length + " hubs"
    if (arcCount) arcCount.textContent = arcs.length + " routes"

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1800)
    camera.position.set(0, 0, 360)

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    globeTexture.colorSpace = THREE.SRGBColorSpace
    globeTexture.anisotropy = Math.min(
      8,
      renderer.capabilities.getMaxAnisotropy(),
    )

    const stars = createStarfield(THREE, scene)
    starGeometry = stars.starGeometry

    const globeRadius = 100
    globeRoot = new THREE.Group()
    globeRoot.rotation.x = drag.rotationX
    globeRoot.rotation.y = drag.rotationY
    scene.add(globeRoot)

    function positionAt(lat, lng, radius) {
      const phi = (90 - lat) * Math.PI / 180
      const theta = (lng + 180) * Math.PI / 180
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      )
    }

    const globeMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#b8cbe0"),
      emissive: new THREE.Color("#071426"),
      emissiveIntensity: 0.28,
      map: globeTexture,
      shininess: 8,
    })
    globeRoot.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius, 64, 48),
        globeMaterial,
      ),
    )

    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorVar("--three-atmosphere", "#60a5fa")),
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    })
    globeRoot.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius * 1.06, 48, 32),
        atmosphereMaterial,
      ),
    )

    const gridMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(colorVar("--three-atmosphere", "#60a5fa")),
      transparent: true,
      opacity: 0.18,
    })
    for (let lat = -60; lat <= 60; lat += 30) {
      const line = []
      for (let lng = -180; lng <= 180; lng += 5) {
        line.push(positionAt(lat, lng, globeRadius * 1.002))
      }
      globeRoot.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(line), gridMaterial),
      )
    }
    for (let lng = -150; lng <= 180; lng += 30) {
      const line = []
      for (let lat = -90; lat <= 90; lat += 5) {
        line.push(positionAt(lat, lng, globeRadius * 1.002))
      }
      globeRoot.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(line), gridMaterial),
      )
    }

    if (showPoints) {
      points.forEach(function (point) {
        const pointMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(point.color),
        })
        const marker = new THREE.Mesh(
          new THREE.SphereGeometry(0.8 + Math.min(1.7, point.value * 0.18), 16, 12),
          pointMaterial,
        )
        marker.position.copy(positionAt(point.lat, point.lng, globeRadius * 1.025))
        globeRoot.add(marker)
      })
    }

    if (showArcs) {
      arcs.forEach(function (arc) {
        const start = positionAt(arc.startLat, arc.startLng, globeRadius * 1.02)
        const end = positionAt(arc.endLat, arc.endLng, globeRadius * 1.02)
        const control = start.clone().add(end).normalize().multiplyScalar(
          globeRadius + 16 + start.distanceTo(end) * 0.14,
        )
        const curve = new THREE.QuadraticBezierCurve3(start, control, end)
        const arcMaterial = new THREE.LineBasicMaterial({
          color: new THREE.Color(Array.isArray(arc.color) ? arc.color[0] : arc.color),
          transparent: true,
          opacity: 0.82,
        })
        globeRoot.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(curve.getPoints(72)),
            arcMaterial,
          ),
        )
      })
    }

    if (showRings) {
      rings.forEach(function (point) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(2.2, 2.8, 48),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(point.color),
            transparent: true,
            opacity: 0.48,
            side: THREE.DoubleSide,
          }),
        )
        ring.position.copy(positionAt(point.lat, point.lng, globeRadius * 1.03))
        ring.lookAt(ring.position.clone().multiplyScalar(2))
        globeRoot.add(ring)
      })
    }

    if (showLabels) {
      points.forEach(function (point) {
        const labelCanvas = document.createElement("canvas")
        labelCanvas.width = 256
        labelCanvas.height = 64
        const labelContext = labelCanvas.getContext("2d")
        labelContext.font = "600 24px system-ui, sans-serif"
        labelContext.textAlign = "center"
        labelContext.textBaseline = "middle"
        labelContext.fillStyle = point.color
        labelContext.fillText(point.label, 128, 32)
        const labelTexture = new THREE.CanvasTexture(labelCanvas)
        labelTexture.colorSpace = THREE.SRGBColorSpace
        const label = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: labelTexture,
            transparent: true,
            depthWrite: false,
          }),
        )
        label.position.copy(positionAt(point.lat, point.lng, globeRadius * 1.09))
        label.scale.set(32, 8, 1)
        globeRoot.add(label)
      })
    }

    scene.add(new THREE.AmbientLight(0xcccccc, Math.PI * 0.92))
    const key = new THREE.DirectionalLight(0xffffff, Math.PI * 0.72)
    key.position.set(1, 1, 1.4)
    scene.add(key)

    function resize() {
      if (closed) return
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()

    function renderThreeGlobeFrame() {
      if (closed || disposed || signal.aborted || !el.isConnected) {
        unmountScene()
        return
      }
      if (autoRotate && !drag.active) {
        drag.rotationY += rotationSpeed * 0.01
      }
      globeRoot.rotation.x += (drag.rotationX - globeRoot.rotation.x) * 0.08
      globeRoot.rotation.y += (drag.rotationY - globeRoot.rotation.y) * 0.08
      if (starGeometry) starGeometry.rotateY(0.00008)
      renderer.render(scene, camera)
      frame = requestAnimationFrame(renderThreeGlobeFrame)
    }

    renderer.render(scene, camera)
    setStatus("ready", "Ready")
    frame = requestAnimationFrame(renderThreeGlobeFrame)
    return unmountScene
  } catch (err) {
    unmountScene()
    throw err
  }
}

ctx.cleanup(function () {
  disposed = true
  disposeInput()
})
el.dataset.threePresented = "false"
setStatus("loading", "Loading globe data")
if (viewport) {
  viewport.addEventListener("pointerdown", onPointerDown)
  viewport.addEventListener("pointermove", onPointerMove)
  viewport.addEventListener("pointerup", onPointerUp)
  viewport.addEventListener("pointercancel", onPointerUp)
  viewport.addEventListener("pointerleave", onPointerUp)
}

ctx.effect(
  function (scope) {
    let closeScene
    let closed = false
    el.dataset.threePresented = "true"
    setStatus("loading", "Loading globe data")
    rendererResources.then(function (resource) {
      if (closed || disposed || scope.signal.aborted || !el.isConnected) return
      if (resource.error) {
        console.error("[PathMX Three Globe demo failed]", resource.error)
        setStatus("error", "Globe failed to load")
        return
      }
      try {
        closeScene = mountScene(resource.results, scope.signal)
      } catch (err) {
        console.error("[PathMX Three Globe demo failed]", err)
        setStatus("error", "Globe failed to load")
      }
    })
    return function () {
      closed = true
      el.dataset.threePresented = "false"
      if (closeScene) closeScene()
    }
  },
  { when: "presented" },
)
```

**Example**

```html
<three-globe-scene
  title="Routing Globe"
  note="Local JSON drives globe points, arcs, labels, and rings"
  color="#22d3ee"
  accent="#a78bfa"
  atmosphere="#60a5fa"
/>
```

**Result**

<three-globe-scene title="Routing Globe" note="Local JSON drives globe points, arcs, labels, and rings" color="#22d3ee" accent="#a78bfa" atmosphere="#60a5fa" />
