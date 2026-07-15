const TAU = Math.PI * 2
const SUN_X = 590
const SUN_Y = 280
const SEMI_MAJOR = 250
const DEFAULT_ECCENTRICITY = 0.58
const ORBIT_DURATION = 12000
const AREA_HALF_WINDOW = 0.34
const SVG_NS = "http://www.w3.org/2000/svg"

const orbitPath = $(`[data-orbit-path]`)
const timeMarks = $(`[data-time-marks]`)
const nearArea = $(`[data-near-area]`)
const farArea = $(`[data-far-area]`)
const nearReference = $(`[data-near-reference]`)
const farReference = $(`[data-far-reference]`)
const planet = $(`[data-planet]`)
const trail = $(`[data-orbit-trail]`)
const velocityVector = $(`[data-velocity-vector]`)
const distanceOutput = $(`[data-distance]`)
const speedOutput = $(`[data-speed]`)
const orbitTimeOutput = $(`[data-orbit-time]`)
const arcRatioOutput = $(`[data-arc-ratio]`)
const speedFill = $(`[data-speed-fill]`)
const motionStatus = $(`[data-motion-status]`)
const toggle = $(`[data-orbit-toggle]`)
const toggleIcon = $(`[data-toggle-icon]`)
const toggleLabel = $(`[data-toggle-label]`)
const positionInput = $(`[data-orbit-position]`)
const shapeInput = $(`[data-orbit-shape]`)
const eccentricityOutput = $(`[data-eccentricity]`)
const reset = $(`[data-orbit-reset]`)
const focusPulse = $(`[data-focus-pulse]`)
const stageButtons = $$(`[data-orbit-stage]`)
const controls = [...stageButtons, toggle, positionInput, shapeInput, reset].filter(Boolean)
const prefersReducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches

const local = ctx.state(function () {
  return {
    phase: 0,
    eccentricity: DEFAULT_ECCENTRICITY,
    running: false,
    presented: false,
    schedule: null,
    stage: null,
  }
})

function wrapAngle(value) {
  return ((value % TAU) + TAU) % TAU
}

function solveEccentricAnomaly(mean, eccentricity) {
  const normalized = wrapAngle(mean)
  let eccentric = eccentricity > 0.55 ? Math.PI : normalized
  for (let iteration = 0; iteration < 9; iteration++) {
    const delta =
      (eccentric - eccentricity * Math.sin(eccentric) - normalized) /
      (1 - eccentricity * Math.cos(eccentric))
    eccentric -= delta
  }
  return eccentric
}

function pointAt(mean) {
  const eccentric = solveEccentricAnomaly(mean, local.eccentricity)
  const semiMinor =
    SEMI_MAJOR * Math.sqrt(1 - local.eccentricity * local.eccentricity)
  return {
    x: SUN_X + SEMI_MAJOR * (Math.cos(eccentric) - local.eccentricity),
    y: SUN_Y + semiMinor * Math.sin(eccentric),
    radius: 1 - local.eccentricity * Math.cos(eccentric),
  }
}

function relativeSpeed(point) {
  return Math.sqrt(2 / point.radius - 1)
}

function pointList(center, halfWindow, count) {
  const points = []
  for (let index = 0; index <= count; index++) {
    const mean = center - halfWindow + (index / count) * halfWindow * 2
    points.push(pointAt(mean))
  }
  return points
}

function areaPath(center) {
  const points = pointList(center, AREA_HALF_WINDOW, 36)
  return [
    `M ${SUN_X.toFixed(2)} ${SUN_Y.toFixed(2)}`,
    ...points.map(function (point) {
      return `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`
    }),
    "Z",
  ].join(" ")
}

function arcLength(center) {
  const points = pointList(center, AREA_HALF_WINDOW, 64)
  let total = 0
  for (let index = 1; index < points.length; index++) {
    total += Math.hypot(
      points[index].x - points[index - 1].x,
      points[index].y - points[index - 1].y,
    )
  }
  return total
}

function createTimeMarks() {
  if (!timeMarks) return
  timeMarks.replaceChildren()
  for (let index = 0; index < 12; index++) {
    const point = pointAt((index / 12) * TAU)
    const mark = document.createElementNS(SVG_NS, "circle")
    mark.setAttribute("cx", point.x.toFixed(2))
    mark.setAttribute("cy", point.y.toFixed(2))
    mark.setAttribute("r", index % 3 === 0 ? "4" : "2.5")
    timeMarks.append(mark)
  }
}

function renderGeometry() {
  const semiMinor =
    SEMI_MAJOR * Math.sqrt(1 - local.eccentricity * local.eccentricity)
  orbitPath?.setAttribute("cx", String(SUN_X - SEMI_MAJOR * local.eccentricity))
  orbitPath?.setAttribute("rx", String(SEMI_MAJOR))
  orbitPath?.setAttribute("ry", semiMinor.toFixed(2))
  nearArea?.setAttribute("d", areaPath(0))
  farArea?.setAttribute("d", areaPath(Math.PI))

  const nearPoint = pointAt(0)
  const farPoint = pointAt(Math.PI)
  nearReference?.setAttribute(
    "transform",
    `translate(${nearPoint.x.toFixed(2)} ${nearPoint.y.toFixed(2)})`,
  )
  farReference?.setAttribute(
    "transform",
    `translate(${farPoint.x.toFixed(2)} ${farPoint.y.toFixed(2)})`,
  )

  const ratio = arcLength(0) / arcLength(Math.PI)
  if (arcRatioOutput) arcRatioOutput.textContent = ratio.toFixed(1) + "×"
  if (eccentricityOutput) {
    eccentricityOutput.textContent = local.eccentricity.toFixed(2)
  }
  createTimeMarks()
}

