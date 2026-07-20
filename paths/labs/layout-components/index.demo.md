---
title: Layout Demo
description: Composed examples for the shared layout primitives.
route: /labs/layout-components
---

[@layout]: ./layout.components.md
[@styles]: ./styles/layout-demo.css

# Layout Demo

<header class="layout-demo-intro">
  <p class="layout-demo-kicker">Shared primitives</p>
  <h2>Small layout components, composed into real page structures.</h2>
  <p>This demo exercises the shared layout primitives as author-facing building blocks: responsive grids, stacks, neutral boxes, centered content, and layered content.</p>
</header>

## What to copy

- Import the [layout component definitions](./layout.components.md) for
  `<box>`, `<hstack>`, `<vstack>`, `<zstack>`, `<grid>`, and `<center>`.
- Copy the
  [demo stylesheet](https://github.com/pathmx/pathmx/blob/94e34fb8/paths/demos/styles/layout-demo.css)
  only when reusing this lab's example cards and workspace presentation.

Minimum PathMX: `@fellowhumans/pathmx@0.1.9`.

Reviewed upstream commit:
[canonical Layout demo](https://github.com/pathmx/pathmx/blob/94e34fb8/paths/demos/layout.demo.md).

---

## Primitive Set

<div class="pmx-wide">
<grid cols="3" gap="4">
  <box tone="surface" border="subtle" rounded="lg" padding="4">
    <section class="layout-demo-card">
      <p class="layout-demo-label">box</p>
      <h3>Neutral frame</h3>
      <p>Padding, optional border, optional surface tone, and safe child sizing.</p>
    </section>
  </box>
  <box tone="surface" border="subtle" rounded="lg" padding="4">
    <section class="layout-demo-card">
      <p class="layout-demo-label">hstack / vstack</p>
      <h3>Directional rhythm</h3>
      <p>One gap value controls spacing while children keep stable sizing.</p>
    </section>
  </box>
  <box tone="surface" border="subtle" rounded="lg" padding="4">
    <section class="layout-demo-card">
      <p class="layout-demo-label">grid / center / zstack</p>
      <h3>Tracks and placement</h3>
      <p>Responsive columns, centered cells, and simple layered compositions.</p>
    </section>
  </box>
</grid>
</div>

---

## Responsive Workspace

<div class="pmx-wide">
<hstack gap="4" align="stretch">
  <aside class="layout-demo-sidebar">
    <p class="layout-demo-label">Sidebar</p>
    <h3>Build lane</h3>
    <p>The stack collapses on mobile and becomes a row on wider screens.</p>
    <div class="layout-demo-stack-list">
      <span><strong>Sources</strong><em>18</em></span>
      <span><strong>Components</strong><em>6</em></span>
      <span><strong>Routes</strong><em>11</em></span>
    </div>
  </aside>
  <main class="layout-demo-main">
    <p class="layout-demo-label">Main</p>
    <h3>Grid content can fill the remaining lane.</h3>
    <grid fit="auto" min="11rem" gap="3">
      <div class="layout-demo-token"><strong>1</strong><p>Load source graph</p></div>
      <div class="layout-demo-token"><strong>2</strong><p>Render blocks</p></div>
      <div class="layout-demo-token"><strong>3</strong><p>Emit routes</p></div>
      <div class="layout-demo-token"><strong>4</strong><p>Morph view</p></div>
    </grid>
  </main>
</hstack>
</div>

---

## Auto-Fit Grid

<div class="pmx-wide">
<grid fit="auto" min="13rem" gap="4">
  <figure class="layout-demo-palette">
    <div class="layout-demo-swatch" data-tone="accent"></div>
    <figcaption>Auto-fit lets repeated objects choose as many tracks as fit.</figcaption>
  </figure>
  <figure class="layout-demo-palette">
    <div class="layout-demo-swatch" data-tone="muted"></div>
    <figcaption>The same source collapses to a single column on narrow screens.</figcaption>
  </figure>
  <figure class="layout-demo-palette">
    <div class="layout-demo-swatch" data-tone="border"></div>
    <figcaption>Each child gets <code>min-inline-size: 0</code> from the grid.</figcaption>
  </figure>
  <figure class="layout-demo-palette">
    <div class="layout-demo-swatch" data-tone="accent"></div>
    <figcaption>Demo CSS owns visual styling; layout components own spatial behavior.</figcaption>
  </figure>
</grid>
</div>

---

## Placement

<div class="pmx-wide">
<grid cols="2" gap="4">
  <box tone="surface" border="subtle" rounded="lg" padding="4">
    <center min="14rem">
      <div class="layout-demo-center-target">
        <p class="layout-demo-label">center</p>
        <h3>Centered content</h3>
        <p>Useful for empty states, callouts, and fixed-format panels.</p>
      </div>
    </center>
  </box>
  <box tone="surface" border="subtle" rounded="lg" padding="4">
    <zstack>
      <div class="layout-demo-layer"></div>
      <span class="layout-demo-badge">zstack layer</span>
    </zstack>
  </box>
</grid>
</div>

---

## Authoring Notes

The layout components are deliberately small. They do not replace product components,
charts, cards, or app shells. They provide consistent spacing and responsive
composition so demos can stay readable while each domain-specific tag keeps its
own visual language.
