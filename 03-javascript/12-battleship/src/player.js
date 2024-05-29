import GameBoard from "./gameboard";

export default class Player {
  constructor(isComputer) {
    this.isComputer = isComputer;
    this.gameBoard = new GameBoard();
  }
}
