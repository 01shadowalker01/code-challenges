/**
 * Problem Link:
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValidParentheses = (s) => {
  let stack = new Stack();
  const pairs = [
    { openning: "(", closing: ")" },
    { openning: "{", closing: "}" },
    { openning: "[", closing: "]" },
  ];
  const openningPars = pairs.map((pair) => pair.openning);
  const closingPars = pairs.map((pair) => pair.closing);
  for (let i = 0; i < s.length; i++) {
    let openningIndex, closingIndex;
    openningIndex = openningPars.indexOf(s[i]);
    if (openningIndex != -1) {
      stack.push(openningIndex);
    } else {
      closingIndex = closingPars.indexOf(s[i]);
      if (closingIndex == -1) return false;
      const lastItem = stack.pop();
      if (lastItem != undefined) {
        const notInSamePair = s[i] != pairs[lastItem].closing;
        if (notInSamePair) return false;
      } else return false;
    }
  }
  if (stack.top != -1) return false;

  return true;
};

class Stack {
  _stack = [];
  _top = -1;

  get top() {
    return this._top;
  }

  get lastItem() {
    return this._stack[this._top];
  }

  push(item) {
    this._stack.push(item);
    this._top++;
  }

  pop() {
    if (this._top != -1) {
      this._top--;
      return this._stack.pop();
    }
  }
}

const isValidParentheses2 = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

module.exports = { isValidParentheses, isValidParentheses2 };
