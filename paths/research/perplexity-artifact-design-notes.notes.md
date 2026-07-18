---
type: research
status: draft
tags:
  - design
  - css
  - inspiration
related:
  - ./resources.path.md
  - ../labs/dialectic-spiral/index.demo.md
---

# Perplexity Artifact Design Notes

What the shared Perplexity generative artifacts do well, read from their
published sources, and which of those moves are worth borrowing for PathMX
labs, themes, and the starter. Source material: the five artifacts on the
[resources page](./resources.path.md) — Shape of the Day, Hegelian Spiral,
Burn Rate (The AI Bubble), Eggs, and Markdown→HTML.

---

## Observations: the shared design DNA

Across authorship and topic, the artifacts converge on one visual system:

- **Editorial serif + workhorse sans + mono for numbers.** Fraunces for
  display, Inter for body, JetBrains Mono for figures appears in both Shape
  of the Day and Burn Rate. Numbers always get `font-variant-numeric:
  tabular-nums` so live values don't jitter.
- **Warm, paper-like palettes instead of pure white/black.** Light modes sit
  on cream/parchment (`#f6f4ef`, `#f4efe6`); dark modes on warm near-blacks
  (`#15140f`, `#0e0c0a`) — never `#000`/`#fff`.
- **Full token systems even in throwaway artifacts.** Burn Rate declares a
  fluid `clamp()` type scale, a 4px spacing scale, radius and shadow scales,
  and a named transition curve (`200ms cubic-bezier(0.16, 1, 0.3, 1)`) before
  writing a single component rule.
- **Three-way scheme handling.** `[data-theme]` attribute, plus a
  `prefers-color-scheme` fallback for `:root:not([data-theme])`, so the page
  respects the system before the toggle is touched.
- **Modern color plumbing.** `oklch()` for shadows, `color-mix(in oklab, …)`
  for derived surfaces (e.g. an 85%-opaque blurred sticky header), and
  `oklch(from var(--color-primary) l c h / 0.35)` for a brand-tinted
  `::selection`.
- **A "live readout" pattern.** Every interactive artifact pairs its scene
  with a panel of small labeled values (dominant context, threads active,
  stage name) that update as you scrub — the scene shows, the readout names.
- **Playable time.** Play/pause plus a scrubber, with a pulsing "now" dot and
  value-flash keyframes when a reading changes. Motion is feedback, not
  decoration, and `prefers-reduced-motion` collapses it.
- **Craft details in the base layer.** `text-wrap: balance` on headings and
  `pretty` on prose, `hanging-punctuation`, `scroll-padding-top` matched to
  the sticky header, visible `:focus-visible` rings, and an `.sr-only`
  utility — even in single-page artifacts.

## Implications for PathMX

- **Already native, keep leaning on it:** PathMX theme tokens, `@dark` /
  `@light` component sugar, and the runtime's reduced-motion and focus
  defaults cover most of the artifacts' scaffolding with less code than they
  spend rebuilding it per page.
- **Worth adopting in our authored CSS now** (all exercised in the
  [Dialectic Spiral lab](../labs/dialectic-spiral/index.demo.md)):
  - `color-mix(in oklab, var(--pmx-color-fg) …, transparent)` for borders,
    wells, and tinted surfaces, so one rule serves both schemes;
  - the Fraunces/Inter editorial pairing via `fonts` + `theme.font`;
  - the scene-plus-readout layout and tabular-nums metrics for instruments;
  - scheme-aware canvas: read the palette from CSS custom properties at draw
    time instead of hard-coding colors in JS, so `<canvas>` obeys the theme;
  - uppercase mono kickers/eyebrows with tracked letter-spacing as the
    section voice.
- **Candidates for PathMX Core or the starter theme** (not authorable per-lab
  without repetition):
  - a brand-tinted `::selection` derived from the accent token;
  - `text-wrap: balance/pretty` defaults in prose styling if the runtime does
    not already set them;
  - a named ease token (e.g. `--pmx-ease-interactive`) so authored components
    stop inventing curves.
- **Anti-patterns to avoid copying:** Eggs ships a 25-family Google Fonts
  request for one page, and the dark-only artifacts (Hegelian Spiral) ignore
  the reader's scheme entirely — PathMX sources should keep both schemes
  unless a fixed environment is the point.

## Next question

Should the starter ship an "editorial instrument" preset (tokens + kicker,
readout, metrics, and legend-chip patterns) so future generated artifacts can
target it directly instead of re-deriving the system each time?
