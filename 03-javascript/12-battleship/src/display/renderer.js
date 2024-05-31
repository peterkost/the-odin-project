import { Coords } from "../logic/types";

export default class Renderer {
  redrawGrid(grid, left, onClick) {
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
        square.onclick = () => onClick(Coords(j, i));

        row.appendChild(square);
      }
    }
  }
}
