---
title: Focus Beats
description: Minimal beat components — pause, breathe, think, timed focus — for pacing attention inside a learning flow.
---

# Focus Beats

Focus beats are punctuation for attention. Each component is a small
typographic mark a curriculum author drops between moves — a rest, a breath, a
held question, a timebox — so a lesson's pacing is authored, not accidental.

The family shares one design grammar:

- A beat is typographic, not a widget: no cards, no chrome, no dashboards.
  Whitespace and stillness carry most of the design.
- The Player does the pacing. Each beat is one component Beat; `beat-think` is
  the only one with ordered states, because holding a question before its
  continuation is a real learning stage.
- Timing and breathing are private interaction state, never Player-traversable
  steps. Skipping forward never walks a learner through animation phases.
- A beat never blocks forward movement, plays audio, scores, diagnoses, or
  records. All state is browser-local.
- Reduced motion swaps animation for immediate state changes and plain text.
  Without JavaScript, every beat renders as readable prose.

---

<!--
componentName: beat-pause
-->

# Beat: Pause

Use `<beat-pause>` as a deliberate rest — before a reveal, after a dense
passage, between an attempt and its answer. It renders as a centered asterism
of three dots over one quiet line of microcopy.

Props:

- `seconds` (optional): when set, the dots fill one by one across the duration
  while the beat is presented, giving the pause a felt length. Leaving the beat
  stops the timing; re-entering replays it.
- `label`: accessible name (default "Pause").

Failure boundary: without JavaScript the dots stay unlit and the microcopy
reads as an ordinary centered line. The pause never gates navigation.

## HTML

```html
<div class="beat-pause" role="note" aria-label="{{ label: Pause }}">
  <span class="beat-pause__marks" aria-hidden="true">
    <i></i><i></i><i></i>
  </span>
  <p class="beat-pause__text"><yield /></p>
</div>
```

## CSS

```css
:self {
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin-block: 3rem;
  text-align: center;
}

.beat-pause__marks {
  display: flex;
  gap: 0.6rem;
}

.beat-pause__marks i {
  inline-size: 0.33rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in oklch, var(--pmx-color-fg, #17211b) 32%, transparent);
  transition:
    background 400ms ease-out,
    transform 400ms ease-out;
}

.beat-pause__marks i[data-lit] {
  background: var(--pmx-color-accent, #0f766e);
  transform: scale(1.3);
}

.beat-pause__text {
  margin: 0;
  max-inline-size: 38ch;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.95rem;
  font-style: italic;
}

@media (prefers-reduced-motion: reduce) {
  .beat-pause__marks i {
    transition: none;
  }
}
```

## JavaScript

```js
const dots = $$(".beat-pause__marks i")
const seconds = Number(ctx.props.seconds)

if (Number.isFinite(seconds) && seconds > 0) {
  ctx.effect(
    function ({ signal }) {
      dots.forEach(function (dot) {
        delete dot.dataset.lit
      })
      const step = (seconds * 1000) / dots.length
      const timers = dots.map(function (dot, index) {
        return setTimeout(function () {
          if (!signal.aborted) dot.dataset.lit = "true"
        }, step * (index + 1))
      })
      return function () {
        timers.forEach(clearTimeout)
      }
    },
    { when: "presented" },
  )
}
```

---

<!--
componentName: beat-breathe
-->

# Beat: Breathe

Use `<beat-breathe>` before demanding work: a few slow breaths cued by one
small dot that swells and settles. It runs only while presented, finishes on
its own, and then stays settled for the rest of the session — backward
navigation does not restart it.

Props:

- `cycles`: breath cycles (default 3).
- `inhale` and `exhale`: phase seconds (defaults 4 and 6).
- `label`: accessible name (default "Breathe").

The yielded line is the author's caption; use it to set expectations ("Two
slow breaths before you commit to a number").

Failure boundary: without JavaScript the dot sits still over the caption.
Reduced-motion users get a plain-text instruction instead of the animation.

