import { expect, test, describe } from "@jest/globals";
import reverseString from "./reverseString";

describe("Reverse String", () => {
  test("Function should exist", () => {
    expect(reverseString).toBeDefined();
    expect(typeof reverseString).toBe("function");
  });

  test("Should reverse the given string", () => {
    const inputs = [
      {
        in: "He loved that lamb in the same way that Jiazhen loved him.",
        out: ".mih devol nehzaiJ taht yaw emas eht ni bmal taht devol eH",
      },
      {
        in: "How come you only had one son?",
        out: "?nos eno dah ylno uoy emoc woH",
      },
    ];

    inputs.forEach((input) =>
      expect(reverseString(input.in)).toEqual(input.out),
    );
  });
});
