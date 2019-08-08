/**
 * validate.js            -A program to validate that a given tree is in fact a binary search tree, i.e,
 *                         Every node's left hand child is less than the parent node's value and that every
 *                         node's right hand child is greater than the parent.
 * @authoer                Ratna Lama
 * @version                1.0
 * @since                  08/07/2019
 *
 * @description:
 * Implementation of Binary Search Tree
 * Binary Search Tree can only have 2 children at most per parent node
 * Also every node's left hand child is less than the parent node's value, and
 * that every node's right hand child is greater than the parent.
 *
 * Time Complexity for Search and Access:
 * Time Complexity for Insertion and Deletion:
 */

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }
  // check left node and it's children
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  // check right node and it's children
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
} // end validate()

module.exports = validate;
