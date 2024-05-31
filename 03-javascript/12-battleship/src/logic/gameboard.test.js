import { describe, test, expect, beforeEach } from "@jest/globals";
import GameBoard, { MISS, HIT } from "./gameboard";
import { Coords } from "./types";

describe("GameBoard", () => {
  let gb;

  beforeEach(() => {
    gb = new GameBoard();
  });

  describe("Ship placement", () => {
    test("Valid", () => {
      expect(gb.place(Coords(0, 0), Coords(0, 3))).toEqual(true);
      expect(gb.ships.size).toEqual(1);
      gb.place(Coords(1, 0), Coords(1, 3));
      expect(gb.ships.size).toEqual(2);
    });

    test("Invalid, ends out of bounds", () => {
      expect(gb.place(Coords(9, 0), Coords(13, 0))).toEqual(false);
    });

    test("Invalid, overlaps with existing ship", () => {
      gb.place(Coords(0, 0), Coords(0, 3));

      expect(gb.place(Coords(0, 0), Coords(0, 3))).toEqual(false);
    });

    test("Ships afloat after placement", () => {
      gb.place(Coords(0, 0), Coords(0, 3));

      expect(gb.areAllSunk()).toBe(false);
    });

    test("Reflected in board", () => {
      const start = 0;
      const end = 5;
      gb.place(Coords(0, 0), Coords(0, 5));
      expect(gb.place(Coords(1, 1), Coords(5, 1))).toBe(true);
      for (let i = start; i < end; i++) {
        expect(gb.board[i][0]).toBe(0);
        expect(gb.board[1][i + 1]).toBe(1);
      }
    });
  });

  describe("Recieve attack", () => {
    test("Miss", () => {
      const coord = Coords(0, 0);
      gb.attack(coord);

      expect(gb.getTile(coord)).toBe(MISS);
    });

    test("Hit", () => {
      const startCoords = Coords(0, 0);
      gb.place(startCoords, Coords(0, 3));
      gb.attack(startCoords);

      expect(gb.getTile(startCoords)).toBe(HIT);
    });

    test("All sunk", () => {
      const coords = [Coords(0, 0), Coords(0, 1), Coords(0, 2)];
      gb.place(coords[0], coords[coords.length - 1]);
      coords.forEach((c) => gb.attack(c));

      expect(gb.areAllSunk()).toBe(true);
    });

    test("Sink single ship", () => {
      const coords = [Coords(0, 0), Coords(0, 1), Coords(0, 2)];
      gb.place(coords[0], coords[coords.length - 1]);
      gb.place(Coords(3, 3), Coords(3, 4));
      coords.forEach((c) => gb.attack(c));

      expect(gb.areAllSunk()).toBe(false);
    });

    test("Invald, out of bounds", () => {
      gb.place(Coords(0, 0), Coords(0, 3));

      expect(gb.attack(Coords(16, 0))).toBe(false);
    });
  });
});
