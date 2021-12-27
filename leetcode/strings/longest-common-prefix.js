/**
 * Problem link:
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const min = Math.min(...strs.map((str) => str.length));
  for (let cIndex = 0; cIndex < min; cIndex++) {
    const char = strs[0][cIndex];
    if (strs.every((str) => str[cIndex] === char))
      result += strs[0][cIndex];
    else break;
  }
  return result;
};

module.exports = { longestCommonPrefix };
