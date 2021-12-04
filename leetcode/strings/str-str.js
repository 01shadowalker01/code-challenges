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

/**
 * Problem link:
 * https://leetcode.com/problems/repeated-substring-pattern/
 *
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (term) {
  if (term.length == 0) return true;

  let i = 0;
  let subStr = term.substring(0, 1);
  while (i < term.length / 2) {
    let currnet = term.substring(subStr.length, subStr.length + i + 1);
    if (subStr != currnet) {
      i++;
      subStr = term.substring(0, i + 1);
    }
  }
  return subStr;
};

console.log(repeatedSubstringPattern("abab"));

module.exports = { strStr, repeatedSubstringPattern };
