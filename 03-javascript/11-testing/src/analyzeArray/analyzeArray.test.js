import { describe, test, expect } from "@jest/globals";
import { analyzeArray, average, min, max, length } from "./analyzeArray";

describe("Analyze array", () => {
  test("Function exist", () => {
    expect(analyzeArray).toBeDefined();
    expect(typeof analyzeArray).toBe("function");
  });

  test("Object contains average, min, max, and length", () => {
    const result = analyzeArray([]);

    expect(result).toHaveProperty("average");
    expect(typeof result.average).toBe("number");

    expect(result).toHaveProperty("min");
    expect(typeof result.average).toBe("number");

    expect(result).toHaveProperty("max");
    expect(typeof result.average).toBe("number");

    expect(result).toHaveProperty("length");
    expect(typeof result.average).toBe("number");
  });

  test("Computed values", () => {
    const inputs = [
      {
        in: [1, 8, 3, 4, 2, 6],
        out: {
          average: 4,
          min: 1,
          max: 8,
          length: 6,
        },
      },
      {
        in: [4, 8, 15, 16, 23, 42],
        out: {
          average: 18,
          min: 4,
          max: 42,
          length: 6,
        },
      },
    ];

    inputs.forEach((input) =>
      expect(analyzeArray(input.in)).toEqual(input.out),
    );
  });

  describe("Math functions", () => {
    test("Average", () => {
      const inputs = [
        {
          in: [4, 8, 15, 16, 23, 42],
          out: 18,
        },
        {
          in: [3, 16, 42],
          out: 20.33,
        },
        {
          in: [1, 8, 3, 4, 2, 6],
          out: 4,
        },
        {
          in: [9, 8, 3, 4, 2, 6],
          out: 5.33,
        },
      ];

      inputs.forEach((input) => expect(average(input.in)).toEqual(input.out));
    });

    test("Min", () => {
      const inputs = [
        {
          in: [4, 8, 15, 16, 23, 42],
          out: 4,
        },
        {
          in: [3, 16, 42],
          out: 3,
        },
        {
          in: [1, 8, 3, 4, 2, 6],
          out: 1,
        },
        {
          in: [9, 8, 3, 4, 2, 6],
          out: 2,
        },
      ];

      inputs.forEach((input) => expect(min(input.in)).toEqual(input.out));
    });

    test("Max", () => {
      const inputs = [
        {
          in: [4, 8, 15, 16, 23, 42],
          out: 42,
        },
        {
          in: [3, 16, 42],
          out: 42,
        },
        {
          in: [1, 8, 3, 4, 2, 6],
          out: 8,
        },
      ];

      inputs.forEach((input) => expect(max(input.in)).toEqual(input.out));
    });

    test("Length", () => {
      const inputs = [
        {
          in: [4, 8, 15, 16, 23, 42],
          out: 6,
        },
        {
          in: [3, 16, 42],
          out: 3,
        },
        {
          in: [1, 8, 3, 4, 2, 6],
          out: 6,
        },
      ];

      inputs.forEach((input) => expect(length(input.in)).toEqual(input.out));
    });
  });
});
