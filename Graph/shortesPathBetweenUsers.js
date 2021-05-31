/**
 * shortestPathBetweenUsers.js - A program to find the shortest paht between two connected users.
 * @author                     - Ratna Lama
 * @version                    - 1.0.0
 * @description                - Given a graph of users and their connections, find the smallest
 *                               distance between two users
 *                               Given the inputs Hannah and Mable, the answer should be 2 and the path
 *                               ["Hannah", "Liz", "Mable"] should be returned
 *
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }

  // connect nodes
  connect(node) {
    // consider undirected graphs
    // such that there is connection from A to B
    // and also connection from B to A
    this.edgesList.push(node);
    node.edgesList.push(this);
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

  // add to graph
  addToGraph(node) {
    this.nodes.push(node);
  }
}
