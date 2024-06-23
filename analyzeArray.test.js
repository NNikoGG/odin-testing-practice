const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
  test("returns average, min, max, and length of the array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles arrays with negative numbers", () => {
    const result = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(result).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    });
  });

  test("returns null for empty arrays", () => {
    const result = analyzeArray([]);
    expect(result).toBeNull();
  });

  test("returns null for non-array inputs", () => {
    const result = analyzeArray("not an array");
    expect(result).toBeNull();
  });
});
