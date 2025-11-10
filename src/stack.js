//const { NotImplementedError } = require('../lib/errors');
const stack = new Stack();
/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * 
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(value) {
    if (!this._items) this._items = [];
    this._items.push(value);
  }

  pop() {
    if (!this._items || this._items.length === 0) return undefined;
    return this._items.pop();
  }

  peek() {
    if (!this._items || this._items.length === 0) return undefined;
    return this._items[this._items.length - 1];
  }
}

module.exports = {
  Stack,
};
