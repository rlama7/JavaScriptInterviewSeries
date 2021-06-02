/**
 * REcursive approach to Bread first traversal
 * is NOT stratight forward so
 * stay with Iterative approach
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_2
 *
 */

// create nodes
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

// establish a hierarchy to the tree nodes
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

/**
 * Bread first traversal Recursive approach.
 * @param {*} root root node
 */
// const BFSRecursive = (root) => {
//   //empty tree return
//   //   if (root === null) return;

//   const queue = [root];
//   // base cae
//   // if a queue is empty return
//   if (queue.length < 1) return;

//   const currentNode = queue.shift();
//   console.log(currentNode.data);

//   if (currentNode.right !== null) queue.push(currentNode.right);
//   if (currentNode.left !== null) queue.push(currentNode.left);

//   BFSRecursive(queue);
// };

BFSRecursive(A); // A C G F B E D;
