const reverseString = require("./reverseString");

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a string containing spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("returns an empty string if not provided with a string", () => {
  expect(reverseString(123)).toBe("");
});

test("correctly handles an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("works with special characters and numbers", () => {
  expect(reverseString("123$% abc")).toBe("cba %$321");
});
