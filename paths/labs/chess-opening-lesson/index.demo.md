---
type: lesson
title: Build Before You Attack
description: A beginner chess-opening lesson about the center, development, and king safety.
route: /labs/chess-opening-lesson
---

[@chess-components]: ../chess/chess.components.md

# Build Before You Attack

The opening is not a race to checkmate. It is the part of the game where you
make your pieces useful.

By the end of this lesson, you will be able to choose an opening move that does
at least one of three jobs:

1. influence the center;
2. develop a new piece; or
3. prepare your king for safety.

---

<!--
type: lesson
id: watch-a-sound-opening
title: Watch A Sound Opening Take Shape
-->

## Watch a sound opening take shape

Step through the position. Do not memorize the moves. Watch how each move makes
another piece easier to use.

---

<!--
type: lesson
id: replay-a-sound-opening
title: Replay A Sound Opening
-->

<chess-game
  orientation="white"
  initial-ply="0"
  label="Italian Game opening principles"
>
  <template data-chess-pgn>
[Event "Opening Principles"]
[Site "PathMX lesson"]
[Date "2026.07.19"]
[Round "?"]
[White "Learner"]
[Black "Guide"]
[Result "*"]
1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O *
  </template>

  <chess-note ply="0" title="Start with three jobs">
    White wants influence in the center, active pieces, and a safe king. A
    sound move should help at least one of those jobs.
  </chess-note>

  <chess-note ply="1" title="1. e4 — claim useful space">
    The e-pawn influences `d5` and `f5`. Moving it also opens lines for the
    queen and the bishop on `f1`.
  </chess-note>

  <chess-note ply="3" title="2. Nf3 — develop with a purpose">
    The knight leaves its starting square, attacks Black's e-pawn, and helps
    control the center. One move does several useful jobs.
  </chess-note>

  <chess-note ply="5" title="3. Bc4 — bring in another piece">
    The bishop joins the game instead of moving the knight twice. White now has
    cleared the squares needed to castle.
  </chess-note>

  <chess-note ply="7" title="4. O-O — make the king safer">
    Castling moves the king away from the center and brings the rook closer to
    the open files. King safety is part of development, not a separate chore.
  </chess-note>

  <chess-note ply="12" title="A position ready for a middlegame">
    Both sides influence the center, have developed pieces, and have castled.
    The opening did its job: the whole army can now participate.
  </chess-note>
</chess-game>

---

<!--
type: lesson
id: three-opening-jobs
title: Use Three Jobs, Not A Memorized Script
-->

## Use three jobs, not a memorized script

When you are unsure what to play, scan the position in this order:

1. **Center:** Can a pawn or piece influence `e4`, `d4`, `e5`, or `d5`?
2. **Development:** Can a knight or bishop leave its starting square and do
   something useful?
3. **King safety:** Can you clear the way to castle, or castle now?

A move does not need to satisfy all three. The strongest opening moves often
do more than one.

The warning sign is a move that does none of them—especially moving the same
piece again without a concrete reason.

---

<!--
type: practice
id: develop-one-new-piece
title: Develop One New Piece
-->

## Your move: develop one new piece

White has played `e4` and `Nf3`. Black has answered with `e5` and `Nc6`.

Select the white bishop on `f1`, then move it to `c4` or `b5`. Both moves bring
a new piece into the game while influencing the center.

---

<!--
type: practice
id: make-a-developing-move
title: Make A Developing Move
-->

<div class="pmx-wide">
<chess-board
  title="After 1. e4 e5 2. Nf3 Nc6"
  label="Interactive practice position with White to move"
  fen="r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3"
  interactive="true"
></chess-board>
</div>

---

<!--
type: reflection
id: inspect-your-developing-move
title: Inspect Your Developing Move
-->

## Inspect your developing move

After your move, name what changed: which squares does the bishop now
influence, and how did the move help White prepare to castle?

---

<!--
type: reflection
id: opening-decision-rule
title: Keep One Decision Rule
-->

## Keep one decision rule

Before an opening move, ask:

> Does this move improve the center, develop a new piece, or help my king
> become safe?

If the answer is “none of them,” pause. You may still have a tactical reason,
but now you know what that move must justify.

The goal is not to reproduce the Italian Game from memory. The goal is to
reach a position where your pieces can work together.
