export default class Renderer {
  drawGrid(grid) {
    const tiles = document.querySelectorAll(".grid-tile");
    let tileIndex = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        tiles[tileIndex].innerHTML = grid[i][j];
        tileIndex++;
      }
    }
  }
}
