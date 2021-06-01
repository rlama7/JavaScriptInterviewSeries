/**
 * Depth First Travel
 *
 * Traverses deeply into the data structure by
 * exploring all nodes on a branch going forward until you
 * reach the node you are searching for or a leaf node - node with NO children
 *
 * Backtrack up the branch until you reach a new branch to explore
 *
 * Uses a stack data structure.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }

  // connect nodes
  // we will consider undirected nodes here so
  // if there is a connection from A to B
  // there also exists a connection from B to A
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
  // get adjacent nodes
  getAdjacentNodes() {
    return this.edgesList;
  }
  // is there a connection between nodes
  isConnected(node) {
    return !!this.edgesList.find((edge) => edge.data === node.data);
  }
}

class Graph {}
