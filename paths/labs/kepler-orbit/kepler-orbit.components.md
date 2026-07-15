---
title: Kepler Orbit Components
description: A focus-aware orbital field instrument for learning Kepler's second law.
componentName: kepler-orbit-instrument
---

# Kepler Orbit Instrument

`<kepler-orbit-instrument>` renders one mathematical model of an elliptical
orbit. Uniform time advances the planet through mean anomaly; the component
solves Kepler's equation to place the planet, so motion is faster near the Sun
and slower far away.

The ordered state domain is the authored learning path. Position,
eccentricity, animation time, and play/pause status remain private browser-local
state. The component has no durable learner response.

Without JavaScript, the template remains a labeled static orbit with a concise
explanation. Script-owned controls begin disabled and become available only
after the model initializes.

[@styles.instrument]: ./kepler-orbit.css
[@script.instrument]: ./kepler-orbit.js

## HTML

```html
<section
  class="kepler-orbit"
  data-kepler-orbit
  states="{{ states: observe | equal-time | near-sun | far-sun | explore }}"
  initial-state="{{ initialState: observe }}"
  aria-label="{{ label: Interactive model of Kepler's second law }}"
>
  <header class="kepler-orbit__header">
    <div>
      <p class="kepler-orbit__eyebrow">Orbital field instrument · 1609</p>
      <h2>Equal areas. Unequal speeds.</h2>
    </div>
    <p class="kepler-orbit__lede">
      Follow one planet through equal intervals of time. Distance changes;
      swept area does not.
    </p>
  </header>

  <nav class="kepler-orbit__stages" aria-label="Learning stages">
    <button type="button" data-orbit-stage="observe" aria-pressed="false" disabled>
      <span>01</span> Observe
    </button>
    <button type="button" data-orbit-stage="equal-time" aria-pressed="false" disabled>
      <span>02</span> Equal time
    </button>
    <button type="button" data-orbit-stage="near-sun" aria-pressed="false" disabled>
      <span>03</span> Near Sun
    </button>
    <button type="button" data-orbit-stage="far-sun" aria-pressed="false" disabled>
      <span>04</span> Far away
    </button>
    <button type="button" data-orbit-stage="explore" aria-pressed="false" disabled>
      <span>05</span> Explore
    </button>
  </nav>

  <div class="kepler-orbit__instrument">
    <div class="kepler-orbit__scene-wrap">
      <span class="kepler-orbit__focus-pulse" data-focus-pulse aria-hidden="true"></span>
      <svg
        class="kepler-orbit__scene"
        data-orbit-scene
        viewBox="0 0 960 560"
        role="img"
        aria-label="An elliptical orbit with the Sun at one focus and two equal-time swept areas"
      >
        <g class="kepler-orbit__stars" aria-hidden="true">
          <circle cx="72" cy="70" r="2" /><circle cx="156" cy="126" r="1.5" />
          <circle cx="248" cy="56" r="1" /><circle cx="354" cy="112" r="2" />
          <circle cx="454" cy="48" r="1.4" /><circle cx="566" cy="92" r="1" />
          <circle cx="692" cy="54" r="1.8" /><circle cx="816" cy="112" r="1.2" />
          <circle cx="890" cy="62" r="2" /><circle cx="108" cy="246" r="1" />
          <circle cx="238" cy="214" r="1.8" /><circle cx="326" cy="278" r="1" />
          <circle cx="760" cy="222" r="1.6" /><circle cx="868" cy="286" r="1" />
          <circle cx="84" cy="414" r="1.6" /><circle cx="188" cy="492" r="1" />
          <circle cx="302" cy="444" r="2" /><circle cx="416" cy="512" r="1.3" />
          <circle cx="536" cy="458" r="1" /><circle cx="654" cy="502" r="1.8" />
          <circle cx="770" cy="438" r="1" /><circle cx="886" cy="492" r="1.5" />
        </g>

        <line class="kepler-orbit__axis" x1="120" y1="280" x2="750" y2="280" />
        <ellipse
          class="kepler-orbit__path"
          data-orbit-path
          cx="445"
          cy="280"
          rx="250"
          ry="204"
        />
        <g class="kepler-orbit__time-marks" data-time-marks aria-hidden="true"></g>

        <path class="kepler-orbit__area kepler-orbit__area--near" data-near-area />
        <path class="kepler-orbit__area kepler-orbit__area--far" data-far-area />
        <path class="kepler-orbit__trail" data-orbit-trail />

        <g class="kepler-orbit__reference kepler-orbit__reference--far" data-far-reference>
          <circle r="11" />
          <text x="18" y="-25">slower · shorter arc</text>
        </g>
        <g class="kepler-orbit__reference kepler-orbit__reference--near" data-near-reference>
          <circle r="11" />
          <text x="-18" y="-25">faster · longer arc</text>
        </g>

        <g class="kepler-orbit__sun" transform="translate(590 280)" aria-hidden="true">
          <circle class="kepler-orbit__sun-ring kepler-orbit__sun-ring--outer" r="70" />
          <circle class="kepler-orbit__sun-ring" r="48" />
          <circle class="kepler-orbit__sun-core" r="28" />
        </g>

        <g class="kepler-orbit__planet" data-planet transform="translate(695 280)" aria-hidden="true">
          <circle class="kepler-orbit__planet-halo" r="21" />
          <circle class="kepler-orbit__planet-core" r="10" />
          <path class="kepler-orbit__velocity" data-velocity-vector d="M 0 0 L 0 -72" />
        </g>

        <g class="kepler-orbit__labels" aria-hidden="true">
          <text x="592" y="376">SUN · FOCUS</text>
          <text x="114" y="258">APHELION</text>
          <text x="706" y="258">PERIHELION</text>
        </g>
      </svg>

      <p class="kepler-orbit__motion-status" aria-live="polite">
        <span data-motion-indicator aria-hidden="true"></span>
        <span data-motion-status>Static model ready</span>
      </p>
    </div>

    <aside class="kepler-orbit__readout" aria-label="Orbit readout">
      <div class="kepler-orbit__stage-copy" data-orbit-copy="observe">
        <p class="kepler-orbit__readout-kicker">Watch the rhythm</p>
        <h3>The planet does not move like a clock hand.</h3>
        <p>Its time is steady. Its distance is not.</p>
      </div>
      <div class="kepler-orbit__stage-copy" data-orbit-copy="equal-time">
        <p class="kepler-orbit__readout-kicker">Same 28 days</p>
        <h3>Two coral sectors hold equal area.</h3>
        <p>The near-Sun arc must stretch farther to sweep the same area.</p>
      </div>
      <div class="kepler-orbit__stage-copy" data-orbit-copy="near-sun">
        <p class="kepler-orbit__readout-kicker">Perihelion</p>
        <h3>Close means fast.</h3>
        <p>Gravity turns the planet sharply while it covers a long arc.</p>
      </div>
      <div class="kepler-orbit__stage-copy" data-orbit-copy="far-sun">
        <p class="kepler-orbit__readout-kicker">Aphelion</p>
        <h3>Far means slow.</h3>
        <p>The same interval of time produces a much shorter arc.</p>
      </div>
      <div class="kepler-orbit__stage-copy" data-orbit-copy="explore">
        <p class="kepler-orbit__readout-kicker">Your instrument</p>
        <h3>Change the shape. Test the law.</h3>
        <p>Scrub time or increase eccentricity; equal times still sweep equal areas.</p>
      </div>
      <div class="kepler-orbit__stage-copy kepler-orbit__stage-copy--fallback" data-orbit-fallback>
        <p class="kepler-orbit__readout-kicker">Static model</p>
        <h3>One focus, one ellipse.</h3>
        <p>The planet moves fastest nearest the Sun and slowest farthest away.</p>
      </div>

      <dl class="kepler-orbit__metrics">
        <div>
          <dt>Distance</dt>
          <dd><output data-distance>0.42 AU</output></dd>
        </div>
        <div>
          <dt>Relative speed</dt>
          <dd><output data-speed>1.94×</output></dd>
        </div>
        <div>
          <dt>Orbit elapsed</dt>
          <dd><output data-orbit-time>0%</output></dd>
        </div>
      </dl>

      <div class="kepler-orbit__speed-scale" aria-hidden="true">
        <span data-speed-fill></span>
      </div>

      <p class="kepler-orbit__comparison">
        In equal time, the near-Sun arc is
        <strong data-arc-ratio>3.3×</strong> longer.
      </p>
    </aside>
  </div>

  <fieldset class="kepler-orbit__controls">
    <legend>Orbit controls</legend>
    <button type="button" class="kepler-orbit__toggle" data-orbit-toggle aria-pressed="false" disabled>
      <span data-toggle-icon aria-hidden="true">▶</span>
      <span data-toggle-label>Play orbit</span>
    </button>
    <label>
      <span>Position in orbit</span>
      <input type="range" min="0" max="1000" step="1" value="0" data-orbit-position disabled />
    </label>
    <label>
      <span>Orbit shape <output data-eccentricity>0.58</output></span>
      <input
        type="range"
        min="0.20"
        max="0.72"
        step="0.01"
        value="0.58"
        data-orbit-shape
        aria-label="Orbit eccentricity"
        disabled
      />
    </label>
    <button type="button" class="kepler-orbit__reset" data-orbit-reset disabled>
      Reset instrument
    </button>
  </fieldset>

  <p class="kepler-orbit__model-note">
    Model note: semi-major axis is fixed at 1 AU; orbital time advances uniformly.
    The visual solves Kepler's equation for each position.
  </p>
  <noscript>
    <p class="kepler-orbit__noscript">
      Motion controls require JavaScript. The static diagram still shows the Sun
      at one focus of the ellipse and the near/far orbital positions.
    </p>
  </noscript>
</section>
```

## Interaction and failure behavior

- Stage buttons and Player steps share the component's ordered `state` value.
- Scrubbing position or shape intentionally moves the component to `explore`.
- A learner-chosen orbit shape persists across stage changes within the current
  instance, so the equal-area comparison can be retested on that same ellipse.
- Visible component controls own the browser-local Play, scrub, and reset
  commands without depending on an optional Player Context Action bridge.
- Animation is browser-local and runs only inside a `presented` effect.
- Reduced-motion environments begin paused; the learner may still scrub or
  explicitly start the explanatory motion.
- A small Beat-entry cue runs on the component-owned element and cancels on
  exit. It does not move the component's focus geometry.
- Missing JavaScript leaves the labeled SVG and prose intact with inert,
  disabled controls.
