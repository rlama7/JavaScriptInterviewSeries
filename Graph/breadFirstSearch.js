/**
 * Breadth First Traversal
 *
 * Traverses broad into the data structure by visiting neighbor nodes before
 * children nodes
 *
 * Uses a queue data structure --> First In First out
 *
 */

/**
 * Node Class
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

/**
 * Graph class
 */
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  // add to graph
  addToGrpah(node) {
    this.nodes.push(node);
  }

  /**
   * Breadth first search has a time complexity of O(v+e) wherere v is
   * the number of vertices and e is the number of edges
   *
   * The space complexity is O(v) -> queue can grow only as large as number of vertices
   *
   * Uses cases: find the shortest path:
   *
   *
   * @param {*} startNode starting node
   * @param {*} endNode end node
   */
  breadthFirstTraversal(startNode, endNode) {
    // use queue datastructure
    // queue uses first in first out
    // initialize queue with the start node
    // pull the first node from queue to traverse its children
    // add it's adjacencies to the queue
    // mark the visited node
    // we will want to add only those nodes that have NOT been visited
    // so we can avoid going round and round in circle to infinity.
    // repeat the process for all the node and its children until the queue is empty.

    const queue = [startNode];
    const visitedNodes = new Set();
    visitedNodes.add(startNode);

    while (queue.length) {
      // pull node queue to visit

      // if the node is the end node found it return

      // If the node is NOT already visited
      // add its adjacency to the queue
      // updated the visited list as well

      const node = queue.shift();

      if (node.data === endNode.data) {
        console.log('Found it!');
        return;
      }

      for (const adjacency of node.edgesList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }
      }
      console.log(node.data);
    }
  }
}

// nodes
const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SFO = new Node('SFO');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

console.log(SFO); // Node { data: 'SFO', edgesList: [] }

// graph
const graph = new Graph([DFW, JFK, LAX, HNL, SFO, EWR, BOS, MIA, MCO, PBI]);
console.log(graph);
/**
 Graph {
  nodes: [
    Node { data: 'DFW', edgesList: [] },
    Node { data: 'JFK', edgesList: [] },
    Node { data: 'LAX', edgesList: [] },
    Node { data: 'HNL', edgesList: [] },
    Node { data: 'SFO', edgesList: [] },
    Node { data: 'EWR', edgesList: [] },
    Node { data: 'BOS', edgesList: [] },
    Node { data: 'MIA', edgesList: [] },
    Node { data: 'MCO', edgesList: [] },
    Node { data: 'PBI', edgesList: [] }
  ]
}
 */

// connections
DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SFO);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
MCO.connect(PBI);

console.log(SFO);
/**
 Node {
  data: 'SFO',
  edgesList: [ Node { data: 'LAX', edgesList: [Array] } ]
}
 */

graph.breadthFirstTraversal(SFO, MIA); // SFO --> LAX DFW HNL EWR JFK BOS MIA MCO PBI
