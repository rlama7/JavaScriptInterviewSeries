/**
 * treeTraversal.js      - A program to traverse through the tree in a depth first / breadth first search fashion.
 * @author               - Ratna Lama
 * @since                - 1.0.0
 * @description          - Traverse through the tree in a depth first / breadth first search fashion
 *
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
 * depthFirstSearch = [1,2,4,5,3,6,7]
 *
 * breadthFirstSearch = [1, 2, 3, 4,5,6,7]
 *
 *
 * Time Complexity: O(n) = linear
 * Space Complexity: O(n) = linear
 */
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  depthFirsthSearch(array) {
    array.push(this.data);
    for (const child of this.children) {
      child.depthFirsthSearch(array);
    }
    return array;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      array.push(current.data);
      for (const child of currrent.children) {
        queue.push(child);
      }
    }
  }
}
module.export = Node;
