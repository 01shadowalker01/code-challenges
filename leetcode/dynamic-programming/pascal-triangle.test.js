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

const { generatePascalTriangleNthRow } = require("./pascal-triangle");

test("Should return nth row of pascal's triangle", () => {
  expect(generatePascalTriangleNthRow(0)).toEqual([1]);
  expect(generatePascalTriangleNthRow(1)).toEqual([1, 1]);
  expect(generatePascalTriangleNthRow(2)).toEqual([1, 2, 1]);
  expect(generatePascalTriangleNthRow(3)).toEqual([1, 3, 3, 1]);
  expect(generatePascalTriangleNthRow(4)).toEqual([1, 4, 6, 4, 1]);
});
