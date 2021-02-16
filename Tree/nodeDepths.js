/**
 * nodeDepth.js     - A program to calculate the sum of depth of a tree
 * @author          - Ratna Lama
 * @since           - 1.0.0
 * @description     -
 *
 * Time Complexity: O(n) - linear
 * Space Complexity: O(n) - linear
 *
 */

class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node === null) continue;
    sumOfDepths += depth;

    // check left
    stack.push({ node: node.left, depth: depth + 1 });
    // check right
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}
