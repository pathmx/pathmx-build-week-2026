const TAU = Math.PI * 2
const TURNS = 6
const CLIMB_DURATION = 16000
const TRACE_STEPS = 520

const TRIADS = [
  {
    stage: "Logic of Being",
    pair: "Being → Nothing → Becoming",
    desc: "Pure Being, stripped of every quality, proves indistinguishable from Nothing; their restlessness together is Becoming.",
  },
  {
    stage: "Consciousness",
    pair: "Sense-certainty → Perception → Understanding",
    desc: "The immediacy of “this, here, now” cannot hold; perceiving things with properties resolves into law-governed understanding.",
  },
  {
    stage: "Self-Consciousness",
    pair: "Master → Servant → Recognition",
    desc: "Domination cannot secure the acknowledgment it demands; only mutual recognition can.",
  },
  {
    stage: "Reason",
    pair: "Subjective → Objective → Absolute",
    desc: "Mind first faces a world apart from it, then finds its own structure already at work in that world.",
  },
  {
    stage: "Spirit",
    pair: "Individual → Society → Ethical Life",
    desc: "Personal freedom and social order stop competing inside a lived ethical community.",
  },
  {
    stage: "Absolute Spirit",
    pair: "Art → Religion → Philosophy",
    desc: "Spirit beholds itself in images, then in devotion, and finally comprehends itself in concepts.",
  },
]

const STAGE_TARGETS = {
  observe: 0,
  thesis: 0.17 / TURNS,
  antithesis: 0.5 / TURNS,
  synthesis: 0.88 / TURNS,
  climb: null,
  absolute: 1,
}

const canvas = $(`[data-spiral-canvas]`)
const context = canvas ? canvas.getContext("2d") : null
const sceneWrap = canvas ? canvas.parentElement : null
const focusPulse = $(`[data-focus-pulse]`)
const motionStatus = $(`[data-motion-status]`)
const triadMoment = $(`[data-triad-moment]`)
const triadStage = $(`[data-triad-stage]`)
const triadPair = $(`[data-triad-pair]`)
const triadDesc = $(`[data-triad-desc]`)
const metricTurn = $(`[data-metric-turn]`)
const metricMoment = $(`[data-metric-moment]`)
const metricAscent = $(`[data-metric-ascent]`)
const toggle = $(`[data-spiral-toggle]`)
const toggleIcon = $(`[data-toggle-icon]`)
const toggleLabel = $(`[data-toggle-label]`)
const positionInput = $(`[data-spiral-position]`)
const speedInput = $(`[data-spiral-speed]`)
const speedValue = $(`[data-speed-value]`)
const reset = $(`[data-spiral-reset]`)
const stageButtons = $$(`[data-spiral-stage]`)
const controls = [...stageButtons, toggle, positionInput, speedInput, reset].filter(Boolean)
const prefersReducedMotion =
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches

const local = ctx.state(function () {
  return {
    t: 0,
    speed: 1,
    running: false,
    presented: false,
    schedule: null,
    stage: null,
    manualHold: false,
    tokens: null,
    tokensAt: 0,
    readoutKey: "",
    width: 0,
    height: 0,
  }
})

function readTokens() {
  const styles = getComputedStyle(el)
  function token(name, fallback) {
    const value = styles.getPropertyValue(name).trim()
    return value || fallback
  }
  local.tokens = {
    thesis: token("--ds-thesis", "#6d4fa3"),
    antithesis: token("--ds-antithesis", "#b23a5e"),
    synthesis: token("--ds-synthesis", "#6d4fa3"),
    gold: token("--ds-gold", "#a3781a"),
    ink: styles.color,
    dim: token("--ds-dim", styles.color),
    glow: Number.parseFloat(token("--ds-glow", "0.5")) || 0,
    label: `600 11px ${styles.fontFamily}`,
    apexLabel: `700 13px ${styles.fontFamily}`,
  }
  local.tokensAt = Date.now()
}

function spiralPoint(progress) {
  const width = local.width
  const height = local.height
  const angle = progress * TURNS * TAU - Math.PI / 2
  const radius = width * 0.05 + (width * 0.38 - width * 0.05) * progress
  const y = height * 0.9 + (height * 0.24 - height * 0.9) * progress
  return {
    x: width / 2 + Math.cos(angle) * radius,
    y: y + Math.sin(angle) * radius * 0.32,
  }
}

function momentAt(progress) {
  if (progress >= 1) return "absolute"
  const phase = (progress * TURNS) % 1
  if (phase < 1 / 3) return "thesis"
  if (phase < 2 / 3) return "antithesis"
  return "synthesis"
}

