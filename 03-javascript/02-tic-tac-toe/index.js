class Move {
  constructor(x, y, p) {
    this.x = x;
    this.y = y;
    this.p = p;
  }
}

class Board {
  constructor() {
    this.n = 3;
    this.emptyChar = ".";
    this.state = Array(this.n)
      .fill()
      .map(() => Array(this.n).fill(this.emptyChar));
  }

  reset() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.state[i][j] = this.emptyChar;
      }
    }
  }

  isFull() {
    return !this.state.flat().includes(this.emptyChar);
  }
  isWinningMove(move) {
    const isMiddle =
      this.n % 2 === 1 &&
      move.y === move.x &&
      move.x === Math.floor(this.n / 2);
    const isTopLeftOrBotRightCorner =
      (move.y === 0 && move.x == 0) ||
      (move.y === this.n - 1 && move.x === this.n - 1);
    const isTopRightOrBotLeftCorner =
      (move.y === 0 && move.x == this.n - 1) ||
      (move.y === this.n - 1 && move.x === 0);

    let winVertical, winHorizontal;
    winVertical = winHorizontal = true;
    let winSlopeDown, winSlopeUp;
    winSlopeDown = winSlopeUp = false;
    for (let i = 0; i < this.n; i++) {
      if (this.state[i][move.x] !== move.p) {
        winVertical = false;
      }
      if (this.state[move.y][i] !== move.p) {
        winHorizontal = false;
      }
    }

    if (isTopLeftOrBotRightCorner || isMiddle) {
      winSlopeUp = true;
      for (let j = 0; j < this.n; j++) {
        if (this.state[j][j] !== move.p) {
          winSlopeUp = false;
        }
      }
    } else if (isTopRightOrBotLeftCorner || isMiddle) {
      winSlopeDown = true;
      for (let k = 0; k < this.n; k++) {
        if (this.state[k][this.n - k - 1] !== move.p) {
          winSlopeDown = false;
        }
      }
    }
    return winVertical || winHorizontal || winSlopeDown || winSlopeUp;
  }

  makeMove(move) {
    this.state[move.y][move.x] = move.p;
  }

  toString() {
    state.map((row) => row.join(" ")).join("\n");
  }

  print() {
    console.log(`${this}`);
  }
}

const board = new Board();

class Game {
  constructor() {
    this.isX = true;
    this.elWinner = document.getElementById("winner");
    this.inProgress = false;
    this.startButton = document.getElementById("start-button");
  }

  start() {
    board.reset();
    display.reset();
    this.inProgress = true;
    this.startButton.innerHTML = "Restart";
    this.elWinner.innerHTML = "";
  }

  makeMove(move) {
    board.makeMove(move);
    display.updateSquare(move);
    if (board.isWinningMove(move)) {
      this.elWinner.innerHTML = `Player ${move.p} wins!`;
      this.inProgress = false;
    } else if (board.isFull()) {
      this.elWinner.innerHTML = "Tie!";
      this.inProgress = false;
    }
  }
}

const game = new Game();

class DisplayController {
  constructor() {
    const squares = [...document.getElementsByClassName("square")];
    this.squares = squares;
    this.squareMap = new Map(squares.map((square) => [square.id, square]));

    console.log(game.handleSquareClick);
    squares.forEach((square) =>
      square.addEventListener("click", this.handleSquareClick),
    );
  }

  reset() {
    this.squares.forEach((square) => (square.innerHTML = ""));
  }

  setPlayerName(e) {
    const name = prompt(`Enter ${e.target.innerHTML.trim()}'s new name`);

    e.target.innerHTML = name ? name : e.target.innerHTML;
  }

  updateSquare(move) {
    const id = `${move.x},${move.y}`;
    const square = this.squareMap.get(id);
    square.innerHTML = move.p;
  }

  handleSquareClick(e) {
    if (game.inProgress && e.target.innerHTML === "") {
      const [x, y] = e.target.id.split(",");
      const move = new Move(Number(x), Number(y), game.isX ? "X" : "O");
      game.isX = !game.isX;
      game.makeMove(move);
    }
  }
}

const display = new DisplayController();
