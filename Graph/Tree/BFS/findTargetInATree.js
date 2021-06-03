/**
 * findTargetInATree.js     - A program to find a target node in a given Binary Tree.
 * @author                  - Ratna Lama
 * @version                 - 1.0.0
 * @description             - Given a Binary Tree, find the target amongs the node of a Tree.
 *
 * @param {*} root root node
 * @param {*} target target to be searched in a Binary Tree
 *
 * --->Example<---
 * INPUT:
 *      a binary tree, target F
 * OUTPUT:
 *      target : F --> true
 *      target : Z --> false
 *
 *
 *             A    ------- H_1
 *          /    \
 *        /       \
 *       B         C ------- H_2
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_3
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create a node
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

// establish hierarchy in a tree'
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

const findTargetInATree = (root, target) => {
  /**
   * We'll perform breadth first Traversal
   * on every visit to the node we'll check if the node data equals targe
   * if yes then we'll return true
   * if not we'll continue the process until we exhaust all the nodes exploration
   * at the end if we've not found we'll return false;
   */
  const queue = [root];

  while (queue.length) {
    // get the first node out of the queue
    const currentNode = queue.shift();

    // target is found return true
    if (currentNode.data === target) return true;

    // if target is not found enqueue current nodes left and right children for further
    // epxloration
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }

  // if we've reached here means, we have not found target item in the given tree
  return false;
};

const target1 = 'F';
const target2 = 'Z';
console.log(findTargetInATree(A, target1)); // true
console.log(findTargetInATree(A, target2)); // false
