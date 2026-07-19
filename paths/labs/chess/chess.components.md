# Chess Components

Demo: [Morphy Opera Game](./index.demo.md).

These components render chess positions and annotated games from normal chess
notation. Authors can show a static FEN position, enable local legal moves, or
replay a PGN with move-linked commentary.

The default pieces are the standard Cburnett SVG set vendored from Lichess. The
board, selection state, legal-move hints, and last-move hints are pure CSS. The
runtime uses chess.js for notation parsing and legal move checks; the components do
not hand-roll chess rule.

---

# Chess Board

`<chess-board>` renders a single position from FEN. Set `interactive="true"` to
allow local legal moves. The tag owns only ephemeral browser state; a page reload
returns to the authored position.

When `fen` is omitted, the board starts from the standard initial position.
Use `orientation="black"` to flip the board and `size` to control the rendered
width.

[@styles.board]: ./chess-board.css
[@script.runtime]: ./chess-runtime.js
[@data.pieces]: ./chess-pieces.json
[@asset.wp]: ./assets/pieces/cburnett/wP.svg
[@asset.wn]: ./assets/pieces/cburnett/wN.svg
[@asset.wb]: ./assets/pieces/cburnett/wB.svg
[@asset.wr]: ./assets/pieces/cburnett/wR.svg
[@asset.wq]: ./assets/pieces/cburnett/wQ.svg
[@asset.wk]: ./assets/pieces/cburnett/wK.svg
[@asset.bp]: ./assets/pieces/cburnett/bP.svg
[@asset.bn]: ./assets/pieces/cburnett/bN.svg
[@asset.bb]: ./assets/pieces/cburnett/bB.svg
[@asset.br]: ./assets/pieces/cburnett/bR.svg
[@asset.bq]: ./assets/pieces/cburnett/bQ.svg
[@asset.bk]: ./assets/pieces/cburnett/bK.svg

## HTML

```html
<figure
  class="pmx-chess-board-shell"
  data-chess-board-shell
  data-chess-fen="{{ fen: }}"
  data-chess-orientation="{{ orientation: white }}"
  data-chess-interactive="{{ interactive: false }}"
  style="--pmx-chess-size: {{ size: min(100%, 34rem) }}"
>
  <div class="pmx-chess-board-frame">
    <div
      class="pmx-chess-board"
      data-chess-board
      role="grid"
      aria-label="{{ label: Chess board }}"
    ></div>
  </div>
  <figcaption class="pmx-chess-caption">
    <strong>{{ title: Chess Position }}</strong>
    <span data-chess-status>Loading chess position</span>
  </figcaption>
</figure>
```

The bulky board styling lives in a local resource file. The small runtime
support file above loads chess.js and provides shared board helpers; the board
behavior itself stays here with the tag.

## JS

