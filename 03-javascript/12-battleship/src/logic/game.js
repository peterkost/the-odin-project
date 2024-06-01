import Player from "./player";
import Renderer from "../display/renderer";

export default class Game {
  user = new Player(false, true);
  computer = new Player(true, true);
  renderer = new Renderer();

  #handleClick(coords) {
    this.renderer.newGame(false, this.run.bind(this));

    if (!this.computer.gameBoard.attack(coords)) {
      return;
    }
    this.renderer.grid(
      this.computer.gameBoard.board,
      false,
      this.#handleClick.bind(this),
    );

    if (this.computer.gameBoard.areAllSunk()) {
      this.renderer.gameEnd(true);
    }

    this.user.gameBoard.attack(this.computer.getAttack());
    this.renderer.grid(this.user.gameBoard.board, true);

    if (this.user.gameBoard.areAllSunk()) {
      this.renderer.gameEnd(false);
    }

    this.renderer.score(
      this.user.gameBoard.ships.size,
      this.computer.gameBoard.ships.size,
    );
  }

  run() {
    this.resetState();
    this.renderer.score(
      this.user.gameBoard.ships.size,
      this.computer.gameBoard.ships.size,
    );
    this.renderer.grid(this.user.gameBoard.board, true);
    this.renderer.grid(
      this.computer.gameBoard.board,
      false,
      this.#handleClick.bind(this),
    );
  }

  resetState() {
    this.user = new Player(false, true);
    this.computer = new Player(true, true);
    this.renderer.newGame(true, this.run.bind(this));
  }

  continueGame() {
    return (
      !this.user.gameBoard.areAllSunk() && !this.computer.gameBoard.areAllSunk()
    );
  }
}
