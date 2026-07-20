---
title: Tufte-Inspired Theme
description: A source-local PathMX article theme with calm typography, sidenotes, integrated figures, booktabs tables, and responsive print-aware CSS.
route: /labs/tufte-theme
theme:
  color:
    bg: "#fffff8"
    fg: "#111111"
    muted: "#5f5c54"
    surface: "#f4f1e8"
    link: "#111111"
    accent: "#9c2f24"
    border: "#cbc7bb"
    focus: "#9c2f24"
  font:
    body: 'Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif'
    heading: 'Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif'
    mono: 'Consolas, "Liberation Mono", Menlo, monospace'
  prose:
    width: 78rem
    lineHeight: 1.58
    blockGap: 1.15rem
  dark:
    color:
      bg: "#151513"
      fg: "#ece9df"
      muted: "#b7b1a4"
      surface: "#201f1b"
      link: "#ece9df"
      accent: "#e38b78"
      border: "#4a473f"
      focus: "#f0a18e"
---

[@styles]: ./styles/tufte-theme.css

# Tufte-Inspired PathMX

<p class="tufte-subtitle">A source-local essay theme for evidence, explanation, and the useful edge of the page</p>

<p class="tufte-byline">PathMX demo · July 2026</p>

<aside class="tufte-source-note">
  <strong>What to copy.</strong> The
  <a href="https://github.com/pathmx/pathmx/blob/da752ad5/paths/demos/tufte-theme/index.demo.md">landing Source</a>
  contains the theme tokens and responsive sidenote markup; the
  <a href="https://github.com/pathmx/pathmx/blob/da752ad5/paths/demos/tufte-theme/styles/tufte-theme.css">scoped stylesheet</a>
  owns the editorial
  presentation. Minimum PathMX: <code>@fellowhumans/pathmx@0.1.9</code>.
  Reviewed upstream commit: <a href="https://github.com/pathmx/pathmx/tree/da752ad5/paths/demos/tufte-theme">canonical Tufte theme demo</a>.
</aside>

