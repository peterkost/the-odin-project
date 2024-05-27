import { describe, test, expect } from "@jest/globals";
import { caesarCipher, getShiftedChar } from "./caesarCipher";

describe("Caesar Cipher", () => {
  describe("Char encrpytion", () => {
    test("Function exist", () => {
      expect(getShiftedChar).toBeDefined();
      expect(typeof getShiftedChar).toBe("function");
    });

    test("Lowercase char", () => {
      const inputs = [
        {
          in: ["a", 10],
          out: "k",
        },
        {
          in: ["t", 1],
          out: "u",
        },
      ];
      inputs.forEach((input) =>
        expect(getShiftedChar(...input.in)).toEqual(input.out),
      );
    });

    test("Uppercase char", () => {
      const inputs = [
        {
          in: ["B", 7],
          out: "I",
        },
        {
          in: ["Q", 4],
          out: "U",
        },
      ];
      inputs.forEach((input) =>
        expect(getShiftedChar(...input.in)).toEqual(input.out),
      );
    });

    test("Wraps", () => {
      const inputs = [
        {
          in: ["z", 1],
          out: "a",
        },
        {
          in: ["Z", 2],
          out: "B",
        },
      ];
      inputs.forEach((input) =>
        expect(getShiftedChar(...input.in)).toEqual(input.out),
      );
    });

    test("Ignores non-alphabetic", () => {
      const inputs = [
        {
          in: ["!", 15],
          out: "!",
        },
        {
          in: ["~", 9],
          out: "~",
        },
      ];
      inputs.forEach((input) =>
        expect(getShiftedChar(...input.in)).toEqual(input.out),
      );
    });
  });

  describe("Message encryption", () => {
    test("Function exist", () => {
      expect(caesarCipher).toBeDefined();
      expect(typeof caesarCipher).toBe("function");
    });

    test("Returns encrypted message", () => {
      const inputs = [
        {
          in: ["You in my dreams, that's why I sleep all the time", 3],
          out: "Brx lq pb guhdpv, wkdw'v zkb L vohhs doo wkh wlph",
        },
        {
          in: ["Girl, I got a suite at the SLS", 16],
          out: "Wyhb, Y wej q ikyju qj jxu IBI",
        },
      ];

      inputs.forEach((input) =>
        expect(caesarCipher(...input.in)).toEqual(input.out),
      );
    });
  });
});
