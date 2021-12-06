const { generatePascalTriangle } = require("./pascal-triangle");

test("Should return n rows of pascal's triangle", () => {
  expect(generatePascalTriangle(1)).toEqual([[1]]);
  expect(generatePascalTriangle(2)).toEqual([[1], [1, 1]]);
  expect(generatePascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  expect(generatePascalTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});
