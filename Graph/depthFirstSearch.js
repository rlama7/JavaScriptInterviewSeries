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
 *
 * Depth First Search Use Cases:
 *
 * Detecting a cycle
 * Discover whether graph is bipartite
 *  - A graph whose vertices can be divided into two idependent sets
 * such as that eveyr edges connects a vertex int he first set to one
 * in the second set
 *
 * Finding a path between two nodes (not necessarily the shortest path)
 *
 * Topological sorting
 *  - where every node in a DAG (Directed acyclic graph)
 *    appears before all the nodes it points to
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

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  // Add to graph
  addToGraph(node) {
    this.nodes.push(node);
  }

  /**
   * Depth First Traversal
   * Keep traversing deeply until
   * you hit a leaf node and/or end node
   *
   * @param {*} startNode start node
   * @param {*} endNode end node
   *
   * Time Complexity:
   * Depth first search has a time complexity of O(v+e) where
   * v is the nubmer of vertices and e i is the number of edges
   * The space complexity is O(v) because the visited array will at most store
   * each vertex if we traverse the entire graph.
   *
   */
  depthFirstTraversal(startNode, endNode, visitedNode) {
    if (!visitedNode) {
      visitedNode = new Set();
    }
    // base case
    if (startNode.data === endNode.data) {
      console.log('Found it!');
      return;
    }

    console.log(`visting node ${startNode.data}`);
    visitedNode.add(startNode);

    for (const adjacency of startNode.edgesList) {
      if (!visitedNode.has(adjacency)) {
        this.depthFirstTraversal(adjacency, endNode, visitedNode);
      }
    }
  }
}

// create nodes
const DFW = new Node('DFW');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SFO = new Node('SFO');
const HKG = new Node('HKG');
const EWR = new Node('EWR');
const JFK = new Node('JFK');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

// create graphs
const graph = new Graph([DFW, LAX, SFO, HKG, EWR, JFK, BOS, MIA, MCO, PBI]);

// connect grpahs
DFW.connect(LAX);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SFO);
SFO.connect(HKG);
DFW.connect(JFK);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);

// console.log(graph.nodes[0].edgesList[0]);
/**
 Graph {
  nodes: [
    Node { data: 'DFW', edgesList: [Array] },
    Node { data: 'LAX', edgesList: [Array] },
    Node { data: 'SFO', edgesList: [Array] },
    Node { data: 'HKG', edgesList: [Array] },
    Node { data: 'EWR', edgesList: [Array] },
    Node { data: 'JFK', edgesList: [Array] },
    Node { data: 'BOS', edgesList: [Array] },
    Node { data: 'MIA', edgesList: [Array] },
    Node { data: 'MCO', edgesList: [Array] },
    Node { data: 'PBI', edgesList: [Array] }
  ]
}
 */

graph.depthFirstTraversal(DFW, HKG);
/**
 * visting node DFW
visting node LAX
visting node HNL
visting node EWR
visting node SFO
Found it!
visting node JFK
visting node BOS
visting node MIA
visting node MCO
visting node PBI
 */
