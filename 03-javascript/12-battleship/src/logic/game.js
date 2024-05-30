import Player from "./player";
import Renderer from "../display/renderer";

export default class Game {
  user = new Player(false, true);
  computer = new Player(true, true);
  userTurn = true;

  run() {
    const renderer = new Renderer();
    console.log("starting game");
    this.user.gameBoard.print();
    renderer.drawGrid(this.user.gameBoard.board);
  }

  continueGame() {
    return (
      !this.user.gameBoard.areAllSunk() && !this.computer.gameBoard.areAllSunk()
    );
  }
}
