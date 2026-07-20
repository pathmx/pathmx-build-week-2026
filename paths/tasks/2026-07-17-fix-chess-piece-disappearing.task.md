---
type: task
status: done
owner: Mark
date: 2026-07-17
due: 2026-07-17
related:
  - ../labs/chess/index.demo.md
  - ../labs/chess/chess.components.md
  - ../labs/chess/chess-runtime.js
  - ../labs/chess/chess-board.css
  - ../labs/chess/chess-game.css
---

# Fix Chess Piece Disappearing During Moves

## Outcome

Fix the Chess lab regression where a piece disappears after moving, preserving
the upstream component behavior unless the current PathMX runtime needs a small
compatibility adjustment.

---

## Result

The interactive Chess Board now keeps moved piece images visible after legal
pointer moves. The fix keeps the existing `ctx.morph` path, but blurs an active
board square before morphing and restores focus afterward so the runtime does
not skip child reconciliation on the clicked `<button>`.

---

## Done When

- The interactive `<chess-board>` keeps moved pieces visible after legal moves.
- The `<chess-game>` replay keeps board pieces visible when stepping forward
  and backward through adjacent moves.
- The fix avoids new PathMX contracts and preserves keyboard/pointer behavior.
- A focused scratch build passes, and any skipped browser checks are recorded.

---

## Activity

- **2026-07-17:** Claimed the bug after confirming the local chess runtime,
  board CSS, game CSS, and component source match the upstream PathMX demo
  except for the local demo link.
- **2026-07-17:** Reproduced the bug in a browser against a scratch build: after
  `e2` to `e4`, the target square had `data-chess-piece="wp"` but no child
  piece image and the interactive board dropped to 31 piece images.
- **2026-07-17:** Patched the interactive board render path in
  [Chess Components](../labs/chess/chess.components.md). Browser verification
  against `http://127.0.0.1:4138/labs/chess/index.demo.html` confirmed `e2` to
  `e4` and `e7` to `e5` both leave 32 piece images, keep the moved piece image
  loaded, and restore focus to the moved-to square. Replay stepping to
  `1... e5` also kept 32 images and cleared transition markers. The static
  scratch server produced expected live-transport warnings only; no chess
  component errors appeared.
- **2026-07-17:** Verification passed:
  `pathmx build paths/labs/chess/index.demo.md -o .pathmx-chess-check --clean`,
  `pathmx build paths/labs/chess/index.demo.md -o .pathmx-check --clean`,
  `pathmx build -o .pathmx-check --clean` with the three known Tufte theme-token
  warnings, and `git diff --check`. Andrew review was skipped for this small
  local bug fix.
- **2026-07-17:** Reopened after deployed replay evidence showed
  `ctx.data.pieces.json()` can 404 for the component-scoped chess-game data
  artifact, leaving the replay board empty before PGN rendering starts.
- **2026-07-18:** Andrew's labs walkthrough found that the canonical Chess
  directory link and all three neighboring upstream helper links return 404.
  The local `/labs/chess` route, components, runtime, stylesheets, data, and
  assets remain intact, and built HTML preserves the GitHub URLs as external,
  so this is not a PathMX rewrite failure. Replace the three helper links with
  `./chess-runtime.js`, `./chess-board.css`, and `./chess-game.css`; remove or
  replace the canonical directory link until a public immutable Core target is
  verified. The broader visible external-link affordance is tracked in
  [Clarify Player Navigation And Link Affordances](./2026-07-18-clarify-player-navigation-and-link-affordances.task.md).
