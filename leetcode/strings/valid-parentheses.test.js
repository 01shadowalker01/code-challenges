const {
  isValidParentheses,
  isValidParentheses2,
} = require("./valid-parentheses");

test("Should validate parentheses order", () => {
  expect(isValidParentheses("(){}[]")).toBe(true);
  expect(isValidParentheses("({)}")).toBe(false);
  expect(isValidParentheses("{[]}")).toBe(true);
  expect(isValidParentheses("{[]}(")).toBe(false);
  expect(isValidParentheses2("(){}[]")).toBe(true);
  expect(isValidParentheses2("({)}")).toBe(false);
  expect(isValidParentheses2("{[]}")).toBe(true);
  expect(isValidParentheses2("{[]}(")).toBe(false);
});
