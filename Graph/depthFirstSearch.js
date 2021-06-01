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

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  // Add to graph
  addToGraph(node) {
    this.nodes.push(node);
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

console.log(graph.nodes[0].edgesList[0]);
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
