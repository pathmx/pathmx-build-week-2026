---
title: Dialectic Spiral Components
description: A focus-aware canvas instrument for Hegel's dialectical spiral.
componentName: dialectic-spiral
---

# Dialectic Spiral Instrument

`<dialectic-spiral>` renders Hegel's dialectic as a climbing spiral: each of
six triads is one full turn, colored through its thesis, antithesis, and
synthesis moments. The spiral repeats but never returns — every turn resolves
higher and wider than the last, ending at a gold apex for Absolute Knowing.

The design is a native PathMX port of the
[Hegelian Spiral](https://hegelianspiral.pplx.app/) Perplexity artifact. The
original autoplays once and is watched; this version exposes the meaningful
stages as ordered, Play-traversable states, so stepping forward in the Player
*performs* a sublation instead of merely advancing a slide.

## Experience brief

- **Thesis:** make the dialectic felt as motion — circular (the repeating
  triad) and upward (each synthesis is richer than the position it resolves).
- **Arrival:** the spiral is already tracing its first turns; the readout
  names the current triad and moment before any control is touched.
- **Anti-targets:** not a passive screensaver, not a dark-only glow demo that
  ignores the reader's color scheme, not a control board that outweighs the
  spiral.
- **Arc:** watch the whole climb → freeze on a thesis → its negation → the
  sublation → play the six named triads → arrive at Absolute Knowing.
- **Protected invariants:** the spiral never closes into a circle; triad
  colors always cycle thesis → antithesis → synthesis; the readout always
  names what the leading edge is doing; reset restores the authored arrival.
- **Degradation order:** glow and label density reduce before geometry,
  readout, or controls; reduced motion arrives with the full spiral already
  drawn and scrubbing still live; no JavaScript leaves a labeled static
  spiral and prose.

The ordered state domain is the authored learning path. Trace progress,
playback speed, and play/pause status remain private browser-local state. The
component has no durable learner response.

The canvas reads its palette from the component's CSS custom properties at
draw time, so one drawing routine follows the document's light and dark
schemes. Script-owned controls begin disabled and become available only after
the model initializes.

[@styles.instrument]: ./dialectic-spiral.css
[@script.instrument]: ./dialectic-spiral.js

## HTML

```html
<section
  class="dialectic-spiral"
  data-dialectic-spiral
  states="{{ states: observe | thesis | antithesis | synthesis | climb | absolute }}"
  initial-state="{{ initialState: observe }}"
  aria-label="{{ label: Interactive model of Hegel's dialectical spiral }}"
>
  <header class="dialectic-spiral__header">
    <div>
      <p class="dialectic-spiral__eyebrow">Conceptual instrument · Hegel</p>
      <h2>Nothing returns unchanged.</h2>
    </div>
    <p class="dialectic-spiral__lede">
      Thought climbs by turning: a position, its negation, and a resolution
      that becomes the next position — one level higher.
    </p>
  </header>

  <nav class="dialectic-spiral__stages" aria-label="Learning stages">
    <button type="button" data-spiral-stage="observe" aria-pressed="false" disabled>
      <span>01</span> Observe
    </button>
    <button type="button" data-spiral-stage="thesis" aria-pressed="false" disabled>
      <span>02</span> Thesis
    </button>
    <button type="button" data-spiral-stage="antithesis" aria-pressed="false" disabled>
      <span>03</span> Antithesis
    </button>
    <button type="button" data-spiral-stage="synthesis" aria-pressed="false" disabled>
      <span>04</span> Synthesis
    </button>
    <button type="button" data-spiral-stage="climb" aria-pressed="false" disabled>
      <span>05</span> The climb
    </button>
    <button type="button" data-spiral-stage="absolute" aria-pressed="false" disabled>
      <span>06</span> Absolute
    </button>
  </nav>

  <div class="dialectic-spiral__instrument">
    <div class="dialectic-spiral__scene-wrap">
      <span class="dialectic-spiral__focus-pulse" data-focus-pulse aria-hidden="true"></span>
      <canvas
        class="dialectic-spiral__scene"
        data-spiral-canvas
        role="img"
        aria-label="A spiral climbing through six turns, each colored thesis, antithesis, then synthesis"
      ></canvas>
      <svg
        class="dialectic-spiral__static"
        data-spiral-static
        viewBox="0 0 720 520"
        role="img"
        aria-label="A static spiral of six widening turns rising to a gold apex labeled Absolute Knowing"
      >
        <line class="dialectic-spiral__static-axis" x1="360" y1="30" x2="360" y2="490" />
        <path
          class="dialectic-spiral__static-path"
          d="M360 456 L370 454 L380 452 L389 452 L397 452 L403 452 L406 454 L406 455 L403 457 L396 458 L386 459 L374 459 L360 457 L345 455 L330 451 L317 446 L306 440 L298 433 L294 425 L295 417 L300 409 L310 402 L324 396 L341 390 L360 387 L380 385 L399 384 L417 385 L431 388 L441 392 L446 397 L444 401 L437 406 L424 410 L406 412 L384 414 L360 413 L335 410 L311 405 L289 398 L272 389 L260 379 L255 368 L257 357 L266 346 L282 336 L304 327 L331 321 L360 317 L390 315 L419 316 L445 319 L465 325 L479 331 L485 339 L482 347 L471 355 L452 362 L426 366 L395 369 L360 368 L325 365 L291 359 L261 350 L237 338 L222 325 L215 311 L218 296 L232 282 L254 270 L284 259 L320 251 L360 247 L400 246 L439 248 L473 253 L500 261 L517 271 L525 282 L521 293 L505 304 L480 313 L446 320 L405 324 L360 324 L314 320 L271 312 L233 301 L203 287 L183 271 L176 254 L180 236 L197 219 L226 203 L264 191 L310 182 L360 177 L411 176 L459 180 L501 187 L534 198 L556 210 L564 225 L559 240 L540 253 L508 265 L465 274 L415 279 L360 279 L304 275 L251 266 L205 253 L169 236 L145 217 L136 196 L142 175 L163 155 L198 137 L245 123 L300 113 L360 107 L421 107 L479 111 L529 121 L568 134 L594 150 L604 168 L597 186 L574 202 L536 217 L485 228 L425 234 L360 235 L294 230 L231 220 L177 205 L134 186 L107 163 L96 139 L104 115 L129 92 L170 71 L225 55 L290 43 L360 37"
        />
        <g class="dialectic-spiral__static-nodes" aria-hidden="true">
          <circle cx="302" cy="408" r="5" /><circle cx="268" cy="344" r="5" />
          <circle cx="235" cy="280" r="5" /><circle cx="201" cy="216" r="5" />
          <circle cx="168" cy="152" r="5" /><circle cx="134" cy="88" r="5" />
        </g>
        <circle class="dialectic-spiral__static-apex" cx="360" cy="37" r="8" />
        <text class="dialectic-spiral__static-label" x="360" y="18" text-anchor="middle">
          Absolute Knowing
        </text>
      </svg>
      <p class="dialectic-spiral__motion-status">
        <span data-motion-indicator aria-hidden="true"></span>
        <span data-motion-status>Static model ready</span>
      </p>
    </div>

    <aside class="dialectic-spiral__readout" aria-label="Dialectic readout">
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="observe">
        <p class="dialectic-spiral__readout-kicker">Watch the whole argument</p>
        <h3>Thought climbs by turning.</h3>
        <p>Six turns, one motion. Every circuit ends higher and wider than it began.</p>
      </div>
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="thesis">
        <p class="dialectic-spiral__readout-kicker">Positing</p>
        <h3>A position appears whole.</h3>
        <p>The thesis states its world confidently — and quietly carries its own contradiction.</p>
      </div>
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="antithesis">
        <p class="dialectic-spiral__readout-kicker">Negation</p>
        <h3>The contradiction steps out.</h3>
        <p>What the thesis suppressed now stands against it. The tension is the engine, not a failure.</p>
      </div>
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="synthesis">
        <p class="dialectic-spiral__readout-kicker">Aufhebung</p>
        <h3>Cancelled. Preserved. Lifted.</h3>
        <p>The synthesis does all three at once — and immediately becomes the next thesis, one level up.</p>
      </div>
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="climb">
        <p class="dialectic-spiral__readout-kicker">The full ascent</p>
        <h3>Six triads, one spiral.</h3>
        <p>Play or scrub through the turns. The radius widens because each resolution is richer than the last.</p>
      </div>
      <div class="dialectic-spiral__stage-copy" data-spiral-copy="absolute">
        <p class="dialectic-spiral__readout-kicker">Absolute Knowing</p>
        <h3>The spiral comprehends itself.</h3>
        <p>Not a final fact, but thought at home with its own motion — the whole climb held in view.</p>
      </div>
      <div class="dialectic-spiral__stage-copy dialectic-spiral__stage-copy--fallback" data-spiral-fallback>
        <p class="dialectic-spiral__readout-kicker">Static model</p>
        <h3>A spiral, not a circle.</h3>
        <p>The triad repeats, but never returns to its starting point. Each turn resolves higher.</p>
      </div>

      <div class="dialectic-spiral__triad" aria-live="polite">
        <p class="dialectic-spiral__triad-stage">
          <span data-triad-moment>Thesis</span> · <span data-triad-stage>Logic of Being</span>
        </p>
        <p class="dialectic-spiral__triad-pair" data-triad-pair>Being → Nothing → Becoming</p>
        <p class="dialectic-spiral__triad-desc" data-triad-desc>
          Pure Being, stripped of every quality, proves indistinguishable from
          Nothing; their restlessness together is Becoming.
        </p>
      </div>

      <dl class="dialectic-spiral__metrics">
        <div>
          <dt>Turn</dt>
          <dd><output data-metric-turn>1 / 6</output></dd>
        </div>
        <div>
          <dt>Moment</dt>
          <dd><output data-metric-moment>Thesis</output></dd>
        </div>
        <div>
          <dt>Ascent</dt>
          <dd><output data-metric-ascent>0%</output></dd>
        </div>
      </dl>

      <ul class="dialectic-spiral__legend" role="list">
        <li data-legend-moment="thesis"><span aria-hidden="true"></span>Thesis</li>
        <li data-legend-moment="antithesis"><span aria-hidden="true"></span>Antithesis</li>
        <li data-legend-moment="synthesis"><span aria-hidden="true"></span>Synthesis</li>
      </ul>
    </aside>
  </div>

  <fieldset class="dialectic-spiral__controls">
    <legend>Spiral controls</legend>
    <button type="button" class="dialectic-spiral__toggle" data-spiral-toggle aria-pressed="false" disabled>
      <span data-toggle-icon aria-hidden="true">▶</span>
      <span data-toggle-label>Play the climb</span>
    </button>
    <label>
      <span>Position on the spiral</span>
      <input type="range" min="0" max="1000" step="1" value="0" data-spiral-position disabled />
    </label>
    <label>
      <span>Pace <output data-speed-value>1.0×</output></span>
      <input
        type="range"
        min="0.4"
        max="2"
        step="0.1"
        value="1"
        data-spiral-speed
        aria-label="Playback pace"
        disabled
      />
    </label>
    <button type="button" class="dialectic-spiral__reset" data-spiral-reset disabled>
      Reset instrument
    </button>
  </fieldset>

  <p class="dialectic-spiral__model-note">
    Model note: the spiral is a conceptual diagram, not a chronology — Hegel's
    sequence is logical, not temporal. One turn per triad; the six triads
    follow the traditional Logic → Phenomenology → System ordering.
  </p>
  <noscript>
    <p class="dialectic-spiral__noscript">
      Motion controls require JavaScript. The static spiral still shows the
      shape of the argument: six widening turns, each resolving higher, rising
      to Absolute Knowing.
    </p>
  </noscript>
</section>
```

## Interaction and failure behavior

- Stage buttons and Player steps share the component's ordered `state` value.
  Stepping the component Beat forward walks observe → thesis → antithesis →
  synthesis → climb → absolute, so the Play gesture itself enacts the
  dialectic's rhythm.
- Scrubbing position intentionally moves the component to `climb` and pauses,
  so the learner can inspect any moment; pressing play from a frozen stage
  also continues in `climb`.
- Reaching the apex while playing stops the trace and invites the forward
  step; it never sets the Player-visible state itself, so Play focus stays
  where the learner put it.
- A learner-chosen pace persists across stage changes within the instance;
  reset restores pace, position, and the `observe` arrival.
- The palette is read from CSS custom properties at draw time and refreshed on
  scheme changes, so the same canvas belongs to both light and dark documents.
- Animation is browser-local and runs only inside a `presented` effect;
  reduced-motion environments arrive with the full spiral drawn and paused,
  and may still scrub or explicitly play.
- A small Beat-entry cue runs on the component-owned element and cancels on
  exit. It does not move the component's focus geometry.
- Missing JavaScript hides the canvas and shows the labeled static spiral
  with inert, disabled controls and intact prose.
