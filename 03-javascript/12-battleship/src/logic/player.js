import GameBoard from "./gameboard";
import { Coords } from "./types";

export default class Player {
  constructor(isComputer, mockShips = false) {
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
    if (mockShips) {
      this.#generateBoard();
    }
  }

  #generateBoard() {
    const shipCoords = [
      [Coords(0, 0), Coords(0, 3)],
      [Coords(3, 3), Coords(3, 4)],
      [Coords(1, 8), Coords(6, 8)],
    ];

    shipCoords.forEach((coords) => this.gameBoard.place(coords[0], coords[1]));
  }
}