```js
const board = $("[data-chess-board]")
const status = $("[data-chess-status]")
const orientation = (el.dataset.chessOrientation || "white").toLowerCase()
const isInteractive = /^(true|yes|1)$/i.test(el.dataset.chessInteractive || "")
const assetMap = createChessAssetMap(ctx.assets)
const squares = getChessSquares(orientation)

function setStatus(message) {
  if (status) status.textContent = message
}

Promise.all([loadChessJs(), loadChessPieceNames(ctx)])
  .then(function ([module, pieceNames]) {
    const Chess = module.Chess
    let chess
    let selected = null
    let targets = []
    let lastMove = null

    try {
      chess = el.dataset.chessFen ? new Chess(el.dataset.chessFen) : new Chess()
    } catch (err) {
      setStatus("Invalid FEN: " + err.message)
      el.dataset.chessError = "true"
      return
    }

    const initialFocusEntry = squares.find(function (entry) {
      const piece = chess.get(entry.square)
      return piece && piece.color === chess.turn()
    })
    let focusedSquare = (initialFocusEntry || squares[0]).square

    function render() {
      const ownerDocument = board.ownerDocument || document
      const activeElement = ownerDocument.activeElement
      const shouldRestoreFocus =
        isInteractive &&
        activeElement &&
        board.contains(activeElement) &&
        typeof activeElement.blur === "function"
      if (shouldRestoreFocus) activeElement.blur()
      ctx.morph(
        board,
        createChessBoardFragment(
          ownerDocument,
          squares,
          chess,
          pieceNames,
          assetMap,
          {
            selected,
            targets,
            lastMove,
            interactive: isInteractive,
            focusedSquare,
          },
        ),
      )
      if (shouldRestoreFocus) focusSquare(focusedSquare)
    }

    function focusSquare(square) {
      focusedSquare = square
      Array.from(board.querySelectorAll("[data-square]")).forEach(
        function (candidate) {
          candidate.tabIndex = candidate.dataset.square === square ? 0 : -1
        },
      )
      const next = board.querySelector('[data-square="' + square + '"]')
      if (next) next.focus()
    }

    function select(square) {
      selected = square
      targets = chess.moves({ square, verbose: true }).map(function (move) {
        return move.to
      })
      setStatus("Selected " + square + ". Choose a legal target square.")
      render()
    }

    function clearSelection(message) {
      selected = null
      targets = []
      if (message) setStatus(message)
      render()
    }

    function moveTo(square) {
      const legal = chess
        .moves({ square: selected, verbose: true })
        .find(function (move) {
          return move.to === square
        })
      if (!legal) {
        const piece = chess.get(square)
        if (piece && piece.color === chess.turn()) select(square)
        else
          clearSelection(
            "Illegal move from " + selected + " to " + square + ".",
          )
        return
      }
      const move = chess.move({
        from: selected,
        to: square,
        promotion: legal.promotion || "q",
      })
      lastMove = { from: move.from, to: move.to }
      selected = null
      targets = []
      if (chess.isCheckmate()) setStatus(move.san + " played. Checkmate.")
      else if (chess.isCheck()) setStatus(move.san + " played. Check.")
      else
        setStatus(
          move.san +
            " played. " +
            (chess.turn() === "w" ? "White" : "Black") +
            " to move.",
        )
      render()
    }

    if (isInteractive) {
      on(board, "focusin", function (event) {
        const squareElement = event.target.closest("[data-square]")
        if (squareElement && board.contains(squareElement)) {
          focusedSquare = squareElement.dataset.square
        }
      })
      on(board, "keydown", function (event) {
        const direction = {
          ArrowLeft: [0, -1],
          ArrowRight: [0, 1],
          ArrowUp: [-1, 0],
          ArrowDown: [1, 0],
        }[event.key]
        if (!direction) return
        const squareElement = event.target.closest("[data-square]")
        if (!squareElement || !board.contains(squareElement)) return
        const index = squares.findIndex(function (entry) {
          return entry.square === squareElement.dataset.square
        })
        if (index === -1) return
        const row = Math.floor(index / 8)
        const column = index % 8
        const nextRow = Math.max(0, Math.min(7, row + direction[0]))
        const nextColumn = Math.max(0, Math.min(7, column + direction[1]))
        event.preventDefault()
        focusSquare(squares[nextRow * 8 + nextColumn].square)
      })
      on(board, "click", function (event) {
        const squareElement = event.target.closest("[data-square]")
        if (!squareElement || !board.contains(squareElement)) return
        const square = squareElement.dataset.square
        focusedSquare = square
        const piece = chess.get(square)
        if (!selected) {
          if (piece && piece.color === chess.turn()) select(square)
          else
            setStatus(
              "Choose a " +
                (chess.turn() === "w" ? "white" : "black") +
                " piece to move.",
            )
          return
        }
        if (selected === square) {
          clearSelection("Selection cleared.")
          return
        }
        moveTo(square)
      })
      setStatus(
        (chess.turn() === "w" ? "White" : "Black") +
          " to move. Choose a piece.",
      )
    } else {
      setStatus("Position loaded.")
    }

    render()
    el.dataset.chessReady = "true"
  })
  .catch(function (err) {
    setStatus("Could not load chess.js: " + err.message)
    el.dataset.chessError = "true"
  })
```

## Example

```html
<chess-board
  title="Interactive Starting Position"
  label="Interactive chess board from the standard starting position"
  interactive="true"
></chess-board>
```

**Result**

<chess-board
title="Interactive Starting Position"
label="Interactive chess board from the standard starting position"
interactive="true"

> </chess-board>

---

# Chess Note

`<chess-note>` stores authored analysis for a ply in a game. Inside
`<chess-game>`, notes are read from hidden yielded content and shown beside the
current move.

