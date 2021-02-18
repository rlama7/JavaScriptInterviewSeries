/**
 * treeTraversal.js      - A program to traverse through the tree in a depth first / breadth first search fashion.
 * @author               - Ratna Lama
 * @since                - 1.0.0
 * @description          - Traverse through the tree in a depth first / breadth first search fashion
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
