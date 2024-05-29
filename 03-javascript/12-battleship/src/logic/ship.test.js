import { describe, test, expect } from "@jest/globals";
import Ship from "./ship";

describe("Ship", () => {
  test("Constructor sets length property", () => {
    const lengths = [...Array(16).keys()];
    lengths.forEach((l) => expect(new Ship(l).length).toBe(l));
  });

  test("Hits equal to length result in sinking", () => {
    const ship = new Ship(3);

    expect(ship.isSunk()).toBe(false);

    for (let i = 0; i < ship.length - 1; i++) {
      ship.hit();
    }

    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
