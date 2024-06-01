import { describe, test, expect, beforeEach } from "@jest/globals";
import Player from "./player";
import GameBoard from "./gameboard";

describe("Player", () => {
  let player;
  beforeEach(() => (player = new Player()));

  test("Contains Game Board", () => {
    expect(player.gameBoard).toBeInstanceOf(GameBoard);
  });

  test("Initializes as computer", () => {
    player = new Player(true);
    expect(player.isComputer).toBe(true);
  });

  test("Initializes as person", () => {
    expect(player.isComputer).toBe(false);
  });

  test("Initialize with empty board", () => {
    expect(player.gameBoard.areAllSunk()).toBe(true);
  });

  describe("NPC Attack", () => {
    test("Returns a coordinate", () => {
      expect(player.getAttack()).toHaveProperty("x");
      expect(player.getAttack()).toHaveProperty("y");
    });

    test("Coordinate is on unexplored tile", () => {
      const attacked = new Set();
      for (let i = 0; i < 100; i++) {
        const attack = player.getAttack();
        expect(attacked).not.toContain(attack.hash());
        attacked.add(attack.hash());
      }
    });
  });

  describe("NPC Ship placement", () => {
    beforeEach(() => player.randomlyPlaceShips());

    test("Places five ships", () => {
      expect(player.gameBoard.ships.size).toBe(5);
    });

    test("Ships are of required lengths", () => {
      const expected = [0, 0, 1, 2, 1, 1];
      const actual = [0, 0, 0, 0, 0, 0];
      player.gameBoard.ships.forEach((v) => actual[v.length]++);

      expect(expected).toEqual(actual);
    });

    test("Ships are deployed randomly", () => {
      const secondPlayer = new Player();
      secondPlayer.randomlyPlaceShips();

      expect(player.gameBoard.board).not.toEqual(secondPlayer.gameBoard.board);
    });
  });
});
