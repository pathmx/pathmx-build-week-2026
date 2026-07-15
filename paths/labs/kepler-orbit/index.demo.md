---
title: The Orbit Does Not Keep Time
description: A playable orbital field instrument for Kepler's second law.
route: /labs/kepler-orbit
theme:
  forceColorScheme: dark
  color:
    bg: "#071119"
    fg: "#F1F6F4"
    muted: "#9DB1B5"
    surface: "#0B1720"
    link: "#88E6D2"
    accent: "#FFB05C"
    border: "rgba(173, 213, 213, 0.22)"
    focus: "#88E6D2"
  measure: 90ch
---

[@kepler]: ./kepler-orbit.components.md
[@styles]: ./styles/kepler-orbit-demo.css

<p class="kepler-demo__kicker">A playable law of motion</p>

# The orbit does not keep time.

It keeps **area**. In equal intervals, the line from the Sun to a planet sweeps
equal regions of space—even though the planet travels very different distances.

<div class="kepler-demo__hero-mark" aria-hidden="true">
  <span></span><i></i><b></b>
</div>

---

<!--
type: experiment
id: equal-areas-unequal-speeds
title: Equal Areas, Unequal Speeds
-->

<p class="kepler-demo__kicker">Orbital field instrument</p>

# Equal areas. Unequal speeds.

Play the sequence, or use the instrument directly. Watch the coral time slices:
their shapes change, but their areas represent the same span of time.

<kepler-orbit-instrument />

---

<!--
type: explanation
id: read-the-motion
title: Read the Motion
-->

<p class="kepler-demo__kicker">Read the motion</p>

# What should your eye notice?

- **Near the Sun**, the planet crosses a longer arc during the same interval.
- **Far from the Sun**, it crosses a shorter arc—but the swept area stays equal.
- **More eccentric orbits** make the speed contrast easier to see.

---

<!--
type: reflection
id: carry-the-law
title: Carry the Law Forward
-->

<p class="kepler-demo__kicker">Kepler's second law</p>

# Gravity changes the pace, not the clock.

The useful invariant is not distance per day. It is **area per day**:

<p class="kepler-demo__equation"><span>area swept</span><b>÷</b><span>time elapsed</span><strong>= constant</strong></p>

That is why a planet accelerates toward perihelion and eases toward aphelion
without ever breaking the rhythm of its orbit.

[Back to the labs index](../index.path.md)
