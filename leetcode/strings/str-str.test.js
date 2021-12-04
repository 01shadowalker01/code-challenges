const { strStr } = require("./str-str");

test("Should return -1 if nothing found our 0 if its '' (empty string)", () => {
  expect(strStr("", "")).toBe(0);
  expect(strStr("aaaaa", "bba")).toBe(-1);
});
test("Should return the index of the first occurrence of needle in string", () => {
    expect(strStr("hello", "ll")).toBe(2);
    expect(strStr("Saeed", "ed")).toBe(3);
});

const { repeatedSubstringPattern } = require("./str-str");

test("Should check if given string can be constructed by taking a substring of it and appending multiple copies of the substring together.", () => {
  expect(repeatedSubstringPattern("abab")).toBe(true);
  expect(repeatedSubstringPattern("aba")).toBe(false);
  expect(repeatedSubstringPattern("abcabcabcabc")).toBe(true);
});
