import html from "./grid.html";
import "./grid.css";

export default () => {
  const container = document.createElement("div");

  //container.innerHTML = html;
  container.append(generateGrid());

  return container;
};

const generateGrid = (dimension = 10) => {
  const grid = document.createElement("div");

  for (let i = 0; i < dimension; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    grid.appendChild(row);

    for (let j = 0; j < dimension; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-tile");
      square.innerHTML = "~";
      square.id = `${i},${j}`;

      row.appendChild(square);
    }
  }

  return grid;
};
