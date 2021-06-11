class Node {
  // default next to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert node in the beginning
  // make sure to handle edge cases when there are existing nodes
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // find size of the linkedlist
  size() {
    let count = 0;
    let node = this.head; // get reference to head node

    while (node) {
      // while the node exists iterate the list
      count++;
      node = node.next; // move the chain
    }
    return count;
  }

  // get first node in the linkedlist
  getFirst() {
    // this.head has the reference to the linkedlist so we just return that
    return this.head;
  }

  //get Last node in the linked list
  getLast() {
    // if the head is null then return null
    if (!this.head) return null;

    // else iterate over the list and get the last node

    // get the reference to head node
    let node = this.head;
    while (node) {
      // if the node.next does not exist
      // then return that node
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // clear removes all the linkedlist
  clear() {
    //  as far as the linkedlist class is concercerned
    // if the head node looses the reference then the rest
    // node is lost and garbage collected
    this.head = null;
  }

  // remove first
  // if the head points two more than a single node in that
  // case move the reference of the head node to the second node
  removeFirst() {
    // if the head node is return
    if (!this.head) return;

    // before we remove the reference of the head node capture it

    this.head = this.head.next;
  }
}

/**
 * Display
 */
const nodeOne = new Node(5);
const linkedList = new LinkedList();

linkedList.head = nodeOne;
// console.log(linkedList); // LinkedList { head: Node { data: 5, next: null } }

linkedList.insertFirst(15);
linkedList.insertFirst(25);
linkedList.insertFirst(35);
linkedList.insertFirst(45);
// console.log(linkedList);
// // LinkedList {
//     head: Node { data: 15, next: Node { data: 5, next: null } }
//   }

console.log(linkedList.size()); // 5
console.log(linkedList.getFirst());
//Node {
// data: 45,
// next: Node { data: 35, next: Node { data: 25, next: [Node] } }
//   }
console.log(linkedList.getLast()); // Node { data: 5, next: null }
