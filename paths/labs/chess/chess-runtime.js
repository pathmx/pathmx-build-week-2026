const CHESS_JS_URL =
  "https://cdn.jsdelivr.net/npm/chess.js@1.4.0/dist/esm/chess.js"

function loadChessJs() {
  return import(CHESS_JS_URL)
}

function createChessAssetMap(assets) {
  return Object.fromEntries(
    Object.entries(assets || {}).map(function ([key, asset]) {
      return [key, asset.url]
    }),
  )
}

function getChessSquares(orientation) {
  const files =
    orientation === "black"
      ? ["h", "g", "f", "e", "d", "c", "b", "a"]
      : ["a", "b", "c", "d", "e", "f", "g", "h"]
  const ranks =
    orientation === "black"
      ? ["1", "2", "3", "4", "5", "6", "7", "8"]
      : ["8", "7", "6", "5", "4", "3", "2", "1"]
  const squares = []
  ranks.forEach(function (rank, rankIndex) {
    files.forEach(function (file, fileIndex) {
      squares.push({
        square: file + rank,
        file,
        rank,
        fileIndex,
        rankIndex,
      })
    })
  })
  return squares
}

function chessSquareColor(square) {
  const file = square.charCodeAt(0) - 97
  const rank = Number(square.slice(1)) - 1
  return (file + rank) % 2 === 0 ? "dark" : "light"
}

function chessPieceKey(piece) {
  return piece.color + piece.type
}

function createChessBoardFragment(
  document,
  squares,
  chess,
  pieceNames,
  assetMap,
  options,
) {
  const selected = options && options.selected
  const targets = (options && options.targets) || []
  const lastMove = options && options.lastMove
  const pieceTransition = options && options.pieceTransition
  const interactive = Boolean(options && options.interactive)
  const focusedSquare = options && options.focusedSquare
  const fragment = document.createDocumentFragment()

  squares.forEach(function (entry) {
    const piece = chess.get(entry.square)
    const square = document.createElement(interactive ? "button" : "div")
    if (interactive) {
      square.type = "button"
      square.tabIndex = entry.square === focusedSquare ? 0 : -1
    }
    square.className = "pmx-chess-square"
    square.dataset.square = entry.square
    square.dataset.chessSquare = entry.square
    square.dataset.squareColor = chessSquareColor(entry.square)
    if (entry.fileIndex === 0) square.dataset.rankLabel = entry.rank
    if (entry.rankIndex === 7) square.dataset.fileLabel = entry.file
    if (selected === entry.square) square.dataset.selected = "true"
    if (targets.indexOf(entry.square) !== -1) square.dataset.target = "true"
    if (
      lastMove &&
      (lastMove.from === entry.square || lastMove.to === entry.square)
    ) {
      square.dataset.lastMove = "true"
    }
    square.setAttribute("role", "gridcell")
    square.setAttribute(
      "aria-label",
      piece
        ? entry.square + ", " + pieceNames[chessPieceKey(piece)]
        : entry.square + ", empty",
    )
    if (piece) {
      const img = document.createElement("img")
      const key = chessPieceKey(piece)
      square.dataset.chessPiece = key
      img.className = "pmx-chess-piece"
      img.dataset.chessPieceImage = key
      img.src = assetMap[key]
      img.alt = pieceNames[key]
      if (pieceTransition && pieceTransition.to === entry.square) {
        img.style.viewTransitionName = pieceTransition.name
        img.style.viewTransitionClass = "pmx-chess-piece-move"
        img.dataset.chessTransitionPiece = "true"
      }
      square.appendChild(img)
    }
    fragment.appendChild(square)
  })

  return fragment
}

function createChessMovesFragment(document, moves, ply) {
  const fragment = document.createDocumentFragment()

  moves.forEach(function (move, index) {
    const movePly = index + 1
    if (move.color === "w") {
      const number = document.createElement("span")
      number.className = "pmx-chess-move-number"
      number.textContent = Math.ceil(movePly / 2) + "."
      fragment.appendChild(number)
    } else if (index === 0) {
      fragment.appendChild(document.createElement("span"))
    }

    const button = document.createElement("button")
    button.type = "button"
    button.textContent = move.san
    button.dataset.ply = String(movePly)
    button.dataset.chessGameMove = "true"
    button.dataset.san = move.san
    button.setAttribute("role", "listitem")
    button.setAttribute("aria-label", formatChessMoveLabel(movePly, moves))
    if (movePly === ply) {
      button.setAttribute("aria-current", "true")
      button.dataset.current = "true"
    }
    fragment.appendChild(button)
  })

  return fragment
}

function formatChessMoveLabel(ply, moves) {
  if (ply <= 0) return "Starting position"
  const move = moves[ply - 1]
  const number = Math.ceil(ply / 2)
  return (move.color === "w" ? number + ". " : number + "... ") + move.san
}

function clampChessPly(value, max) {
  return Math.max(0, Math.min(max, value))
}

function getChessPayloadText(element) {
  if (!element) return ""
  if (element.content && typeof element.content.textContent === "string") {
    return element.content.textContent
  }
  return element.textContent || ""
}
