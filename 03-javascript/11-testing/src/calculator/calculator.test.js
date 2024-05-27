import { describe, test, expect } from "@jest/globals";
import Calculator from "./calculator";

describe("Calculator", () => {
  const calculator = new Calculator();

  test("Class exists", () => {
    expect(Calculator).toBeDefined();
    expect(typeof Calculator).toBe("function");
  });

  test("Instance exists", () => {
    expect(calculator).toBeDefined();
    expect(calculator).toBeInstanceOf(Calculator);
  });

  test("Add function exists", () => {
    expect(typeof Calculator.prototype.add).toBe("function");
  });

  test("Add function returns sum of two integers", () => {
    const inputs = [
      {
        in: [1, 1],
        out: 2,
      },
      {
        in: [3, 16],
        out: 19,
      },
    ];

    inputs.forEach((input) =>
      expect(calculator.add(...input.in)).toEqual(input.out),
    );
  });

  test("Subtract function exists", () => {
    expect(typeof Calculator.prototype.subtract).toBe("function");
  });

  test("Subtract function returns difference of two integers", () => {
    const inputs = [
      {
        in: [1, 1],
        out: 0,
      },
      {
        in: [3, 16],
        out: -13,
      },
    ];

    inputs.forEach((input) =>
      expect(calculator.subtract(...input.in)).toEqual(input.out),
    );
  });

  test("Multiply function exists", () => {
    expect(typeof Calculator.prototype.multiply).toBe("function");
  });

  test("Multiply function returns product of two integers", () => {
    const inputs = [
      {
        in: [1, 1],
        out: 1,
      },
      {
        in: [3, 16],
        out: 48,
      },
    ];

    inputs.forEach((input) =>
      expect(calculator.multiply(...input.in)).toEqual(input.out),
    );
  });

  test("Divide function exists", () => {
    expect(typeof Calculator.prototype.divide).toBe("function");
  });

  test("Divide function returns quotient of two integers", () => {
    const inputs = [
      {
        in: [1, 1],
        out: 1,
      },
      {
        in: [3, 16],
        out: 0.1875,
      },
    ];

    inputs.forEach((input) =>
      expect(calculator.divide(...input.in)).toEqual(input.out),
    );
  });
});
