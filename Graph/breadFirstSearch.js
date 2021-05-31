/**
 * Breadth First Traversal
 *
 * Traverses broad into the data structure by visiting neighbor nodes before
 * children nodes
 *
 * Uses a queue data structure --> First In First out
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }
  // connect
  // for connecting nodes, we'll consider undirected graph
  // therefore A --- B refers to connection between A & B,
  // i.e., there is connection from A to B and B to A
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  // getAdjacentNodes
  getAdjacentNodes() {
    return this.edgesList;
  }

  // is connected
  isConnected(node) {
    return !!this.edgesList.find((edge) => edge.data === node.data);
  }
}

class Graph {}
