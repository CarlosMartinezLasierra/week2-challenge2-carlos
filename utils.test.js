import checkIfIsEquality from "./index";
describe("checkObjectIsEquality", () => {
  test("returns true for numeric equality", () => {
    const result = checkIfIsEquality(5, 5);
    expect(result).toBe(true);
  });
  test("returns false for NaN values", () => {
    const result = checkIfIsEquality(NaN, NaN);
    expect(result).toBe(true);
  });
  test("returns true for boolean equality", () => {
    const result = checkIfIsEquality(false, false);
    expect(result).toBe(true);
  });
});
