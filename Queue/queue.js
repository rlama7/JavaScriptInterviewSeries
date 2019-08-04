class Queue {
  constructor() {
    this.data = [];
  }

  /**
   * enqueue record to the last of the queue
   * @param {} record
   */
  enqueue(record) {
    this.data.unshift(record);
  }

  /**
   * remove record from the front of the queue
   */
  dequeue() {
    return this.data.pop();
  }

  /**
   * peek to the data in the front of the queue without actually removing it
   */
  peek() {
    return this.datat[this.data.length - 1];
  }
} // end Queue

module.exports = Queue;
