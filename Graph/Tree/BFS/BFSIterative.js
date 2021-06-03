/**
 * BFSIterative.js      - A program to find the breadth first traversal of a Binary Tree in JavaScript.
 * @author              - Ratna Lama
 * @version             - 1.0.0
 * @description         - An iterative approach to find the breadth first traversal or level order traversal
 *                        of a Binary Tree in JavaScript.
 * @param {*} root root node
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

// create nodes
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

// create node hierarchy
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

// time O(n) -> linear we'll need to visit all the n Nodes
//  space O(n) -> we'll need to store at most n Nodes in the queue
const BFSIterative = (root) => {
  /**
   * Breadth first traversal is also known as level order traversal becuase
   * we visit all the nodes in the save level before visting nodes in
   * a different level.
   *
   * We'll need to use Queue Data structure which operates on First In First Out order
   * Out <--- [1,2,3,4,5] <-- IN
   *
   * Imagine a number queue above, and number can exit only from the front and
   * numbers can queue only from the back.
   *
   * If we pull any number from the queue, the first number which is 1 will
   * exit first since it is the first in the line .
   *
   * If we need to queue any number say 100, then we'll place it at the back
   * then it'll also EXIT LAST
   *
   * Once we pull out item from the queue, we'll marke it and/or store for letter
   * transformation/display purpose, then if it's left and right children exits,
   * we'll add those to the queue
   *
   * we'll repeat this process as long as there are items in the queue.
   */
  const queue = [root]; // initialize queue with the root node
  const storeNode = []; // this is where we'll store visited nodes for later display

  while (queue.length) {
    // get the first item from the front of the queue
    const currentNode = queue.shift();
    storeNode.push(currentNode.data);

    // if the left has children push it to the queue
    if (currentNode.left !== null) queue.push(currentNode.left);

    // if the right has children push it to the queue
    if (currentNode.right !== null) queue.push(currentNode.right);
  }
  return storeNode;
};

console.log(BFSIterative(A)); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

/**
 * Given a root of a tree, find the max depth
 * @param {*} root root node
 */
const maxDepth = (root) => {
  // base case
  // if the root is empty return 0
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(`Max Depth is: ${maxDepth(A)}`); // Max Depth is: 3
