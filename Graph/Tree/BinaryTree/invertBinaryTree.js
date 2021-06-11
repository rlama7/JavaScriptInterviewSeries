/**
 * invertBinaryTree.js  - A program to invert a binary tree.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - A Binary Tree is a type of graph with at most two left and right child.
 *                        To invert a binary tree means to swap every left node in the tree for its
 *                        corresponding right node.
 *
 * --->Example<---
 *
 * tree =             1
 *                /      \
 *               2         3
 *             /   \     /   \
 *            4    5    6     7
 *         /    \
 *        8     9
 *
 *
 * Inverted tree =
 *                   1
 *                /      \
 *               3        2
 *             /   \     /   \
 *            7    6    5     4
 *                          /    \
 *                         9      8
 *
 *
 *
 * --->INPUT<---
 *
 * --->OUTPUT<---
 *
 * --->CONSTRAINTS/RESTRICTIONS<---
 *
 * --->EDGE CASES<---
 *
 * --->TIME COMPLEXITY<---
 * time O() ->
 * space O() ->
 *
 *
 * @param {*} root root node of a Binary tree that needs to be inverted
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create a node
const ONE = new Node(1);
const TWO = new Node(2);
const THREE = new Node(3);
const FOUR = new Node(4);
const FIVE = new Node(5);
const SIX = new Node(6);
const SEVEN = new Node(7);
const EIGHT = new Node(8);
const NINE = new Node(9);

// establish a node hierarchy
ONE.left = TWO;
ONE.right = THREE;
TWO.left = FOUR;
TWO.right = FIVE;
FOUR.left = EIGHT;
FOUR.right = NINE;
THREE.left = SIX;
THREE.right = SEVEN;

const invertBinaryTree = (root) => {
  // base case
  if (root === null) return;

  // start at the root node
  // swap the left and the right node
  // recursively call the invertBinaryTree  on left and right

  let temp = root.right;
  right = root.left;
  left = temp;
  //   root.left = right;
  //   root.right = left;
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
};

console.log(ONE);

console.log(invertBinaryTree(ONE));
