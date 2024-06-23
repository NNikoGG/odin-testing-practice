const capitalize = require("./capitalize");

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("does not change the case of other letters", () => {
  expect(capitalize("hELLO")).toBe("HELLO");
});

test("returns an empty string if not provided with a string", () => {
  expect(capitalize(123)).toBe("");
});

test("correctly handles an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("does not fail if the first character is already uppercase", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