function momentColor(moment) {
  if (moment === "absolute") return local.tokens.gold
  return local.tokens[moment]
}

function draw() {
  if (!context || !local.tokens || !local.width || !local.height) return
  const tokens = local.tokens
  const t = local.t
  context.clearRect(0, 0, local.width, local.height)

  context.strokeStyle = tokens.dim
  context.globalAlpha = 0.22
  context.lineWidth = 1
  context.setLineDash([2, 6])
  context.beginPath()
  context.moveTo(local.width / 2, local.height * 0.05)
  context.lineTo(local.width / 2, local.height * 0.95)
  context.stroke()
  context.setLineDash([])

  context.strokeStyle = tokens.synthesis
  context.globalAlpha = 0.14
  context.lineWidth = 1.2
  context.beginPath()
  for (let index = 0; index <= TRACE_STEPS; index++) {
    const point = spiralPoint(index / TRACE_STEPS)
    if (index === 0) context.moveTo(point.x, point.y)
    else context.lineTo(point.x, point.y)
  }
  context.stroke()
  context.globalAlpha = 1

  const upto = Math.floor(TRACE_STEPS * Math.min(1, t))
  for (let index = 1; index <= upto; index++) {
    const previous = spiralPoint((index - 1) / TRACE_STEPS)
    const point = spiralPoint(index / TRACE_STEPS)
    const progress = index / TRACE_STEPS
    context.strokeStyle = momentColor(momentAt(Math.min(progress, 0.9999)))
    context.globalAlpha = 0.35 + 0.65 * progress
    context.lineWidth = 1.5 + 3 * progress
    context.lineCap = "round"
    context.beginPath()
    context.moveTo(previous.x, previous.y)
    context.lineTo(point.x, point.y)
    context.stroke()
  }
  context.globalAlpha = 1

  for (let turn = 0; turn < TURNS; turn++) {
    const nodeProgress = (turn + 0.84) / TURNS
    if (nodeProgress > t) continue
    const point = spiralPoint(nodeProgress)
    context.beginPath()
    context.fillStyle = tokens.synthesis
    context.shadowColor = tokens.synthesis
    context.shadowBlur = 14 * tokens.glow
    context.arc(point.x, point.y, 4.5, 0, TAU)
    context.fill()
    context.shadowBlur = 0
    context.fillStyle = tokens.ink
    context.globalAlpha = 0.82
    context.font = tokens.label
    context.textAlign = point.x < local.width / 2 ? "right" : "left"
    const offset = point.x < local.width / 2 ? -10 : 10
    context.fillText(TRIADS[turn].stage, point.x + offset, point.y + 4)
    context.globalAlpha = 1
  }

  if (t < 1) {
    const head = spiralPoint(t)
    const color = momentColor(momentAt(t))
    context.beginPath()
    context.fillStyle = color
    context.shadowColor = color
    context.shadowBlur = 22 * tokens.glow
    context.arc(head.x, head.y, 7, 0, TAU)
    context.fill()
    context.shadowBlur = 0
  } else {
    const apex = spiralPoint(1)
    context.beginPath()
    context.fillStyle = tokens.gold
    context.shadowColor = tokens.gold
    context.shadowBlur = 26 * tokens.glow
    context.arc(apex.x, apex.y, 9, 0, TAU)
    context.fill()
    context.shadowBlur = 0
    context.fillStyle = tokens.gold
    context.font = tokens.apexLabel
    context.textAlign = "center"
    context.fillText("Absolute Knowing", apex.x, apex.y - 18)
  }
}

function updateReadout() {
  const t = local.t
  const moment = momentAt(t)
  const triadIndex = Math.min(TURNS - 1, Math.floor(t * TURNS))
  const triad = TRIADS[triadIndex]
  const key = `${triadIndex}:${moment}`
  el.dataset.moment = moment

  if (metricAscent) metricAscent.textContent = Math.round(Math.min(1, t) * 100) + "%"
  if (positionInput && document.activeElement !== positionInput) {
    positionInput.value = String(Math.round(Math.min(1, t) * 1000))
  }
  if (local.readoutKey === key) return
  local.readoutKey = key

  const momentName =
    moment === "absolute" ? "Absolute" : moment[0].toUpperCase() + moment.slice(1)
  if (triadMoment) triadMoment.textContent = momentName
  if (triadStage) triadStage.textContent = triad.stage
  if (triadPair) triadPair.textContent = triad.pair
  if (triadDesc) triadDesc.textContent = triad.desc
  if (metricTurn) metricTurn.textContent = `${triadIndex + 1} / ${TURNS}`
  if (metricMoment) metricMoment.textContent = momentName
}

