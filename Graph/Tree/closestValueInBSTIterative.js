function closestValueinBSTIterative(tree, target) {
  return findClosestValueBSTHelper(tree, target, tree.value);
}

function findClosestValueBSTHelper(tree, target, closest) {
  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// input tree
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
