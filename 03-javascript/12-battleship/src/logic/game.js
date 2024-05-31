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

    if (this.computer.gameBoard.areAllSunk()) {
      this.renderer.gameEnd(true);
    }

    this.user.gameBoard.attack(this.computer.getAttack());
    this.renderer.redrawGrid(this.user.gameBoard.board, true);
  }

  run() {
    this.resetState();
    this.renderer.redrawGrid(this.user.gameBoard.board, true);
    this.renderer.redrawGrid(
      this.computer.gameBoard.board,
      false,
      this.#handleClick.bind(this),
    );
  }

  resetState() {
    this.user = new Player(false, true);
    this.computer = new Player(true, true);
    this.userTurn = true;
  }

  continueGame() {
    return (
      !this.user.gameBoard.areAllSunk() && !this.computer.gameBoard.areAllSunk()
    );
  }
}
