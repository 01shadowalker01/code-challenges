const strStr = require("./str-str");

test("Should return -1 if nothing found our 0 if its '' (empty string)", () => {
  expect(strStr("", "")).toBe(0);
  expect(strStr("aaaaa", "bba")).toBe(-1);
});
test("Should return the index of the first occurrence of needle in string", () => {
  expect(strStr("hello", "ll")).toBe(2);
  expect(strStr("Saeed", "ed")).toBe(3);
});
