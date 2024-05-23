class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isValid() {
    return 0 <= this.x && this.x <= 7 && 0 <= this.y && this.y <= 7;
  }

  hash() {
    return `${this.x},${this.y}`;
  }
}

const MOVES = [
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

const bfs = (start, end) => {
  const queue = [[start]];
  const seen = new Set();

  while (queue) {
    const path = queue[0];
    queue.shift();
    const lastMove = path[path.length - 1];
    if (lastMove.x === end.x && lastMove.y === end.y) {
      return path;
    }
    MOVES.forEach((m) => {
      const new_coord = new Coords(lastMove.x + m[0], lastMove.y + m[1]);
      if (new_coord.isValid() && !seen.has(new_coord.hash())) {
        seen.add(new_coord.hash());
        queue.push(path.concat(new_coord));
      }
    });
  }
};

const moves = bfs(new Coords(3, 3), new Coords(4, 3));
console.log(`You made it in ${moves.length - 1} moves!  Here's your path:`);
moves.forEach((m) => console.log(`[${m.hash()}]`));
