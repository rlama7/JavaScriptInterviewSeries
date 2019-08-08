/**
 * circularList.js      -A program to find if a linked list chain is circular
 * @author               Ratna Lama
 * @version              1.0
 * @since                08/04/2019
 *
 * @description:
 * Implementation of Linked List Data structure: Singly/Double/Circulare Linked List
 * DO NOT USE a counter variable and DO NOT retrieve the size of the list, only ITERATE through the list.
 * if the Linkedlist has an even number of node then consider the midpoint as the half - 1 location as the midpoint
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // loop through as long as two next values after fast are defined
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    // if the node are the same
    if (slow === fast) {
      return true;
    }
  }
  // if we reach this line that means we don't have a circular LinkedList
  return false;
} // end circular()

module.exports = circular;
