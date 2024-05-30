import Ship from "./ship";

const EMPTY = "~";
const HIT = "x";
const MISS = "m";

const SIZE = 10;

export { MISS, HIT };

export default class GameBoard {
  board = Array.from(Array(SIZE), () => new Array(SIZE).fill(EMPTY));
  #ships = new Map();
  #nextShipId = 0;

  place(start, end) {
    if (
      start.x < 0 ||
      start.x >= SIZE ||
      end.x < 0 ||
      end.x >= SIZE ||
      this.#isOverlapping(start, end)
    ) {
      return false;
    }

    if (start.x === end.x) {
      for (let i = start.y; i <= end.y; i++) {
        this.board[i][start.x] = this.#nextShipId;
      }
    } else {
      for (let i = start.x; i <= end.x; i++) {
        this.board[start.y][i] = this.#nextShipId;
      }
    }

    this.#ships.set(
      this.#nextShipId,
      new Ship(Math.max(end.x - start.x, end.y, start.y) + 1),
    );

    this.#nextShipId += 1;

    return true;
  }

  attack(coords) {
    if (this.#invalidCoords(coords)) {
      return false;
    }

    const tile = this.getTile(coords);
    if (isNaN(parseInt(tile))) {
      this.board[coords.y][coords.x] = MISS;
      return false;
    } else {
      this.board[coords.y][coords.x] = HIT;
      const ship = this.#ships.get(tile);
      ship.hit();
      if (ship.isSunk()) {
        this.#ships.delete(tile);
      }

      return true;
    }
  }

  getTile(coords) {
    return this.board[coords.y][coords.x];
  }

  areAllSunk() {
    return !this.#ships.size;
  }

  #invalidCoords(coords) {
    return coords.x < 0 || coords.x > SIZE || coords.y < 0 || coords.y > SIZE;
  }

  #isOverlapping(start, end) {
    if (start.x === end.x) {
      for (let i = start.y; i <= end.y; i++) {
        if (this.board[i][start.x] !== EMPTY) {
          return true;
        }
      }
    } else {
      for (let i = start.x; i <= end.x; i++) {
        if (this.board[start.y][i] !== EMPTY) {
          return true;
        }
      }
    }
    return false;
  }

  print() {
    console.log(this.board.map((row) => row.join(" ")).join("\n"));
  }
}
