const Move = function (x, y, p) {
  this.x = x;
  this.y = y;
  this.p = p;
};

const Board = (function () {
  const n = 3;
  const emptyChar = ".";

  const state = Array(n)
    .fill()
    .map(() => Array(n).fill(emptyChar));

  const isFull = () => !state.flat().includes(emptyChar);
  const isWinningMove = (move) => {
    const isMiddle =
      n % 2 === 1 && move.y === move.x && move.x === Math.floor(n / 2);
    const isTopLeftOrBotRightCorner =
      (move.y === 0 && move.x == 0) || (move.y === n - 1 && move.x === n - 1);
    const isTopRightOrBotLeftCorner =
      (move.y === 0 && move.x == n - 1) || (move.y === n - 1 && move.x === 0);

    // check vertical and horizontal
    let winVertical = (winHorizontal = true);
    let winSlopeDown = (winSlopeUp = false);
    for (let i = 0; i < n; i++) {
      if (state[i][move.x] !== move.p) {
        winVertical = false;
      }
      if (state[move.y][i] !== move.p) {
        winHorizontal = false;
      }
    }

    if (isTopLeftOrBotRightCorner || isMiddle) {
      winSlopeUp = true;
      for (let j = 0; j < n; j++) {
        if (state[j][j] !== move.p) {
          winSlopeUp = false;
        }
      }
    } else if (isTopRightOrBotLeftCorner || isMiddle) {
      winSlopeDown = true;
      for (let k = 0; k < n; k++) {
        if (state[k][n - k - 1] !== move.p) {
          winSlopeDown = false;
        }
      }
    }
    return winVertical || winHorizontal || winSlopeDown || winSlopeUp;
  };

  const makeMove = (move) => (state[move.y][move.x] = move.p);

  Object.prototype.toString = () =>
    state.map((row) => row.join(" ")).join("\n");

  const print = () => console.log(`${this}`);

  return { makeMove, print, isFull, isWinningMove };
})();

const Game = (function () {
  let isX = true;

  const makeMove = (move) => {
    Board.makeMove(move);
    DisplayController.updateSquare(move);
    if (Board.isFull()) {
      alert("The board is full, it's a tie!");
    }
    if (Board.isWinningMove(move)) {
      alert(`Player ${move.p} wins!`);
    }
  };

  const handleSquareClick = (e) => {
    if (e.target.innerHTML === "") {
      const [x, y] = e.target.id.split(",");
      const move = new Move(Number(x), Number(y), isX ? "X" : "O");
      isX = !isX;
      makeMove(move);
    }
  };

  return { handleSquareClick };
})();

const DisplayController = (function () {
  const squares = [...document.getElementsByClassName("square")];
  const squareMap = new Map(squares.map((square) => [square.id, square]));

  squares.forEach((square) =>
    square.addEventListener("click", Game.handleSquareClick),
  );

  const updateSquare = (move) => {
    const id = `${move.x},${move.y}`;
    const square = squareMap.get(id);
    console.log(square);
    square.innerHTML = move.p;
  };

  return { updateSquare };
})();
