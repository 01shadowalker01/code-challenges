const { searchInsert, searchInsertBinary } = require("./search-insert");

test("Shoud return the index if the target is found", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  expect(searchInsertBinary([1, 3, 5, 6], 5)).toBe(2);
  expect(searchInsert([1, 3, 7, 10, 15, 21, 23, 24], 15)).toBe(4);
  expect(searchInsertBinary([1, 3, 7, 10, 15, 21, 23, 24], 15)).toBe(4);
});

test("If not found, Shoud return the index where it would be if it were inserted in order.", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  expect(searchInsertBinary([1, 3, 5, 6], 2)).toBe(1);
  expect(searchInsert([1, 3, 5, 6], 9)).toBe(4);
  expect(searchInsertBinary([1, 3, 5, 6], 9)).toBe(4);
});
