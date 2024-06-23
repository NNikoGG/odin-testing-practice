const caesarCipher = require("./caesarCipher");

test("shifts xyz by 3 to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case: shifts HeLLo by 3 to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation remains unchanged: shifts Hello, World! by 3 to Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wraps from z to a, considering negative shifts: shifts abc by -3 to xyz", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("handles large shifts by normalizing them within 26: shifts abc by 29 to def", () => {
  expect(caesarCipher("abc", 29)).toBe("def");
});
