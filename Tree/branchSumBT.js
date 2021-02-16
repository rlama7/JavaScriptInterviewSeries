/**
 * branchSumBT.js  - A program to calculate sum of branches in a Binary Tree.
 * @author         - Ratna Lama
 * @since          - 1.0.0
 * @description   -
 */

class BinaryTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Give a Binary Tree (BT) find a list of sum of its branches from the
 * leftmost branch to the rightmost branch
 * @param {*} root a tree whose sum needs to be computed
 *
 * tree =             1
 *                /       \
 *               2         3
 *              /  \      /  \
 *             4   5     6   7
 *
 *             |   |     |    |
 *            [ .  leaf nodes ]
 *
 *
 * 1+2+4 = 7
 * 1+2+5 = 8
 * 1+3+6 = 10
 * 1+3+7 = 11
 *
 * Outpur = [7,8,10,11]
 *
 * Tme Complexity: O(n) - linear
 * Space Complexity: O(n) - linear
 *
 */

const branchSums = (root) => {
  const sums = [];
  let runningSum = 0;
  calcBranchSum(root, runningSum, sums);
  return sums;
};

const calcBranchSum = (node, runningSum, sums) => {
  if (!node) return;

  const newRunningSum = runningSum + node.data;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }

  calcBranchSum(node.left, newRunningSum, sums);
  calcBranchSum(node.right, newRunningSum, sums);
};