function renderFrame() {
  const point = pointAt(local.phase)
  const nextPoint = pointAt(local.phase + 0.008)
  const tangentX = nextPoint.x - point.x
  const tangentY = nextPoint.y - point.y
  const tangentLength = Math.hypot(tangentX, tangentY) || 1
  const speed = relativeSpeed(point)
  const vectorLength = Math.min(112, 38 + speed * 28)

  planet?.setAttribute(
    "transform",
    `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)})`,
  )
  velocityVector?.setAttribute(
    "d",
    `M 0 0 L ${((tangentX / tangentLength) * vectorLength).toFixed(2)} ${((tangentY / tangentLength) * vectorLength).toFixed(2)}`,
  )

  const trailPoints = []
  for (let index = 14; index >= 0; index--) {
    trailPoints.push(pointAt(local.phase - index * 0.024))
  }
  trail?.setAttribute(
    "d",
    trailPoints
      .map(function (trailPoint, index) {
        const command = index === 0 ? "M" : "L"
        return `${command} ${trailPoint.x.toFixed(2)} ${trailPoint.y.toFixed(2)}`
      })
      .join(" "),
  )

  if (distanceOutput) distanceOutput.textContent = point.radius.toFixed(2) + " AU"
  if (speedOutput) speedOutput.textContent = speed.toFixed(2) + "×"
  if (orbitTimeOutput) {
    orbitTimeOutput.textContent = Math.round((wrapAngle(local.phase) / TAU) * 100) + "%"
  }
  if (positionInput) {
    positionInput.value = String(Math.round((wrapAngle(local.phase) / TAU) * 1000))
  }
  if (speedFill) {
    const scale = Math.max(0.12, Math.min(1, speed / 2.15))
    speedFill.style.transform = `scaleX(${scale.toFixed(3)})`
  }
}

function setRunning(next) {
  local.running = Boolean(next)
  el.dataset.running = local.running ? "true" : "false"
  toggle?.setAttribute("aria-pressed", local.running ? "true" : "false")
  if (toggleIcon) toggleIcon.textContent = local.running ? "Ⅱ" : "▶"
  if (toggleLabel) toggleLabel.textContent = local.running ? "Pause orbit" : "Play orbit"
  if (motionStatus) {
    motionStatus.textContent = local.running
      ? "Motion running · equal time"
      : "Motion paused · scrub to inspect"
  }
  if (local.running && local.presented && typeof local.schedule === "function") {
    local.schedule()
  }
}

function beginExploring() {
  if (state.get() !== "explore") state.set("explore")
}

function syncStage() {
  const current = state.get() || "observe"
  stageButtons.forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.orbitStage === current ? "true" : "false",
    )
    if (
      button.dataset.orbitStage === current &&
      typeof button.scrollIntoView === "function"
    ) {
      button.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "nearest",
      })
    }
  })

  if (local.stage !== current) {
    local.stage = current
    if (current === "observe") {
      local.phase = 0.55
      setRunning(!prefersReducedMotion)
    } else if (current === "equal-time") {
      local.phase = 0.22
      setRunning(false)
    } else if (current === "near-sun") {
      local.phase = 0
      setRunning(false)
    } else if (current === "far-sun") {
      local.phase = Math.PI
      setRunning(false)
    } else {
      setRunning(false)
    }
  }

  renderFrame()
}

stageButtons.forEach(function (button) {
  on(button, "click", function () {
    state.set(button.dataset.orbitStage)
  })
})

on(toggle, "click", function () {
  beginExploring()
  setRunning(!local.running)
})

on(positionInput, "input", function () {
  beginExploring()
  setRunning(false)
  local.phase = (Number(positionInput.value) / 1000) * TAU
  renderFrame()
})

on(shapeInput, "input", function () {
  beginExploring()
  setRunning(false)
  local.eccentricity = Number(shapeInput.value)
  renderGeometry()
  renderFrame()
})

on(reset, "click", function () {
  beginExploring()
  local.eccentricity = DEFAULT_ECCENTRICITY
  local.phase = 0
  if (shapeInput) shapeInput.value = String(DEFAULT_ECCENTRICITY)
  setRunning(false)
  renderGeometry()
  renderFrame()
})

let focusAnimation
on(el, "pathmx:beat-enter", function (event) {
  if (event.target !== el || !focusPulse || prefersReducedMotion) return
  if (typeof focusPulse.animate !== "function") return
  focusAnimation?.cancel()
  focusAnimation = focusPulse.animate(
    [
      { opacity: 0, transform: "scale(0.985)" },
      { opacity: 0.58, offset: 0.32 },
      { opacity: 0, transform: "scale(1)" },
    ],
    { duration: 420, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
  )
})

on(el, "pathmx:beat-exit", function (event) {
  if (event.target !== el) return
  focusAnimation?.cancel()
})

controls.forEach(function (control) {
  control.disabled = false
})

state.on(syncStage)
renderGeometry()
syncStage()

ctx.effect(
  function ({ signal }) {
    let frame = 0
    let lastTime = null
    local.presented = true

    function schedule() {
      if (frame || signal.aborted || !local.running) return
      frame = requestAnimationFrame(tick)
    }

    function tick(time) {
      frame = 0
      if (signal.aborted || !local.running) return
      if (lastTime !== null) {
        const elapsed = Math.min(50, time - lastTime)
        local.phase = wrapAngle(local.phase + (elapsed / ORBIT_DURATION) * TAU)
      }
      lastTime = time
      renderFrame()
      schedule()
    }

    local.schedule = schedule
    renderFrame()
    schedule()

    return function () {
      local.presented = false
      local.schedule = null
      if (frame) cancelAnimationFrame(frame)
    }
  },
  { when: "presented" },
)

ctx.cleanup(function () {
  focusAnimation?.cancel()
})
