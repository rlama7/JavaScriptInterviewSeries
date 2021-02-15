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

  /**
   * Insert data to the node of the BST
   * @param {*} data to be inserted at the appropriate location of BST
   */
  insert(data) {
    if (data < this.data && this.left) {
      // left node exists
      this.left.insert(data);
    } else if (data < this.data) {
      // left node doesn't exist, i.e. leaf node
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // right node exists
      this.right.insert(data);
    } else if (data > this.data) {
      // right node doesn't exist, i.e. leaf node
      this.right = new Node(data);
    }
  } // end insert()

  /**
   * Find the data contained in the BST.
   * If the data doesn't exist then return null.
   * @param {*} data that is contined in the tree
   */
  contains(data) {
    if (this.data === data) {
      return this;
    }
    // check the right
    if (this.data < data && this.right) {
      return this.right.contains(data);
      // check the left
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    // data doesn't exist
    return null;
  } // end contains()

  // remove()
} // end Node Class

module.exports = Node;
