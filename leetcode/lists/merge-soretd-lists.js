/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeSortedLists = function (l1, l2) {
  let x, y, i, j, resultList;
  i = 0;
  j = 0;
  resultList = [];

  if (!l1.length || !l2.length) return l1.length ? l1 : l2;

  while (resultList.length < l1.length + l2.length) {
    x = l1[i];
    y = l2[j];

    if (x >= y) {
      resultList.push(y);
      j++;
    } else {
      resultList.push(x);
      i++;
    }
  }
  return resultList;
};

console.log(mergeSortedLists([1, 2, 4], [1, 3, 4]));

module.exports = mergeSortedLists;
