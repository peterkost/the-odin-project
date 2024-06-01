import { Coords } from "../logic/types";

export default class Renderer {
  grid(grid, left, onClick) {
    const gridContainer = document.getElementById(
      `gb-${left ? "left" : "right"}`,
    );

    gridContainer.innerHTML = "";

    for (let i = 0; i < grid.length; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
      gridContainer.appendChild(row);
      for (let j = 0; j < grid[0].length; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-tile");
        square.innerHTML = grid[i][j];
        square.id = `${left ? "left" : "right"}-${i},${j}`;
        if (!left) {
          square.onclick = () => onClick(Coords(j, i));
        }

        row.appendChild(square);
      }
    }
  }

  score(left, right) {
    const leftEl = document.getElementById("ships-left");
    leftEl.innerHTML = `${5 - left} sunk - ${left} afloat`;

    const rightEl = document.getElementById("ships-right");
    rightEl.innerHTML = `${5 - right} sunk - ${right} afloat`;
  }

  gameEnd(win) {
    const gridContainer = document.getElementById("gb-right");
    gridContainer.innerHTML = `<h1>You ${win ? "win" : "lose"}!</h1>`;
  }
}
