class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 *
 * Input: 1 --> 2 --> 3 --> 4 --> 5
 * Output: 1 <-- 2 <-- 3 <-- 4 <-- 5
 *
 * @param {*} node linkedlist node that needs to be reversed
 */
const reverseLinkedList = (node) => {
  let previous = (next = null),
    current = node;

  // while the node.next is defined we need to iterate
  // the while loop will exit when it is not defined
  while (node.next) {
    // let's revers the first linkedlist item
    // preserve the next node spot
    next = current.next;

    // this is where the reversal happens
    current.next = previous;
    // advance current and previous such that both the current and the next pointer
    // to the next node in the linked list
    previous = current;
    current = next;

    // we'll repeat this process until we have reached the end of the linkedlist
    // i.e., when we've encounter null
  }

  // by this point we should have reversed the linked list and
  // the head of the newly reversed linked list as in the output diagram
  // will be held by previous so we simply return than
  return previous;
};
