/**
 * Problem link:
 * https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} num
 * @return {number}
 */

var reverse = function (x) {
  let result = "";
  const MAX_32BIT_INT = Math.pow(2, 31) - 1;
  const MIN_32BIT_INT = -1 * Math.pow(2, 31);
  if (x > MAX_32BIT_INT || x < MIN_32BIT_INT) return 0;

  let isNegative = x < 0;
  x = Math.abs(x);
  while (x > 0) {
    result += x % 10;
    x = Math.floor(x / 10);
  }
  result = Number(result);
  if (isNegative) result *= -1;
  if (result > MAX_32BIT_INT || result < MIN_32BIT_INT) return 0;

  return result;
};

module.exports = {
  reverse
}
