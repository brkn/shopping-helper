import { convertPriceToNumber } from "./utils";

describe("convertPriceToNumber", () => {
  test("converts 5 tl to 5", () => {
    expect(convertPriceToNumber("5 tl")).toBe(5);
  });

  test("converts 25tl to 25", () => {
    expect(convertPriceToNumber("25tl")).toBe(25);
  });

  test("converts -111tl to -111", () => {
    expect(convertPriceToNumber("-111tl")).toBe(-111);
  });

  test("converts -122tl to -122", () => {
    expect(convertPriceToNumber("-122 tl")).toBe(-122);
  });

  test("converts 0tl to 0", () => {
    expect(convertPriceToNumber("0tl")).toBe(0);
  });

  test("converts 3 to 3", () => {
    expect(convertPriceToNumber("3")).toBe(3);
  });
});
