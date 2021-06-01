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

  reconstructPath(visitedNodes, startNode, endNode) {
    let currentNode = endNode;
    const shortestPath = [];
    while (currentNode !== null) {
      shortestPath.push(currentNode);
      currentNode = visitedNodes.get(currentNode);
    }
    return shortestPath.reverse();
  }

  /**
   *
   * @param {*} startNode
   * @param {*} endNode
   */
  breadthFirstSearch(startNode, endNode) {
    const queue = [startNode];

    // track visited node and rember where the parents are
    const visitedNodes = new Map();
    visitedNodes.set(startNode.data, null);

    while (queue.length) {
      // get the first node from the queue
      const node = queue.shift();

      if (node.data === endNode.data) {
        console.log('Found it!');
        return this.reconstructPath(visitedNodes, startNode, endNode);
      }

      // add its neighbors to the queue
      // track where nodes that we are adding are coming from
      for (const adjacency of node.edgesList) {
        if (!visitedNodes.has(adjacency.data)) {
          visitedNodes.set(adjacency.data, node);
          queue.push(adjacency);
          console.log(adjacency.data);
        }
      }
    }
    console.log(visitedNodes);
  }
}

// create nodes
const HANNAH = new Node('Hannah');
const MEL = new Node('Mel');
const MAX = new Node('Max');
const MARY = new Node('Mary');
const LIZ = new Node('Liz');
const NIS = new Node('Nis');
const DAN = new Node('Dan');
const YAIR = new Node('Yair');
const CHRIS = new Node('Chris');
const NICOLETTE = new Node('Nicolette');
const MABEL = new Node('Mabel');

// create a graph
const graph = new Graph([
  HANNAH,
  MEL,
  MAX,
  MARY,
  LIZ,
  NIS,
  DAN,
  YAIR,
  CHRIS,
  NICOLETTE,
  MABEL,
]);

// connect nodes
HANNAH.connect(MEL);
HANNAH.connect(MAX);
HANNAH.connect(MARY);
HANNAH.connect(LIZ);
HANNAH.connect(NIS);
MEL.connect(MAX);
LIZ.connect(MABEL);
LIZ.connect(YAIR);
NIS.connect(DAN);
NIS.connect(CHRIS);
NIS.connect(YAIR);
CHRIS.connect(NICOLETTE);
YAIR.connect(MABEL);

console.log(graph.breadthFirstSearch(HANNAH, MABEL));