The note is also readable on its own, which keeps authored analysis plain in
source markdown and useful outside the game player.

## HTML

```html
<article class="pmx-chess-note" data-chess-note-ply="{{ ply: 0 }}">
  <h3>{{ title: Analysis note }}</h3>
  <div class="pmx-chess-note-body">
    <yield />
  </div>
</article>
```

## CSS

```css
:self {
  display: grid;
  gap: 0.35rem;
}

:self h3 {
  margin: 0;
  font-size: 1rem;
}

.pmx-chess-note-body > :first-child {
  margin-block-start: 0;
}

.pmx-chess-note-body > :last-child {
  margin-block-end: 0;
}
```

## Example

```html
<chess-note ply="7" title="4. dxe5">
  White gives up the center pawn to expose Black's awkward development.
</chess-note>
```

**Result**

<chess-note ply="7" title="4. dxe5">
  White gives up the center pawn to expose Black's awkward development.
</chess-note>

---

# Chess Game

`<chess-game>` replays a PGN held in a child `<template data-chess-pgn>`.
Nested `<chess-note ply="...">` entries provide move-linked commentary.

The game tag owns the reader controls, move list, board rendering, and note
selection. The source remains normal PGN plus authored notes, so the game can be
edited without touching JavaScript.

At narrow runtime widths, the board, controls, move list, and active note
compress into one Player-friendly column. The move list remains independently
scrollable so the current board and analysis stay legible without horizontal
overflow.

[@styles.game]: ./chess-game.css
[@script.runtime]: ./chess-runtime.js
[@data.pieces]: ./chess-pieces.json
[@asset.wp]: ./assets/pieces/cburnett/wP.svg
[@asset.wn]: ./assets/pieces/cburnett/wN.svg
[@asset.wb]: ./assets/pieces/cburnett/wB.svg
[@asset.wr]: ./assets/pieces/cburnett/wR.svg
[@asset.wq]: ./assets/pieces/cburnett/wQ.svg
[@asset.wk]: ./assets/pieces/cburnett/wK.svg
[@asset.bp]: ./assets/pieces/cburnett/bP.svg
[@asset.bn]: ./assets/pieces/cburnett/bN.svg
[@asset.bb]: ./assets/pieces/cburnett/bB.svg
[@asset.br]: ./assets/pieces/cburnett/bR.svg
[@asset.bq]: ./assets/pieces/cburnett/bQ.svg
[@asset.bk]: ./assets/pieces/cburnett/bK.svg

## HTML

```html
<section
  class="pmx-chess-game"
  data-chess-game
  data-chess-orientation="{{ orientation: white }}"
  data-chess-initial-ply="{{ initial-ply: 0 }}"
>
  <div class="pmx-chess-game-layout">
    <div class="pmx-chess-game-board-panel">
      <div class="pmx-chess-board-frame">
        <div
          class="pmx-chess-board"
          data-chess-board
          role="grid"
          aria-label="{{ label: Annotated chess game board }}"
        ></div>
      </div>
      <div class="pmx-chess-game-controls" aria-label="Chess game controls">
        <button type="button" data-chess-action="first">First</button>
        <button type="button" data-chess-action="prev">Prev</button>
        <button type="button" data-chess-action="next">Next</button>
        <button type="button" data-chess-action="last">Last</button>
      </div>
      <p class="pmx-chess-game-status">
        <strong data-chess-ply-label>Start</strong>
        <span data-chess-status>Loading chess game</span>
      </p>
    </div>
    <aside class="pmx-chess-game-analysis">
      <div class="pmx-chess-game-moves" data-chess-moves role="list"></div>
      <div class="pmx-chess-game-note" data-chess-note-panel>
        Select a move to see analysis.
      </div>
    </aside>
  </div>
  <div hidden data-chess-content>
    <yield />
  </div>
</section>
```

## Resources

The game uses the same support script, component-owned Cburnett piece assets, and
`@data.pieces` labels as `<chess-board>`. The reader behavior below stays in
the literate component source because it is the functional scope of the component.

## JS

