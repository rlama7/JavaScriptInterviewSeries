/**
 * fromLast.js          -A program to find the element n spaces from the last node in the linked list, given
 *                       a LinkedList and an index.
 * @authoer              Ratna Lama
 * @version              1.0
 * @since                08/04/2019
 *
 * @description:
 * Implementation of Linked List Data structure: Singly/Double/Circulare Linked List
 * Assume that the n will always be less than the length of the linked list
 * DO NOT USE a counter variable and DO NOT retrieve the size of the list, only ITERATE through the list.
 * if the Linkedlist has an even number of node then consider the midpoint as the half - 1 location as the midpoint
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // move fast by n number of spaces
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // move both fast and slow until fast finds the last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
} // end fromLast()

module.exports = fromLast;
