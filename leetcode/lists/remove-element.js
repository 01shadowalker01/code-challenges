/**
 * Problem link:
 * https://leetcode.com/problems/remove-element/
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

/**
 * Problem link:
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
 * 
 * @param {number[]} nums // sorted list
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currnet = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currnet == nums[i]) {
      nums.splice(i, 1);
      i--;
    }
    currnet = nums[i]
  }
  return nums;
};

module.exports = { removeElement, removeDuplicates };
