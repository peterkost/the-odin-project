import GameBoard from "./gameboard";
import { Coords } from "./types";

export default class Player {
  #unAttacked = Array.from({ length: 10 }, (_, x) =>
    Array.from({ length: 10 }, (_, y) => [x, y]),
  ).flat();

  constructor(isComputer = false, mockShips = false) {
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
    if (mockShips) {
      this.randomlyPlaceShips();
    }
  }

  getAttack() {
    if (this.#unAttacked.length === 0) {
      throw new Error("Out of attacks");
    }

    const randomIndex = Math.floor(Math.random() * this.#unAttacked.length);
    const coords = this.#unAttacked.splice(randomIndex, 1)[0];
    return Coords(coords[0], coords[1]);
  }

  randomlyPlaceShips() {
    const sizes = [2, 3, 3, 4, 5];

    sizes.forEach((size) => {
      let placed = this.gameBoard.place(...this.#getCoordPairOfSize(size));
      while (!placed) {
        placed = this.gameBoard.place(...this.#getCoordPairOfSize(size));
      }
    });
  }

  #getCoordPairOfSize(size) {
    const horizontal = Math.random() > 0.5;

    const a = Math.floor(Math.random() * (10 - size));
    const b = Math.floor(Math.random() * 10);

    if (horizontal) {
      return [Coords(b, a), Coords(b, a + size - 1)];
    } else {
      return [Coords(a, b), Coords(a + size - 1, b)];
    }
  }
}
