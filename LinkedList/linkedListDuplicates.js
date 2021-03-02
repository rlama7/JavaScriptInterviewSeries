/**
 * linkedLIstDuplicates.js      - A program to remove duplicate values from a given linkedlist.
 * @author                      - Ratna Lama
 * @version                     - 1.0.0
 * @description                 - LinkedList nodes are sorted in order. The modified LinkedList
 *                                should be in place, i.e., don't create a brand new list. And the
 *                                the modified list should have nodes sorted in order.
 *
 * Example -
 *
 * linkedlist: 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 5 -> 5 -> 5-> 5
 *             |
 *          Head Node
 *
 * expected: 1 -> 2 -> 3 -> 4 -> 5
 *
 * Algorithm:
 *
 */

class LinkedList {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function removeLinkedListDuplicates(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null && currentNode.next !== null) {
    // check for duplicate data
    if (currentNode.data === currentNode.next.data) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}
