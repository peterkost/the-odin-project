import { describe, test, expect } from "@jest/globals";
import Player from "./player";
import GameBoard from "./gameboard";

describe("Player", () => {
  test("Contains Game Board", () => {
    const player = new Player(false);
    expect(player.gameBoard).toBeInstanceOf(GameBoard);
  });

  test("Initializes as computer", () => {
    const player = new Player(true);
    expect(player.isComputer).toBe(true);
  });

  test("Initializes as person", () => {
    const player = new Player(false);
    expect(player.isComputer).toBe(false);
  });

  test("Initialize with empty board", () => {
    const player = new Player(false);
    expect(player.gameBoard.areAllSunk()).toBe(true);
  });

  test("Initialize with mock ships", () => {
    const player = new Player(false, true);
    expect(player.gameBoard.areAllSunk()).toBe(false);
  });
});
