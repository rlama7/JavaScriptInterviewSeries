/**
 *             A
 *          /    \
 *        /       \
 *       B         C
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create node
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

// establish a node hierarcy
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

console.log('\n-------DFS Pre-Order Traversal-----------');

/**
 * preOrderTraversal
 * <root> <left> <right>
 *
 * [A, B, D, E, C, F, G]
 *
 * @param {*} root starting node
 */
const DFSPreOrderTraversalRecursive = (root) => {
  // base case
  // if tree is empty return
  if (root === null) return;
  console.log(root.data);
  DFSPreOrderTraversalRecursive(root.left);
  DFSPreOrderTraversalRecursive(root.right);
};

DFSPreOrderTraversalRecursive(A); // A B D E C F G

/**
 * inOrderTraversal
 * <left> <root> <right>
 *
 * [D, B, E, A, F, C, G]
 *
 * @param {*} root starting node
 */
console.log('\n-------DFS IN-Order Traversal-----------');
const DFSInOrderTraversalRecursive = (root) => {
  // baes case
  // if tree is empty return
  if (root === null) return;
  DFSInOrderTraversalRecursive(root.left);
  console.log(root.data);
  DFSInOrderTraversalRecursive(root.right);
};

DFSInOrderTraversalRecursive(A); // D B E A F C G

/**
 * postOrderTraversal
 * <left> <right> <root>
 * [D, E, B, F, G, C, A]
 *
 * @param {*} root starting node
 */
console.log('\n-------DFS POST-Order Traversal-----------');
const DFSPostOrderTraversalRecursive = (root) => {
  // base case
  // if root is empty return
  if (root === null) return;
  DFSPostOrderTraversalRecursive(root.left);
  DFSPostOrderTraversalRecursive(root.right);
  console.log(root.data);
};

DFSPostOrderTraversalRecursive(A); // D E B F G C A