## HTML

```html
<div class="beat-breathe" aria-label="{{ label: Breathe }}">
  <span class="beat-breathe__dot" aria-hidden="true"></span>
  <p class="beat-breathe__word" data-word aria-live="polite">Breathe</p>
  <p class="beat-breathe__text"><yield /></p>
</div>
```

## CSS

```css
:self {
  display: grid;
  gap: 1.1rem;
  justify-items: center;
  margin-block: 3rem;
  text-align: center;
}

.beat-breathe__dot {
  inline-size: 0.85rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--pmx-color-accent, #0f766e);
  transform: scale(1);
  transition:
    transform var(--beat-breathe-seconds, 4s) ease-in-out,
    opacity 600ms ease-out;
}

:self[data-phase="in"] .beat-breathe__dot {
  transform: scale(2.1);
}

:self[data-phase="out"] .beat-breathe__dot {
  transform: scale(1);
}

:self[data-done="true"] .beat-breathe__dot {
  opacity: 0.45;
}

.beat-breathe__word {
  margin: 0;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

:self[data-done="true"] .beat-breathe__word {
  font-size: 0.95rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: normal;
  text-transform: none;
}

.beat-breathe__text {
  margin: 0;
  max-inline-size: 38ch;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.95rem;
  font-style: italic;
}

@media (prefers-reduced-motion: reduce) {
  .beat-breathe__dot {
    transition: none;
  }
}
```

## JavaScript

```js
const word = $("[data-word]")

function positiveProp(name, fallback) {
  const parsed = Number(ctx.props[name])
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

const inhale = positiveProp("inhale", 4)
const exhale = positiveProp("exhale", 6)
const cycles = Math.round(positiveProp("cycles", 3))
const reducedMotion =
  typeof globalThis.matchMedia === "function" &&
  globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches
const local = ctx.state(function () {
  return { done: false }
})

function settle(text) {
  local.done = true
  delete el.dataset.phase
  el.dataset.done = "true"
  word.textContent = text
}

if (reducedMotion) {
  settle(`Take ${cycles} slow breaths — in for ${inhale}, out for ${exhale}.`)
} else {
  ctx.effect(
    function ({ signal }) {
      if (local.done) {
        settle("Continue when you're ready.")
        return
      }
      let remaining = cycles
      let timer
      function phase(name) {
        if (signal.aborted) return
        el.dataset.phase = name
        el.style.setProperty(
          "--beat-breathe-seconds",
          `${name === "in" ? inhale : exhale}s`,
        )
        word.textContent = name === "in" ? "Breathe in" : "Breathe out"
        timer = setTimeout(
          function () {
            if (name === "in") {
              phase("out")
              return
            }
            remaining -= 1
            if (remaining <= 0) settle("Continue when you're ready.")
            else phase("in")
          },
          (name === "in" ? inhale : exhale) * 1000,
        )
      }
      phase("in")
      return function () {
        clearTimeout(timer)
      }
    },
    { when: "presented" },
  )
}
```

---

<!--
componentName: beat-think
-->

# Beat: Think

Use `<beat-think>` to hold a question before its continuation. The prompt and
the reveal are ordered component states, so in Play the held question is a real
Beat: the learner sits with it, and advancing uncovers the rest. In Browse a
small Reveal control does the same on the same state channel.

Props and children:

- `prompt`: the question to hold.
- children: the continuation revealed afterward.
- `cue`: the small label above the prompt (default "Think").
- `reveal`: the Browse control label (default "Reveal").

Failure boundary: without JavaScript the prompt and continuation are both
readable in order and the Reveal control stays hidden. Backward navigation
hides the continuation again, deterministically.

## HTML

