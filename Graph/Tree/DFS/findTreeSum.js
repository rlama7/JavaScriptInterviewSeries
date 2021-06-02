class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create a node
const THREE = new Node(3);
const FOUR = new Node(4);
const FIVE = new Node(5);
const SEVEN = new Node(-7);
const TEN = new Node(10);
const NINE = new Node(9);
const TWELVE = new Node(12);

// assign hierarchy
THREE.left = FOUR;
THREE.right = FIVE;
FOUR.left = SEVEN;
FOUR.right = TEN;
FIVE.left = NINE;
FIVE.right = TWELVE;

/**
 * Given a tree below the sum ---> 3 + 4 + (-7) + 10 + 5 + 9 + 12  ---> 36
 *             3
 *          /    \
 *        /       \
 *       4         5
 *     /  \      /  \
 *    /    \    /    \
 *   -7    10  9     12
 */
/**
 * Given a Tree, find the sum of the tree nodes
 * @param {*} root root node of a Tree
 *
 * Time complexity
 * time O(n) --> linear we'll need to visit all the n Nodes.
 * space O(n) --> linear since we'll need to store at most n Nodes in the stack
 */
const findTreeSumIterative = (root) => {
  // traverse the tree
  // depth first traversal fashion
  // when each node is visited collect the sum
  let sum = 0;
  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode !== null) {
      sum += currentNode.data;
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
  }
  return sum;
};

console.log(findTreeSumIterative(THREE)); // 36

/**
 * Recursive approach to the find tree sum solution
 * @param {*} root root node
 *
 * Time complexity
 * time O(n) --> linear we'll need to visit all the n Nodes.
 * space O(n) --> linear since we'll need to store at most n Nodes in the call stack
 */
const findTreeSumRecursive = (root) => {
  // base case if root is empty return 0
  if (root === null) return 0;

  return (
    findTreeSumRecursive(root.left) +
    root.data +
    findTreeSumRecursive(root.right)
  );
};

console.log(findTreeSumRecursive(THREE)); // 36
