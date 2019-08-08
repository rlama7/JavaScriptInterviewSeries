/**
 * levelWidth.js    -A program to find the level width of a tree.
 * @authoer          Ratna Lama
 * @version          1.0
 * @since            08/07/2019
 *
 * @description:
 * Implementation of Tree Data structure.
 * Create a Node class
 * Create a Tree class
 * Implement BreadthFirstSearch
 * Implement DepthFirstSearch
 *
 * Give the root node of a tree, return an array where each elemet is the width of
 * the tree at each level
 *       0
 *  /    |  \
 *  1    2  3
 *  |       |
 *  4       5
 * ==> [1, 3, 2] --> BreadFirstSearch
 *
 * Time Complexity for Search and Access:
 * Time Complexity for Insertion and Deletion:
 */

function levelWidth(root) {
  const counter = [0];
  const arr = [root, "s"];

  while (arr.length > 1) {
    // The shift() method removes the first element from an array and returns that removed element. This method // // changes the length of the array.
    const node = arr.shift;
    if (node === "s") {
      counter.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
    }
  }
  return counter;
} // end levelWidth()

module.exports = levelWidth;