function render() {
  draw()
  updateReadout()
}

function setRunning(next) {
  local.running = Boolean(next) && local.t < 1
  el.dataset.running = local.running ? "true" : "false"
  toggle?.setAttribute("aria-pressed", local.running ? "true" : "false")
  if (toggleIcon) toggleIcon.textContent = local.running ? "Ⅱ" : "▶"
  if (toggleLabel) {
    toggleLabel.textContent = local.running ? "Pause the climb" : "Play the climb"
  }
  if (motionStatus) {
    motionStatus.textContent = local.running
      ? "Climbing · thesis, antithesis, synthesis"
      : local.t >= 1
        ? "Apex reached · step forward for Absolute Knowing"
        : "Paused · scrub to inspect"
  }
  if (local.running && local.presented && typeof local.schedule === "function") {
    local.schedule()
  }
}

function syncStage() {
  const current = state.get() || "observe"
  stageButtons.forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.dataset.spiralStage === current ? "true" : "false",
    )
  })

  if (local.stage !== current) {
    local.stage = current
    const target = STAGE_TARGETS[current]
    if (current === "observe") {
      local.t = prefersReducedMotion ? 1 : 0
      setRunning(!prefersReducedMotion)
    } else if (current === "climb") {
      if (local.manualHold) {
        setRunning(false)
      } else {
        if (local.t >= 1) local.t = 0
        setRunning(!prefersReducedMotion)
      }
    } else if (typeof target === "number") {
      local.t = target
      setRunning(false)
    }
    local.manualHold = false
  }

  render()
}

function moveToClimb() {
  if (state.get() !== "climb") {
    local.manualHold = true
    state.set("climb")
  }
}

stageButtons.forEach(function (button) {
  on(button, "click", function () {
    state.set(button.dataset.spiralStage)
  })
})

on(toggle, "click", function () {
  const current = state.get()
  if (current !== "observe" && current !== "climb") moveToClimb()
  if (local.t >= 1) local.t = 0
  setRunning(!local.running)
  render()
})

on(positionInput, "input", function () {
  moveToClimb()
  setRunning(false)
  local.t = Number(positionInput.value) / 1000
  render()
})

on(speedInput, "input", function () {
  local.speed = Number(speedInput.value)
  if (speedValue) speedValue.textContent = local.speed.toFixed(1) + "×"
})

on(reset, "click", function () {
  local.speed = 1
  if (speedInput) speedInput.value = "1"
  if (speedValue) speedValue.textContent = "1.0×"
  local.t = prefersReducedMotion ? 1 : 0
  if (state.get() !== "observe") {
    local.manualHold = false
    local.stage = null
    state.set("observe")
  } else {
    setRunning(!prefersReducedMotion)
    render()
  }
})

function resize() {
  if (!canvas || !sceneWrap) return
  const rect = sceneWrap.getBoundingClientRect()
  if (!rect.width || !rect.height) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  local.width = rect.width
  local.height = rect.height
  canvas.width = Math.round(rect.width * ratio)
  canvas.height = Math.round(rect.height * ratio)
  context?.setTransform(ratio, 0, 0, ratio, 0, 0)
  draw()
}

if (sceneWrap && typeof ResizeObserver === "function") {
  const observer = new ResizeObserver(resize)
  observer.observe(sceneWrap)
  ctx.cleanup(function () {
    observer.disconnect()
  })
}

if (typeof matchMedia === "function") {
  const scheme = matchMedia("(prefers-color-scheme: dark)")
  const onSchemeChange = function () {
    readTokens()
    draw()
  }
  scheme.addEventListener("change", onSchemeChange)
  ctx.cleanup(function () {
    scheme.removeEventListener("change", onSchemeChange)
  })
}

let focusAnimation
on(el, "pathmx:beat-enter", function (event) {
  if (event.target !== el) return
  readTokens()
  draw()
  if (!focusPulse || prefersReducedMotion) return
  if (typeof focusPulse.animate !== "function") return
  focusAnimation?.cancel()
  focusAnimation = focusPulse.animate(
    [
      { opacity: 0 },
      { opacity: 0.55, offset: 0.32 },
      { opacity: 0 },
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

readTokens()
state.on(syncStage)
resize()
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
        local.t = Math.min(1, local.t + (elapsed / CLIMB_DURATION) * local.speed)
      }
      lastTime = time
      if (Date.now() - local.tokensAt > 600) readTokens()
      render()
      if (local.t >= 1) {
        setRunning(false)
        return
      }
      schedule()
    }

    local.schedule = schedule
    readTokens()
    render()
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