This demo adapts ideas from [Tufte CSS](https://edwardtufte.github.io/tufte-css/):
quiet typography, a generous margin, and graphics kept close to the argument.
It is an authored stylesheet—not a new runtime preset.

---

## The measure of a good reading surface

<span class="tufte-newthought">A document theme should clarify relationships</span>
before it announces its own personality. The main column is deliberately
narrow enough to scan without effort.<label for="sn-measure" class="tufte-margin-toggle tufte-sidenote-number" aria-label="Show sidenote about the reading measure"></label><input id="sn-measure" class="tufte-margin-toggle-input" type="checkbox"><span class="tufte-sidenote">The wide canvas is not wasted space. It keeps supporting evidence adjacent to the sentence that needs it.</span>
The surrounding margin remains available for qualifications, citations, and
small pieces of evidence.

On a wide screen, this note sits beside the text.<label for="mn-web" class="tufte-margin-toggle tufte-margin-symbol" aria-label="Show margin note">⊕</label><input id="mn-web" class="tufte-margin-toggle-input" type="checkbox"><span class="tufte-marginnote">The web is not a printed page. On smaller screens, the note becomes a reader-controlled disclosure rather than a permanently narrow second column.</span>
On a phone or narrow Player pane, use the numbered marker or ⊕ symbol to reveal
the same note in the reading flow.

<div class="tufte-epigraph">
  <blockquote>
    <p>Good display is not decoration applied after thinking. It is part of how the reader discovers the structure of the thought.</p>
    <footer>Design premise for this demo</footer>
  </blockquote>
  <blockquote>
    <p>Use the margin for context that matters, but should not interrupt the sentence carrying the argument.</p>
    <footer>PathMX authoring principle</footer>
  </blockquote>
</div>

---

## Keep evidence next to the claim

The small chart below stays in the same block as its explanation. Its strongest
signal is the direct label at the end of each line, not a detached legend.

<figure class="tufte-figure tufte-figure-wide">
  <svg viewBox="0 0 960 420" role="img" aria-labelledby="tufte-chart-title tufte-chart-desc">
    <title id="tufte-chart-title">Reading completion across four document revisions</title>
    <desc id="tufte-chart-desc">A direct-labeled line chart. The evidence-nearby version rises from 54 to 83 percent while the detached-notes version rises from 52 to 60 percent.</desc>
    <g class="tufte-chart-grid" aria-hidden="true">
      <line x1="92" y1="332" x2="780" y2="332" />
      <line x1="92" y1="240" x2="780" y2="240" />
      <line x1="92" y1="148" x2="780" y2="148" />
      <line x1="92" y1="56" x2="780" y2="56" />
    </g>
    <g class="tufte-chart-axis" aria-hidden="true">
      <text x="30" y="338">40%</text>
      <text x="30" y="246">55%</text>
      <text x="30" y="154">70%</text>
      <text x="30" y="62">85%</text>
      <text x="92" y="382">Draft 1</text>
      <text x="300" y="382">Draft 2</text>
      <text x="508" y="382">Draft 3</text>
      <text x="716" y="382">Draft 4</text>
    </g>
    <polyline class="tufte-chart-line tufte-chart-line-strong" points="92,246 300,203 508,129 716,68" />
    <polyline class="tufte-chart-line tufte-chart-line-muted" points="92,264 300,252 508,234 716,215" />
    <g class="tufte-chart-labels" aria-hidden="true">
      <text class="tufte-chart-label-strong" x="746" y="73">evidence nearby · 83%</text>
      <text x="746" y="220">detached notes · 60%</text>
    </g>
  </svg>
  <figcaption><strong>Figure 1.</strong> Synthetic review data for demonstrating an integrated figure. The chart is inline SVG, so it remains sharp and inherits the document palette.</figcaption>
</figure>

<label for="mn-chart" class="tufte-margin-toggle tufte-margin-symbol" aria-label="Show chart margin note">⊕</label><input id="mn-chart" class="tufte-margin-toggle-input" type="checkbox"><span class="tufte-marginnote tufte-figure-note">Direct labels reduce eye travel. The two lines can be compared without bouncing between the evidence and a color key.</span>

The values are synthetic, but the presentation pressure is real: a PathMX
source may need prose, evidence, and an aside to read as one composed thought.

---

## Tables, links, and code should stay quiet

The theme treats ordinary Markdown as the primary interface. Tables use strong
rules at the top and bottom, with a lighter rule under the header—the familiar
“booktabs” approach—rather than drawing a box around every value.

| Treatment       | Main measure | Margin behavior       | Small-screen behavior |
| --------------- | ------------ | --------------------- | --------------------- |
| Default prose   | 72 characters| Normal document flow  | Fluid                 |
| Tufte-inspired  | 55% canvas   | Notes beside the claim| Tap to disclose       |
| Full-width media| Whole canvas | Caption below         | Scales inline         |

Inline code such as `theme.prose.width` stays typographically distinct without
becoming a badge. Longer examples keep their own horizontal scrolling:

```yaml
theme:
  font:
    body: 'Palatino, "Palatino Linotype", Georgia, serif'
  prose:
    width: 78rem
    lineHeight: 1.58
```

Links keep the text color and use an underline because the sentence should
remain readable while the action stays unmistakable.<label for="sn-links" class="tufte-margin-toggle tufte-sidenote-number" aria-label="Show sidenote about link styling"></label><input id="sn-links" class="tufte-margin-toggle-input" type="checkbox"><span class="tufte-sidenote">Hover color alone is not enough: underlines remain visible for touch, keyboard, print, and readers who do not distinguish the accent color.</span>

---

## A useful experiment, not a universal answer

Tufte CSS describes itself as a starting point rather than a final design goal.
This demo takes the same stance. The stylesheet is scoped to this source and
uses the current PathMX theme tokens, document root, and block structure. It
does not add a new package, component dialect, or global style contract.

That makes it useful evidence that the runtime can remain quiet while authored
CSS gives a particular document a strong editorial voice.

<aside class="tufte-source-note">
  <strong>Source and attribution.</strong> This original PathMX adaptation is informed by the MIT-licensed <a href="https://github.com/edwardtufte/tufte-css">Tufte CSS project</a> and its public demonstration. It uses a local system-font stack rather than redistributing ET Book.
</aside>

[Back to the Build Week labs](../index.path.md)
