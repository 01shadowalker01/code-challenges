const { removeElement } = require("./remove-element");

test("Should remove all occurances of the given element in place, and return the count of remaining elements", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

const { removeDuplicates } = require("./remove-element");

test("Should remove all duplicates from sorted array", () => {
  expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  expect(removeDuplicates([1,1,2])).toEqual([1, 2]);
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual([0,1,2,3,4]);
});
