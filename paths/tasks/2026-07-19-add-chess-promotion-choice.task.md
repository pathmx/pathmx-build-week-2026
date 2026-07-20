---
type: task
status: done
owner: Andrew
date: 2026-07-19
due: 2026-07-20
related:
  - ../labs/chess/index.demo.md
  - ../labs/chess/chess.components.md
  - ../labs/chess-opening-lesson/index.demo.md
---

# Add An Explicit Chess Promotion Choice

## Outcome

Let a player promoting a pawn choose a queen, rook, bishop, or knight. If the
interaction must choose on the player's behalf, use a queen as the conventional
default rather than a knight.

---

## Next Move

Implement the choice in the canonical interactive `<chess-board>` component,
verify pointer, touch, and keyboard operation, then sync or graduate that
component anywhere it is reused rather than patching individual lessons.

---

## Done When

- A pawn reaching the last rank can be promoted to a queen, rook, bishop, or
  knight before the move is committed.
- The promotion control identifies the moving color and can be completed or
  dismissed with pointer, touch, and keyboard input without losing board focus.
- A no-choice or compatibility fallback promotes to a queen.
- `<chess-game>` replay still renders promotion moves from authored PGN without
  asking the viewer to choose again.
- The canonical demo and at least one importing lesson pass focused Browse,
  Play, narrow-viewport, and build checks.

---

## Activity

- **2026-07-19:** Andrew reported that an interactive pawn reaching the last
  rank becomes a knight without offering a promotion choice. Source review
  traced the behavior to `<chess-board>`: its move lookup selects the first
  legal move matching the destination square, and a promotion move already has
  a `promotion` value, so the later `"q"` fallback does not override that first
  variant. The issue belongs in the canonical interactive board once;
  `<chess-game>` is replay-only and receives the selected promotion from PGN.
