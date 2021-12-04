const {
  climbStairsDP,
  climbRecursive,
  climbStairsMemo,
} = require("./climb-staires");

test("Should calculate different ways of climbing staires", () => {
  expect(climbStairsDP(1)).toBe(1);
  expect(climbRecursive(1)).toBe(1);
  expect(climbStairsMemo(1)).toBe(1);

  expect(climbStairsDP(2)).toBe(2);
  expect(climbStairsDP(3)).toBe(3);
  expect(climbStairsDP(4)).toBe(5);
  expect(climbStairsDP(5)).toBe(8);
  expect(climbStairsDP(6)).toBe(13);

  expect(climbRecursive(6)).toBe(13);
  expect(climbStairsMemo(6)).toBe(13);
});
