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
  const play = () => {
    while (true) {
      const [x, y, p] = prompt("Input move (x y p): ")
        .split(" ")
        .map((e) => (isNaN(Number(e)) ? e : Number(e)));
      const move = new Move(x, y, p);
      Board.makeMove(move);
      if (Board.isFull()) {
        console.log("The board is full, it's a tie!");
        break;
      }
      if (Board.isWinningMove(move)) {
        console.log(`Player ${move.p} wins!`);
        break;
      }
      Board.print();
    }
  };

  return { play };
})();
