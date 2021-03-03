/**
 * reverseSinglyLinkedList.js       - A program to reverse a Singly LinkedList both iteratively and recursively.
 * @author                          - Ratna Lama
 * @version                         - 1.0.0
 * @description
 *
 * Example -
 * list = 1 -> 2 -> 3 -> 4 -> null
 * reverseList = 4 -> 3 -> 2 -> 1 -> null
 *
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Iteravtive approach
 * Time Complexity: O(n) --> Lineare
 * Space Complexity: O(1) --> Constant
 * */
function reverseSinglyLinkedListIteratively(linkedList) {
  // initial pointers
  let previous = null;
  let current = linkedList;
  let next = null;

  while (current !== null) {
    // save next before we overwrite current.next
    next = current.next;

    // reverse
    current.next = previous;

    // Advance previous and current
    previous = current;
    current = next;
  }

  // when we exit the loop previous was the tail of the original list
  // and also the head of the newly reversed list
  // return head of the newly reversed linkedList at the end
  return previous;
}

/**
 * Recursive approach
 * Time Complexity: O(n) -> Linear
 * Space Complexity: O(n) -> Linear due to call stack frame
 *  */
function reverseSinglyLinkedListRecursively(linkedList) {
  if (!linkedList || !linkedList.next) {
    return linkedList;
  }
  let temp = reverseSinglyLinkedListIteratively(linkedList.next);
  linkedList.next.next = linkedList;
  linkedList.next = undefined;
  return temp;
}
