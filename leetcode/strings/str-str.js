/**
 * Problem link:
 * https://leetcode.com/problems/implement-strstr/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const needleLength = needle.length;
  if (!haystack.length && !needleLength) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (i + needle.length > haystack.length) return -1;

    let currnet = haystack.substring(i, i + needleLength);
    if (currnet == needle) return i;
  }
  return -1;
};

console.log(strStr("hello", "ll"));

module.exports = strStr;
