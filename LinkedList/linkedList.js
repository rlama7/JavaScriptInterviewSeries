/**
 * linkedList.js    -A program to implement a linked list data structure
 * @authoer          Ratna Lama
 * @version          1.0
 * @since            08/03/2019
 *
 * @description:
 * Implementation of Linked List Data structure: Singly/Double/Circulare Linked List
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */

/**
 * Node Class implementation
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
} // end Node Class

/**
 * LinkedList Class implementaion
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  // insertFirst()
  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;

    // OR
    this.insertAt(data, 0);
  } // end insertFirst()

  // size() returns the size of the Linked List
  size() {
    let counter = 0;
    let node = this.head; // referece to the head node
    while (node) {
      // loop until the last node and stops when node == null
      counter++;
      node = node.next;
    }
    return counter;
  } // end size()

  // getFirst() returns the first node from the LinkedList
  getFirst() {
    // return this.head;
    // OR
    this.getAt(0);
  } // end getFirst()

  // getLast() returns the last node from the LinkedList
  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while (node) {
    //   // if the next node does not exist then the node must be the last node so return it
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    // OR
    this.getAt(this.size() - 1);
  } // end getLast()

  // clear() completely clears out the LinkedList
  clear() {
    return (this.head = null);
  } // end clear()

  // removeFirst() removes the first node from the LinkedList
  removeFirst() {
    // check if the first node exists
    // if (!this.head) {
    //   return;
    // }
    // this.head = this.head.next;
    // OR
    return this.removeAt(0);
  }
  // removeLast() removes the last node from the LinkedList
  removeLast() {
    // test empyt list
    // if (!this.head) {
    //   return;
    // }
    // test only a single node
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    // all Else condition
    // let previous = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // we've reached the last node
    // previous.next = null;

    // OR
    return this.removeAt(this.size() - 1);
  } // end removeLast()

  // insertLast() inserts data to the last node of the Linked List
  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      // there are some existing nodes in our chain
      lastNode.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  } // end insertLast()

  // getAt() find node at the given index
  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // check index out of bound or empty linkedlist
    return null;
  } // end getAt()

  // removeAt() removes node at a particular index
  removeAt(index) {
    // check empty linked list
    if (!this.head) {
      return;
    }
    // single node in the chain
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    // if previous doesn't exist or previous.next doesn't exist
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next; // skip the one in the middle
  } // end removeAt()

  // insertAt() inserts a node at a given index in the chain
  insertAt(data, index) {
    // check empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    // insert at index 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // insert node at any given index
    const previous = this.getAt(index - 1) || this.getLast;
    const node = new Node(data, previous.next);
    previous.next = node;
  } // end insertAt()
} // end LinkedList Class

console.log("\n-----------------------------------------------------------");

// const list = new LinkedList();
// list.head = new Node(10);

const node1 = new Node(5);
const list = new LinkedList();
list.head = node1;
list.insertFirst(7);
list.insertFirst(10);
list.insertFirst(15);
list.insertFirst(25);
console.log(JSON.stringify(list));
console.log("size of the linkedlist: " + list.size());
// Convert Object to string
console.log("Get first node: " + JSON.stringify(list.getFirst()));
console.log("Get last node: " + JSON.stringify(list.getLast()));
// clear linked list
// list.clear();
// console.log("clear linked list: " + JSON.stringify(list.size()));

// remove first node
list.removeFirst();
console.log("LinkedList after calling removeFirst: " + JSON.stringify(list));

// remove last node
list.removeLast();
console.log("LinkedList after calling removeFirst: " + JSON.stringify(list));

// insertLast()
list.insertLast(100);
console.log("LinkedList after calling insertLast: " + JSON.stringify(list));

// getAt()
console.log("getAt(2): " + JSON.stringify(list.getAt(2)));

// removeAt()
console.log();
list.removeAt(1);
console.log("Linked list after removeAt(1):");
console.log(JSON.stringify(list));

// insertAt()
console.log();
list.insertAt(50, 2);
console.log("Linked list after insertAT(50,2):");
console.log(JSON.stringify(list));

console.log("\n-----------------------------------------------------------");

module.exports = { Node, LinkedList };
