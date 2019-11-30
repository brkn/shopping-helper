import {convertPriceToNumber, getDiscount} from "./utils";

describe("convertPriceToNumber", () => {
  describe("converts integers, example:", () => {
    test("converts 5 tl to 5", () => {
      expect(convertPriceToNumber("5 tl")).toBe(5);
    });

    test("converts 25tl to 25", () => {
      expect(convertPriceToNumber("25tl")).toBe(25);
    });

    test("converts -111tl to -111", () => {
      expect(convertPriceToNumber("-111tl")).toBe(-111);
    });

    test("converts -122 tl to -122", () => {
      expect(convertPriceToNumber("-122 tl")).toBe(-122);
    });

    test("converts 0tl to 0", () => {
      expect(convertPriceToNumber("0tl")).toBe(0);
    });

    test("converts number 3 to 3", () => {
      expect(convertPriceToNumber("3")).toBe(3);
    });
  });

  describe("converts doubles, example:", () => {
    test("converts 5.5 tl to 5.5", () => {
      expect(convertPriceToNumber("5.5 tl")).toBe(5.5);
    });

    test("converts 25.5tl to 25.5", () => {
      expect(convertPriceToNumber("25.5tl")).toBe(25.5);
    });

    test("converts -111.01tl to -111.01", () => {
      expect(convertPriceToNumber("-111.01tl")).toBe(-111.01);
    });

    test("converts -122.0 tl to -122.0", () => {
      expect(convertPriceToNumber("-122.0 tl")).toBe(-122.0);
    });

    test("converts 0.00tl to 0.00", () => {
      expect(convertPriceToNumber("0.00tl")).toBe(0.0);
    });

    test("converts number 3,000001 to 3,000001", () => {
      expect(convertPriceToNumber("3,000001")).toBe(3.000001);
    });
  });
});

describe("getDiscount", () => {
  test("3 to 1 returns 67", () => {
    expect(getDiscount(3, 1)).toEqual(67);
  });

  test("5 to 1 returns 80", () => {
    expect(getDiscount(5, 1)).toEqual(80);
  });
});
