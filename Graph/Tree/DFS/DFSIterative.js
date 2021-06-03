/**
 *             A
 *          /    \
 *        /       \
 *       B         C
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G
 */

// node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create Node
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

// let's assign node hierarchy
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

console.log('\n-----DFS Pre-Order Traversal-----------');
/**
 * preOrderTraversal
 *
 * <root> <left> <right>
 * [A, B, D, E, C, F, G]
 * @param {*} root root node
 */
const DFSIterativePreOrderTraversal = (root) => {
  // we'll use stack datastructure
  // that follows Last In First Out LIFO order to process data
  const stack = [root];
  const storeNode = [];

  // we'll iterate as long as stack is NOT empty
  while (stack.length) {
    // pop of the stack and explore its children
    const currentNode = stack.pop();
    storeNode.push(currentNode.data);

    // Next let's explore current node's rigt child and left child respectively
    // since the stack datastructure uses Last in First out, we'll need make sure
    // that the left is the last to push into the stack
    // for pre-order traversal
    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }
  return storeNode;
};

console.log(DFSIterativePreOrderTraversal(A)); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']

console.log('\n-----DFS In-Order Traversal-----------');

/**
 * inOrderTraversal
 * <left> <root> <right>
 * [D, B, E, A, C, F, G]
 * @param {*} root root node
 */
const DFSIterativeInOrderTraversal = (root) => {
  // we'll again use stack data structure
  // for In order Traversal, we
  // need to explore left first, then root then ONLy right
  const stack = [root];
  const storeNode = [];

  while (stack.length) {
    const currentNode = stack.pop();
    // explore left child first
    // however snice stack operates in Last In First out Order we'll need to
    // explore right child first in order to achieve this goal
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }

    // then visit right child
    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    // then visit root
    storeNode.push(currentNode.data);
  }
  return storeNode;
};
console.log(DFSIterativeInOrderTraversal(A));

console.log('\n-----DFS Post-Order Traversal-----------');

/**
 * postOrderTraversal
 * <left> <right> <root>
 * [D, E, B, F, G, C, A]
 * @param {*} root root node
 */
const DFSIterativePostOrderTraversal = (root) => {
  const stack = [root];
  const storeNodeData = [];

  while (stack.length) {
    const currentNode = stack.pop();

    // since stack performs Last In Firt Out data operation
    // even though we need to explore left child first, we need to put
    // it to the stack last to make it explore first

    // every time push to the front of store where we keep node data
    storeNodeData.unshift(currentNode.data);

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
  }
  return storeNodeData;
};
console.log(DFSIterativePostOrderTraversal(A)); // ['D', 'E', 'B', 'F', 'G', 'C', 'A' ]
