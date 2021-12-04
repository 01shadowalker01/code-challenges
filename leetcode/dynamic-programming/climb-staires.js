/**
 * Problem link:
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
const climbStairsDP = (n) => {
  // Dynamic programming aproach
  if(n === 1) return 1;

  let previous, current, temp;
  previous = 1;
  current = 2;
  for (let i = 3; i <= n; i++) {
    temp = previous + current;
    previous = current;
    current = temp;
  }
  return current;
};

const climbRecursive = (target) => {
  if (target === 1) return 1;
  if (target === 2) return 2;
  if (target > 2) {
    return climbRecursive(target - 1) + climbRecursive(target - 2);
  }
};

const climbStairsMemo = (n) => {
  // Dynamic programming, Memorization aproach
  let memo = [1, 2];
  for (let i = 2; i < n; i++) {
    memo.push(memo[i - 1] + memo[i - 2]);
  }
  return memo[n-1];
};

module.exports = { climbStairsDP, climbRecursive, climbStairsMemo };
