/**
 * Problem link:
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */
const generatePascalTriangle = (numRows) => {
  triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    if (!triangle[i]) triangle[i] = [];

    for (let j = 0; j < i +1; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle;
};

module.exports = { generatePascalTriangle };
