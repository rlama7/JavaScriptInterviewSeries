/**
 * A program to represent a Binary Search Tree.
 * A Binary Tree enforces at most 2 childrens.
 * A Binary Search Tree is a Binary Tree that enforces:
 *  - at most 2 childrens
 *  - left children must be less than the root
 *  - right children must be greater or equal to the root
 *
 *
 * tree =             10
 *                /        \
 *               5          15
 *              /             \
 *             0              20
 *            /   \
 *           -5   3
 *
 *               |   |     |    |
 *            [ .  leaf nodes ]
 *
 *
 *
 *
 *
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    // base case
    if (data === this.data) return this;

    // if the data is less than the root and there are right children
    // recurse on the right
    if (data > this.data && this.right) {
      this.right.contains(data);
    }

    if (data < this.data && this.left) {
      this.left.contains(data);
    }

    // by this point if we don't find the data then we couldnt find data.
    return false;
  }
}
