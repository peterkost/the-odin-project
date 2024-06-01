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
        square.id = `${left ? "left" : "right"}-${i},${j}`;

        let tileContent = grid[i][j];
        if (!left) {
          square.onclick = () => onClick(Coords(j, i));
          if (!isNaN(parseInt(tileContent))) {
            tileContent = "~";
          }
        }
        square.innerHTML = tileContent;

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

  newGame(start, onClick) {
    const container = document.getElementById("button-container");
    container.innerHTML = "";
    if (start) {
      const shuffleButton = document.createElement("button");
      shuffleButton.innerText = "Shuffle ships";
      shuffleButton.onclick = onClick;
      container.append(shuffleButton);
    } else {
      const restartButton = document.createElement("button");
      restartButton.innerText = "Restart";
      restartButton.onclick = onClick;
      container.append(restartButton);
    }
  }
}
