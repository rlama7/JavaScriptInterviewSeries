/**
 * binarySearchTree.js    -A program to implement a binary search tree.
 * @author                 Ratna Lama
 * @version                1.0
 * @since                  08/07/2019
 *
 * @description:
 * Implementation of Binary Search Tree
 * Binary Search Tree can only have 2 children at most per parent node
 * Also every node's left hand child is less than the parent node's value, and
 * that every node's right hand child is greater than the parent.
 *
 * Time Complexity for Search and Access: O(log(n)) --> Average Case
 * Time Complexity for Insertion and Deletion: O(log(n)) --> Average Case
 * Worst Case Time complexity: O(n)
 */

class Node {
  // Constructor
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  } // end constructor

  // insert(data)
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  } // end insert()

  // contains()
  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  } // end contains()

  // remove()
} // end Node Class

module.exports = Node;
