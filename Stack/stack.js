/**
 * Stack.js         -A program to implement a stack data structure. A stack data structure implements LIFO -
 *                   Last In First Out.
 * @author           Ratna Lama
 * @version          1.0
 * @since            08/03/2019
 *
 * @description:
 * Array implementation of Stack Data structure.
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */
class Stack {
  // Constructor
  constructor() {
    this.data = []; // array declaration
  }

  // push() adds item to the end of the array
  push(item) {
    this.data.push(item);
  }

  // pop() removes items from the end of the array
  pop() {
    return this.data.pop();
  }
  // peek() returns the last item from the array without actually removing it
  peek() {
    return this.data[this.data.length - 1];
  }
  // isEmpty()
  isEmpty() {
    return this.data === null;
  }
  // isFull()
  // Javascript arrays are dynamics so the length is variable. Hence isFull() doesn't apply.
}

s = new Stack();
s.push('apple');
s.push(1);
s.push('a');

console.log(s); // Stack { data: [ 'apple', 1, 'a' ] }

s.pop();

console.log(s); // // Stack { data: [ 'apple', 1 ] }

console.log(s.peek()); // 1

console.log(s.isEmpty()); // false

s.pop();

console.log(s.isEmpty());

module.exports = Stack;