```html
<section
  class="beat-think"
  states="hold | reveal"
  initial-state="hold"
  aria-label="{{ label: Think }}"
>
  <p class="beat-think__cue" aria-hidden="true">{{ cue: Think }}</p>
  <p class="beat-think__prompt">{{ prompt: Hold this question before moving on. }}</p>
  <div class="beat-think__answer" data-answer><yield /></div>
  <p class="beat-think__actions" data-actions hidden>
    <button type="button" data-reveal>{{ reveal: Reveal }}</button>
  </p>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 0.9rem;
  margin-block: 2.75rem;
}

.beat-think__cue {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.beat-think__cue::before {
  content: "";
  inline-size: 0.45rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--pmx-color-accent, #0f766e);
}

.beat-think__prompt {
  margin: 0;
  max-inline-size: 52ch;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.45;
}

.beat-think__answer {
  max-inline-size: 60ch;
}

.beat-think__answer > :first-child {
  margin-block-start: 0;
}

.beat-think__answer > :last-child {
  margin-block-end: 0;
}

.beat-think__actions {
  margin: 0;
}

:self button {
  min-block-size: 1.9rem;
  border: 1px solid color-mix(in oklch, var(--pmx-color-fg, #17211b) 25%, transparent);
  border-radius: 999px;
  background: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  padding-inline: 0.95rem;
}

:self button:focus-visible {
  outline: 2px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

@media (hover: hover) and (pointer: fine) {
  :self button:hover {
    border-color: var(--pmx-color-accent, #0f766e);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .beat-think__answer:not([hidden]) {
    animation: beat-think-reveal 240ms ease-out;
  }
}

@keyframes beat-think-reveal {
  from {
    opacity: 0;
    transform: translateY(0.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## JavaScript

```js
const answer = $("[data-answer]")
const actions = $("[data-actions]")
const reveal = $("[data-reveal]")

on(reveal, "click", function () {
  state.set("reveal")
})

function sync() {
  const revealed = state.get() === "reveal"
  answer.hidden = !revealed
  actions.hidden = revealed
}

state.on(sync)
sync()
```

---

<!--
componentName: beat-timer
-->

# Beat: Timer

Use `<beat-timer>` to timebox doing, not reading: a sketch, an estimate, a
recall attempt. It is learner-started, pausable, and quiet — one line of
prompt, a start control, a hairline of progress, and a plain "Time." when it
ends. It never auto-advances the lesson.

Props:

- `minutes`: length of the timebox (default 2; decimals allowed).
- `label`: accessible name (default "Timed focus").
- `cue`: the small label above the prompt (default "Focus").

Leaving the beat pauses the countdown; returning resumes from where it stopped.
Screen readers hear start, pause, and completion — not every tick.

Failure boundary: without JavaScript the prompt reads as prose with the
authored length shown, and the controls stay hidden.

## HTML

```html
<section class="beat-timer" data-state="ready" aria-label="{{ label: Timed focus }}">
  <p class="beat-timer__cue" aria-hidden="true">{{ cue: Focus }}</p>
  <div class="beat-timer__prompt"><yield /></div>
  <p class="beat-timer__row">
    <button type="button" data-toggle hidden>Start</button>
    <span class="beat-timer__time" data-time aria-hidden="true">{{ minutes: 2 }} min</span>
    <button type="button" data-reset hidden>Reset</button>
  </p>
  <span class="beat-timer__track" aria-hidden="true"><i data-fill></i></span>
  <p class="beat-timer__status" data-status role="status"></p>
</section>
```

## CSS

```css
:self {
  display: grid;
  gap: 0.9rem;
  margin-block: 2.75rem;
}

.beat-timer__cue {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.beat-timer__cue::before {
  content: "";
  inline-size: 0.45rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--pmx-color-accent, #0f766e);
}

.beat-timer__prompt {
  max-inline-size: 52ch;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.45;
}

.beat-timer__prompt > :first-child {
  margin-block-start: 0;
}

.beat-timer__prompt > :last-child {
  margin-block-end: 0;
}

.beat-timer__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
}

