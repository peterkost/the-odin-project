import Player from "./player";
import Renderer from "../display/renderer";

export default class Game {
  user = new Player(false, true);
  computer = new Player(true, true);
  userTurn = true;
  renderer = new Renderer();

  #handleClick(coords) {
    this.computer.gameBoard.attack(coords);
    this.renderer.redrawGrid(
      this.computer.gameBoard.board,
      false,
      this.#handleClick.bind(this),
    );
  }

  run() {
    console.log("starting game");
    this.user.gameBoard.print();
    this.renderer.redrawGrid(this.user.gameBoard.board, true);
    this.renderer.redrawGrid(
      this.computer.gameBoard.board,
      false,
      this.#handleClick.bind(this),
    );
  }

  continueGame() {
    return (
      !this.user.gameBoard.areAllSunk() && !this.computer.gameBoard.areAllSunk()
    );
  }
}
