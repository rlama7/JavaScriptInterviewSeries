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

// establish a hierarchy
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

console.log('\n-------Depth First Search of Tree Iterative Approach-------');
/**
 * In a depth first traversal we explore the node and its children as deep as possible
 * before explore its other children
 *
 * @param {*} root root node
 *
 * Time Complexity
 *
 * time O(n) --> linear --> no# of nodes
 * space O(n) --> linear --> no# of nodes
 */
const depthFirstTreeTraversalIterative = (root) => {
  /**
   *          A
   *        /  \
   *       B    C
   *      / |    \
   *     D  E     F
   *
   * initialize a stack with the root node.
   * stack data structure works in Last in First Out order
   *
   *       IN   Out  ---> Last In First Out order
   *        |   |
   *    |           |
   *    |           |
   *    |           |
   *    |___________|
   *
   *
   * while the stack has a node, pop the node
   * print it then push its children to the stack
   * and repat the process
   */
  const stack = [root];
  const storeNode = [];

  while (stack.length) {
    // pop the stack which yeilds the top node on the stack
    // to explore its children on the right and then on the left
    const currentNode = stack.pop();
    storeNode.push(currentNode.data);
    // explore right and left children
    // we can only explore left and right children if the node is not null

    // the order of the right or left doesn't matter
    // for the general depth first search traversal
    // however if want to perform traversal in
    // a specific order: pre/post/in order traversal then
    // the order in which they are pushed to the stack
    // makes the differernce
    // always in the sTACK datastructure LAST node pops out first
    if (currentNode.right !== null) stack.push(currentNode.right);
    if (currentNode.left !== null) stack.push(currentNode.left);
  }
  return storeNode;
};

console.log(depthFirstTreeTraversalIterative(A)); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

console.log('\n-------Depth First Search of Tree Recursive Approach-------');

/**
 *
 * @param {*} root root node
 *
 * time complexity O(n) -> linear
 * space complexity O(n) -> linear due to call stack use
 */
const depthFirstTreeTraversalRecursive = (root) => {
  //   const storeNode = [];
  // if the tree is empty exit
  if (root === null) return;

  console.log(root.data);
  depthFirstTreeTraversalRecursive(root.left);
  depthFirstTreeTraversalRecursive(root.right);
};

console.log(depthFirstTreeTraversalRecursive(A)); // A B D E C F