```js
const board = $("[data-chess-board]")
const movesList = $("[data-chess-moves]")
const status = $("[data-chess-status]")
const plyLabel = $("[data-chess-ply-label]")
const notePanel = $("[data-chess-note-panel]")
const content = $("[data-chess-content]")
const orientation = (el.dataset.chessOrientation || "white").toLowerCase()
const initialPly = Number.parseInt(el.dataset.chessInitialPly || "0", 10) || 0
const assetMap = createChessAssetMap(ctx.assets)
const squares = getChessSquares(orientation)

function setStatus(message) {
  if (status) status.textContent = message
}

Promise.all([loadChessJs(), loadChessPieceNames(ctx)])
  .then(function ([module, pieceNames]) {
    const Chess = module.Chess
    const pgnElement = content && content.querySelector("[data-chess-pgn]")
    const pgn = getChessPayloadText(pgnElement).trim()
    const parser = new Chess()
    try {
      parser.loadPgn(pgn, { strict: false })
    } catch (err) {
      setStatus("Could not parse PGN: " + err.message)
      el.dataset.chessError = "true"
      return
    }

    const moves = parser.history({ verbose: true })
    const startFen = moves[0] ? moves[0].before : new Chess().fen()
    const positions = [{ fen: startFen }]
    moves.forEach(function (move) {
      positions.push({ fen: move.after, move })
    })

    const notes = Array.from(
      content ? content.querySelectorAll("[data-chess-note-ply]") : [],
    )
      .map(function (note) {
        return {
          ply:
            Number.parseInt(
              note.getAttribute("data-chess-note-ply") || "0",
              10,
            ) || 0,
          html: note.innerHTML,
        }
      })
      .sort(function (a, b) {
        return a.ply - b.ply
      })

    let ply = clampChessPly(initialPly, moves.length)
    let transitionSerial = 0
    const transitionScope = "pmx-chess-" + Math.random().toString(36).slice(2)

    function clearPieceTransition(name) {
      Array.from(board.querySelectorAll("[data-chess-piece-image]")).forEach(
        function (piece) {
          if (piece.style.viewTransitionName !== name) return
          piece.style.viewTransitionName = ""
          piece.style.viewTransitionClass = ""
          delete piece.dataset.chessTransitionPiece
        },
      )
    }

    function preparePieceTransition(targetPly) {
      const nextPly = clampChessPly(targetPly, moves.length)
      if (Math.abs(nextPly - ply) !== 1) return null
      const move = nextPly > ply ? moves[nextPly - 1] : moves[ply - 1]
      if (!move) return null
      const from = nextPly > ply ? move.from : move.to
      const to = nextPly > ply ? move.to : move.from
      const piece = board.querySelector(
        '[data-square="' + from + '"] [data-chess-piece-image]',
      )
      if (!piece || !piece.style) return null
      const name = transitionScope + "-piece-" + ++transitionSerial
      piece.style.viewTransitionName = name
      piece.style.viewTransitionClass = "pmx-chess-piece-move"
      piece.dataset.chessTransitionPiece = "true"
      return { name, to }
    }

    function renderBoard(options) {
      const position = positions[ply]
      const chess = new Chess(position.fen)
      const lastMove = ply > 0 ? moves[ply - 1] : null
      ctx.morph(
        board,
        createChessBoardFragment(
          board.ownerDocument || document,
          squares,
          chess,
          pieceNames,
          assetMap,
          {
            lastMove,
            pieceTransition: options && options.pieceTransition,
          },
        ),
      )
    }

    function renderMoves() {
      ctx.morph(
        movesList,
        createChessMovesFragment(
          movesList.ownerDocument || document,
          moves,
          ply,
        ),
      )
    }

    function renderNote() {
      const note = notes
        .filter(function (candidate) {
          return candidate.ply <= ply
        })
        .pop()
      ctx.morph(
        notePanel,
        note ? note.html : "<p>Select a move to see analysis.</p>",
      )
    }

    function render(options) {
      renderBoard(options)
      renderMoves()
      renderNote()
      if (plyLabel) plyLabel.textContent = formatChessMoveLabel(ply, moves)
      setStatus(
        ply === moves.length
          ? formatChessMoveLabel(ply, moves) + " is the final move."
          : moves.length - ply + " ply remaining.",
      )
    }

    function applyPly(nextPly, options) {
      const targetPly = clampChessPly(nextPly, moves.length)
      const pieceTransition =
        options && options.transition === false
          ? null
          : preparePieceTransition(targetPly)
      ply = targetPly
      const result = ctx.transition(
        function () {
          render({ pieceTransition })
        },
        { types: ["chess-ply"] },
      )
      if (pieceTransition && result.finished) {
        result.finished.then(
          function () {
            clearPieceTransition(pieceTransition.name)
          },
          function () {
            clearPieceTransition(pieceTransition.name)
          },
        )
      }
    }

    function requestPly(nextPly) {
      state.set("ply-" + clampChessPly(nextPly, moves.length))
    }

    function currentStatePly() {
      const current = state.get()
      const value =
        typeof current === "string" && current.startsWith("ply-")
          ? Number.parseInt(current.slice(4), 10)
          : Number.NaN
      return Number.isNaN(value) ? ply : value
    }

    // The Player mirrors these component-owned controls without taking over
    // chess state. Keeping both entries present makes 1/2 stable at the ends.
    function publishPlayerActions() {
      const currentPly = currentStatePly()
      ctx.play.actions.set([
        {
          id: "previous-move",
          label: "Previous move",
          disabled: currentPly === 0,
          run: function () {
            requestPly(currentStatePly() - 1)
          },
        },
        {
          id: "next-move",
          label: "Next move",
          disabled: currentPly === moves.length,
          run: function () {
            requestPly(currentStatePly() + 1)
          },
        },
      ])
    }

    // Literate state layer: the step domain only exists after parsing the
    // PGN, so the script declares it at init and play traverses it like any
    // declared sequence. play-grain="notes" curates the steps down to the
    // annotated moments; the default is every ply.
    const grain = (ctx.props["play-grain"] || "moves").toLowerCase()
    const stepPlies =
      grain === "notes"
        ? Array.from(
            new Set(
              [0].concat(
                notes.map(function (note) {
                  return note.ply
                }),
              ),
            ),
          ).sort(function (a, b) {
            return a - b
          })
        : Array.from({ length: moves.length + 1 }, function (_, index) {
            return index
          })
    state.declare(
      stepPlies.map(function (stepPly) {
        return {
          name: "ply-" + stepPly,
          label: formatChessMoveLabel(stepPly, moves),
        }
      }),
    )
    state.on(function (change) {
      const target = Number.parseInt(change.name.slice(4), 10)
      if (!Number.isNaN(target)) {
        applyPly(target)
        publishPlayerActions()
      }
    })

    const initialStateName = "ply-" + ply
    if (state.get() === initialStateName) {
      render()
      publishPlayerActions()
    }
    else state.set(initialStateName)

    on(el, "click", function (event) {
      const action = event.target.closest("[data-chess-action]")
      if (action && el.contains(action)) {
        if (action.dataset.chessAction === "first") requestPly(0)
        if (action.dataset.chessAction === "prev")
          requestPly(currentStatePly() - 1)
        if (action.dataset.chessAction === "next")
          requestPly(currentStatePly() + 1)
        if (action.dataset.chessAction === "last") requestPly(moves.length)
        return
      }

      const moveButton = event.target.closest("[data-ply]")
      if (moveButton && movesList.contains(moveButton)) {
        requestPly(Number.parseInt(moveButton.dataset.ply || "0", 10) || 0)
      }
    })

    el.dataset.chessGameReady = "true"
  })
  .catch(function (err) {
    setStatus("Could not load chess.js: " + err.message)
    el.dataset.chessError = "true"
  })
```

## Example

```html
<chess-game orientation="white" initial-ply="0">
  <template data-chess-pgn> 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 </template>

  <chess-note ply="0" title="Start">
    A short Ruy Lopez line begins from normal PGN.
  </chess-note>

  <chess-note ply="5" title="3. Bb5">
    White develops with pressure on the knight defending e5.
  </chess-note>
</chess-game>
```

**Result**

<chess-game orientation="white" initial-ply="0">
  <template data-chess-pgn>
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6
  </template>

  <chess-note ply="0" title="Start">
    A short Ruy Lopez line begins from normal PGN.
  </chess-note>

  <chess-note ply="5" title="3. Bb5">
    White develops with pressure on the knight defending e5.
  </chess-note>
</chess-game>
