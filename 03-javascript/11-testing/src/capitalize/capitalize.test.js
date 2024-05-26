import { expect, test, describe } from "@jest/globals";
import capitalize from "./capitalize";

describe("Capitalize", () => {
  test("Function should exist", () => {
    expect(capitalize).toBeDefined();
    expect(typeof capitalize).toBe("function");
  });

  test("Should capitalize first letter", () => {
    const inputs = [
      {
        in: "the quick brown fox jumps over the lazy dog.",
        out: "The quick brown fox jumps over the lazy dog.",
      },
      {
        in: "why are we still here?",
        out: "Why are we still here?",
      },
    ];

    inputs.forEach((input) => expect(capitalize(input.in)).toEqual(input.out));
  });
});
