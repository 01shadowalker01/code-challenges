const { mergeSortedLists } = require("./merge-sorted-lists");

test("Should merge two sorted lists", () => {
  expect(mergeSortedLists([], [])).toEqual([]);
  expect(mergeSortedLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  expect(mergeSortedLists([], [0])).toEqual([0]);
});

const { mergeSortedLinkedLists } = require("./merge-sorted-lists");

test("Should merge two sorted linked lists", () => {
  let l1, l2, resultList;
  l1 = l2 = [].makeLinkedList();
  resultList = [].makeLinkedList();
  expect(mergeSortedLinkedLists(l1, l2)).toEqual(resultList);

  l1 = [].makeLinkedList();
  l2 = [0].makeLinkedList();
  resultList = [0].makeLinkedList();
  expect(mergeSortedLinkedLists(l1, l2)).toEqual(resultList);

  l1 = [1, 2, 4].makeLinkedList();
  l2 = [1, 3, 4].makeLinkedList();
  resultList = [1, 1, 2, 3, 4, 4].makeLinkedList();
  expect(mergeSortedLinkedLists(l1, l2)).toEqual(resultList);
});
