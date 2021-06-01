/**
 * Given a DAG (directed acyclic graph), return the topological orderging.
 *  - A topological ordering is such ordergin where every node in the DAG
 *  - comes before all the node it points to.
 *
 * Valid Topological ordering -
 * [A, C, B, D, F, E]
 * [A, ]
 */
class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }
  // connect nodes
  connect(node) {
    // Directed acyclic node
    // so there is only a single way connection to node
    // A-->B refers to connection from A to B but NOT from B to A
    this.edgesList.push(node);
  }

  // get adjacent nodes
  getAdjacentNodes() {
    return this.edgesList;
  }

  // is node connected
  isConnected(node) {
    return !!this.edgesList.find((edge) => edge.data === node.data);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}
