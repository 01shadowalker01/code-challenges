/**
 * Problem link:
 * https://leetcode.com/problems/plus-one/
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIndex = digits.length - 1;
  addOneRecursively(digits, lastIndex);
  return digits;
};

const addOneRecursively = (digits, index) => {
  if (index == -1) {
    return digits.unshift(1);
  }
  if (digits[index] < 9) {
    return ++digits[index];
  } else if (digits[index] == 9) {
    digits[index] = 0;
    addOneRecursively(digits, index - 1);
  }
};

const digits = [4,3,2,1];

const result = plusOne(digits);
console.log(result);

module.exports = {
  plusOne,
};
