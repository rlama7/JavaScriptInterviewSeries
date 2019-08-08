/**
 * midPoint.js      -A program to find the middle node of a linked list chain
 * @author           Ratna Lama
 * @version          1.0
 * @since            08/04/2019
 *
 * @description:
 * Implementation of Linked List Data structure: Singly/Double/Circulare Linked List
 * DO NOT USE a counter variable and DO NOT retrieve the size of the list, only ITERATE through the list.
 * if the Linkedlist has an even number of node then consider the midpoint as the half - 1 location as the midpoint
 * Time Complexity for Search and Access: O(n)
 * Time Complexity for Insertion and Deletion: O(1) *
 */

const list = require("linkedList.js");

function midPoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // loop until two nodes after fast are found
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
} // end midPoint()

module.exports = midPoint;
