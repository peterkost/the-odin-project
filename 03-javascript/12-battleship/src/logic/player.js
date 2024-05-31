import GameBoard from "./gameboard";
import { Coords } from "./types";

export default class Player {
  #attacked = new Set();

  #unAttacked = Array.from({ length: 10 }, (_, x) =>
    Array.from({ length: 10 }, (_, y) => [x, y]),
  ).flat();

  constructor(isComputer, mockShips = false) {
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
    if (mockShips) {
      this.#generateBoard();
    }
  }

  #generateBoard() {
    const shipCoords = [[Coords(0, 0), Coords(0, 1)]];

    shipCoords.forEach((coords) => this.gameBoard.place(coords[0], coords[1]));
  }

  getAttack() {
    if (this.#unAttacked.length === 0) {
      throw new Error("Out of attacks");
    }

    const randomIndex = Math.floor(Math.random() * this.#unAttacked.length);
    const coords = this.#unAttacked.splice(randomIndex, 1)[0];
    return Coords(coords[0], coords[1]);
  }
}
