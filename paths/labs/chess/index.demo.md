---
title: Morphy Opera Game Chess Demo
description: A literate chess demo with a skeuomorphic board, standard SVG pieces, legal local moves, and annotated PGN playback.
route: /labs/chess
---

[@chess-components]: ./chess.components.md

<link rel="icon" href="./assets/pieces/cburnett/wK.svg?v=cburnett-20260521">

# Morphy Opera Game

Paris, 1858. Paul Morphy against the Duke of Brunswick and Count Isouard.
Try the open board, then step the annotated replay.

<div class="pmx-wide">
<chess-board
  title="Interactive Starting Position"
  label="Interactive chess board from the standard starting position"
  interactive="true"
></chess-board>
</div>

<div class="pmx-wide">
<chess-board
  title="After 10. Nxb5"
  label="Morphy Opera Game position after ten white moves"
  fen="r2qkb1r/p3npbp/3p1np1/1Bp1P1B1/4P3/1Q3N2/PPP2PPP/RN2K2R b KQkq - 0 10"
></chess-board>
</div>

## Annotated Replay

<chess-game orientation="white" initial-ply="0">
  <template data-chess-pgn>
[Event "A Night at the Opera"]
[Site "Paris FRA"]
[Date "1858.??.??"]
[Round "?"]
[White "Paul Morphy"]
[Black "Duke Karl / Count Isouard"]
[Result "1-0"]
1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5
6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5
11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6
15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0
  </template>

  <chess-note ply="0" title="The classic teaching game">
    Morphy develops quickly, opens lines, and treats every move as a demand on
    Black's overloaded king.
  </chess-note>

  <chess-note ply="7" title="4. dxe5">
    White gives up the center pawn to expose Black's awkward development. The
    queen will recapture on f3 and keep pressure on b7 and f7.
  </chess-note>

  <chess-note ply="13" title="7. Qb3">
    The queen hits b7 and f7 at the same time. Black chooses defense with
    `Qe7`, but that blocks natural development and leaves the king in the
    center.
  </chess-note>

  <chess-note ply="19" title="10. Nxb5">
    Morphy sacrifices material to rip open lines. The point is not the knight;
    it is the time Black spends taking it while White's pieces arrive first.
  </chess-note>

  <chess-note ply="24" title="12. O-O-O">
    Castling queenside is also an attacking move. The rook lands on d1 and
    joins the pressure against the pinned d-file.
  </chess-note>

  <chess-note ply="29" title="15. Bxd7+">
    The final deflection begins. White removes the defender and keeps pulling
    Black's pieces away from the back rank.
  </chess-note>

  <chess-note ply="33" title="17. Rd8#">
    The rook reaches d8 with mate.
  </chess-note>
</chess-game>
