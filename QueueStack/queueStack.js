/**
 * queueStack.js    -A program to implement a queue data structure using two stacks.
 *                   A Queue data structure implements FIFO - First In First Out.
 *                   Do not create an array inside of the Queue Class
 * @author           Ratna Lama
 * @version          1.0
 * @since            08/03/2019
 *
 * @description:
 * Queue implementation using two Stack Data structure.
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */

const Stack = require("./Stack");

class QueueStack {
  // Constructor
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  // enqueue()
  enqueue(item) {
    this.first.push(record);
  }

  // dequeue()
  dequeue() {
    // while there are items in the first stack
    while (this.first.peek()) {
      const item = this.first.pop(); // remove item from the end of the first array
      this.second.push(item); // add item to the end of the first array.
    }

    const tempItem = this.second.pop(); // remove item from the end of the second array

    // move the items from the second stack to the first to return to the original state
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return tempItem;
  }

  // peek()
  peek() {
    while (this.second.peek()) {
      this.second.push(this.first.pop());
    }
    const item = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return item;
  }
} // end QueueStack()

console.log("\n---------------------");

module.exports = QueueStack;