:self button {
  min-block-size: 1.9rem;
  border: 1px solid color-mix(in oklch, var(--pmx-color-fg, #17211b) 25%, transparent);
  border-radius: 999px;
  background: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  padding-inline: 0.95rem;
}

:self button:focus-visible {
  outline: 2px solid var(--pmx-color-focus, #b45309);
  outline-offset: 2px;
}

@media (hover: hover) and (pointer: fine) {
  :self button:hover {
    border-color: var(--pmx-color-accent, #0f766e);
  }
}

.beat-timer__time {
  color: var(--pmx-color-muted, #667069);
  font-size: 0.95rem;
  font-variant-numeric: tabular-nums;
  font-weight: 650;
}

.beat-timer__track {
  display: block;
  max-inline-size: 24rem;
  block-size: 2px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--pmx-color-fg, #17211b) 16%, transparent);
  overflow: hidden;
}

.beat-timer__track i {
  display: block;
  inline-size: 0%;
  block-size: 100%;
  background: var(--pmx-color-accent, #0f766e);
  transition: inline-size 1s linear;
}

:self[data-state="finished"] .beat-timer__track i {
  background: var(--pmx-color-focus, #b45309);
}

.beat-timer__status {
  min-block-size: 1.2em;
  margin: 0;
  color: var(--pmx-color-muted, #667069);
  font-size: 0.9rem;
  font-style: italic;
}

@media (prefers-reduced-motion: reduce) {
  .beat-timer__track i {
    transition: none;
  }
}
```

## JavaScript

```js
const toggle = $("[data-toggle]")
const reset = $("[data-reset]")
const time = $("[data-time]")
const fill = $("[data-fill]")
const statusLine = $("[data-status]")

function positiveProp(name, fallback) {
  const parsed = Number(ctx.props[name])
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

const total = Math.max(5, Math.round(positiveProp("minutes", 2) * 60))
const local = ctx.state(function () {
  return { remaining: total, running: false, finished: false }
})
let presented = false
let timer

function format(secondsLeft) {
  const m = Math.floor(secondsLeft / 60)
  const s = secondsLeft % 60
  return `${m}:${String(s).padStart(2, "0")}`
}

function stopTimer() {
  if (timer !== undefined) clearInterval(timer)
  timer = undefined
}

function render() {
  el.dataset.state = local.finished
    ? "finished"
    : local.running
      ? "running"
      : local.remaining === total
        ? "ready"
        : "paused"
  time.textContent = format(local.remaining)
  toggle.textContent = local.finished
    ? "Again"
    : local.running
      ? "Pause"
      : local.remaining === total
        ? "Start"
        : "Resume"
  reset.hidden = local.remaining === total && !local.finished
  fill.style.inlineSize = `${((total - local.remaining) / total) * 100}%`
}

function syncTimer() {
  stopTimer()
  if (presented && local.running && !local.finished) {
    timer = setInterval(tick, 1000)
  }
  render()
}

function tick() {
  if (local.remaining <= 1) {
    local.remaining = 0
    local.running = false
    local.finished = true
    statusLine.textContent = "Time. Continue when you're ready."
    syncTimer()
  } else {
    local.remaining -= 1
    render()
  }
}

function restart() {
  local.remaining = total
  local.running = false
  local.finished = false
  statusLine.textContent = ""
  syncTimer()
}

toggle.hidden = false
on(toggle, "click", function () {
  if (local.finished) {
    restart()
    local.running = true
    statusLine.textContent = "Timer running."
    syncTimer()
    return
  }
  local.running = !local.running
  statusLine.textContent = local.running ? "Timer running." : "Timer paused."
  syncTimer()
})

on(reset, "click", restart)

ctx.effect(
  function () {
    presented = true
    syncTimer()
    return function () {
      presented = false
      stopTimer()
    }
  },
  { when: "presented" },
)

render()
ctx.cleanup(stopTimer)
```
