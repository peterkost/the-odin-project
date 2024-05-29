const ShipType = Object.freeze({
  CARRIER: Symbol(5),
  BATTLESHIP: Symbol(4),
  CRUISER: Symbol(3),
  SUBMARINE: Symbol(3),
  DESTROYER: Symbol(2),
});

const Coords = (x, y) => {
  return { x, y };
};

export { ShipType, Coords };
