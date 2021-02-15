function closestValueInBSTRecursive(tree, target) {
  return findClosestValueBSTHelper(tree, target, tree.value);
}

function findClosestValueBSTHelper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueBSTHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueBSTHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * tree
 *
 *              10
 *            /     \
 *          5       15
 *        /  \      /  \
 *       2   5     13  22
 *      /          / \
 *     1             14
 *
 *    target = 12
 *
 * OUTPUT: 13 is the closest value
 */

let tree = {
  nodes: [
    { left: '5', right: '15', value: 10 },
    { left: '13', right: '22', value: 15 },
    { left: null, right: null, value: 22 },
    { left: null, right: '14', value: 13 },
    { left: null, right: null, value: 14 },
    { left: '2', right: '5', value: 5 },
    { left: null, right: 5, value: 5 },
    { left: '1', right: null, value: 2 },
    { left: null, right: null, value: 1 },
  ],
};

const target = 13;

console.log(closestValueInBSTRecursive(tree, target));
