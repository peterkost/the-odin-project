import grid from "./display/grid/grid";
import Game from "./logic/game";
import "./style.css";

function component() {
  const el = document.createElement("div");
  //el.append(grid());
  return el;
}

const game = new Game();
document.body.appendChild(component());
const startButton = document.getElementById("start-button");
console.log(startButton);
startButton.onclick = () => game.run();
game.run();
