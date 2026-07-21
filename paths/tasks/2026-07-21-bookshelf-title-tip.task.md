---
type: task
status: done
owner: Mark
date: 2026-07-21
related:
  - ../labs/bookshelf/bookshelf.components.md
  - ../labs/bookshelf/index.demo.md
---

# Bookshelf Title Tip On Hover And Play

## Outcome

Books show a readable title card when hovered or when their Beat is active in
Play.

## Next Move

None — tip verified in Play on the first book Beat.

## Done When

- `<book>` shows a title tip on fine-pointer hover
- The same tip appears when `:self[data-pathmx-presentation-active]`
- Tips remain readable without Play and without JavaScript
- Player review confirms hover and Play Beat behavior on `/labs/bookshelf`

## Activity

- 2026-07-21: Claimed; wiring title tip to hover and presentation-active.
- 2026-07-21: Reserved tip headroom inside `.books-grid` so `overflow-x: auto`
  does not clip the card; paper tip styling for contrast on dark wood.
- 2026-07-21: Player Play review at
  `/labs/bookshelf?play=…#block:one-model-three-component-boundaries:step-2`
  showed the `I, Robot` tip at opacity 1 with lift and focus ring.

## Result

`<book>` now reveals a title tip on fine-pointer hover and whenever the book is
the active Play Beat. Shelf scroll padding keeps tips visible; no JS required.
