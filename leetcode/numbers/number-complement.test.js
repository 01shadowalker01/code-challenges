const { findComplement } = require("./number-complement");

test("Should return number's complement", () => {
  expect(findComplement(5)).toBe(2);
});
