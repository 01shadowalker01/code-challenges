/**
 * Problem link:
 * https://leetcode.com/problems/number-complement/
 *
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binaryStr = toBinary(num);
  const binaryArray = binaryStr.split("").map((bit) => Number(bit));
  const complement = binaryArray.map((bit) => (bit ? 0 : 1)).join("");
  return toDecimal(complement);
};

function toBinary(decimal) {
  return (decimal >>> 0).toString(2);
}

function toDecimal(binary) {
  return parseInt(binary, 2);
}

module.exports = { findComplement };
