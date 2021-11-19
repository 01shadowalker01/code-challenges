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

const mergeSortedLinkedLists = function (l1, l2) {
  let current, head;
  head = current = new ListNode();
  let headPtr1, headPtr2;

  headPtr1 = l1;
  headPtr2 = l2;
  while (headPtr1 && headPtr2) {
    if (headPtr1.val < headPtr2.val) {
      current.next = new ListNode(headPtr1.val);
      headPtr1 = headPtr1.next;
    } else {
      current.next = new ListNode(headPtr2.val);
      headPtr2 = headPtr2.next;
    }
    current = current.next;
  }
  current.next = headPtr1 || headPtr2;
  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

Array.prototype.makeLinkedList = function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let head = new ListNode();
  if (this.length === 0) return head.next;

  let tempNode = new ListNode(this[0]);
  head.next = tempNode;
  for (let i = 1; i < this.length; i++) {
    let temp = new ListNode(this[i]);
    tempNode.next = temp;
    tempNode = temp;
  }
  return head.next;
};

module.exports = {
  mergeSortedLists,
  mergeSortedLinkedLists,
};
