const mergeSortedLists = require("./merge-soretd-lists");

test("Should merge two sorted lists", () => {
  expect(mergeSortedLists([], [])).toEqual([]);
  expect(mergeSortedLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  expect(mergeSortedLists([], [0])).toEqual([0]);
});
