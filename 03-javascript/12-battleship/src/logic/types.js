const ShipType = Object.freeze({
  CARRIER: Symbol(5),
  BATTLESHIP: Symbol(4),
  CRUISER: Symbol(3),
  SUBMARINE: Symbol(3),
  DESTROYER: Symbol(2),
});

class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  hash() {
    return `${this.x},${this.y}`;
  }
}

const createCoords = (x, y) => {
  return new Coords(x, y);
};

export { ShipType, createCoords as Coords };
