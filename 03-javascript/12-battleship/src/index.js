import grid from "./display/grid/grid";
import Game from "./logic/game";

function component() {
  const el = document.createElement("div");
  el.append(grid());
  return el;
}

document.body.appendChild(component());
const game = new Game();
game.run();
