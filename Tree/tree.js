/**
 * tree.js          -A program to implement a tree data structure.
 * @author           Ratna Lama
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
 * Time Complexity for Search and Access:
 * Time Complexity for Insertion and Deletion:
 */

class Node {
  // Constructor
  constructor(data) {
    this.data = data;
    this.children = [];
  } // end Constructor

  /**
   * add() - creates a node with data and push it to the children []
   * @param {*} data to be added to the children node
   */
  add(data) {
    this.children.push(new Node(data));
  } // end add()

  /**
   * remove() - given some data, look at each child of the current node and remove
   *            any node with data === data
   * @param {*} data node with the data to be removed from
   */
  remove(data) {
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  } // end remove()
} // end Node Class

class Tree {
  // Constructor
  constructor() {
    this.root = null;
  } // end constructor

  // BeardthFirstSearch (BFS) - start from the root but traverse from left to right for each level of the tree
  traverseBFS(fn) {
    const arr = [this.root];
    while (arr.length) {
      // The shift() method removes the first element from an array and returns that removed element. This method /// changes the length of the array.
      const node = arr.shift();
      // arr.push(...node.children)  // alternatively use ES2015 spread operator
      for (let child of node.children) {
        arr.push(child); // add to the end of the array
      }
      fn(node);
    }
  } // end traverseBFS()

  // DepthFirstSearch (DFS) - Start from the root and get to the depth of the tree asap until the leaf node
  // is found, then repeat the process from the parent node
  traverseDFS(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      // The unshift() method adds one or more elements to the beginning of an array and returns the new length of // the array.
      arr.unshift(...node.children);
      fn(node);
    }
  } // end traverseDFS()
} // end Tree Class

// instantiation
const node = new Node(1);
const tree = new Tree();
tree.root = node;

module.exports = { Node, Tree };
