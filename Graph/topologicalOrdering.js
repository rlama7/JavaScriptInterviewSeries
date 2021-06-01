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

  topologicalSort() {
    const visitedNode = new Set();
    const topologicalSortOrder = [];
    for (const node of this.nodes) {
      this.depthFirstTraversal(node, visitedNode, topologicalSortOrder);
    }

    // need to revese the order to get the right order
    return topologicalSortOrder.reverse();
  }

  depthFirstTraversal(startNode, visitedNode, topologicalSortOrder) {
    if (visitedNode.has(startNode)) return;

    visitedNode.add(startNode);
    console.log('Visiting node ', startNode.data);

    for (const adjacency of startNode.edgesList) {
      this.depthFirstTraversal(adjacency, visitedNode, topologicalSortOrder);
    }

    // About to POP start Node off the stack. we'll need to add it to ordering list
    topologicalSortOrder.push(startNode);
  }
}

// create nodes
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

// connect nodes
A.connect(B);
A.connect(C);
E.connect(C);
E.connect(F);
B.connect(D);
D.connect(F);

// create graph
const graph = new Graph([A, B, C, D, E, F]);

console.log(graph);
/**
 Graph {
  nodes: [
    Node { data: 'A', edgesList: [Array] },
    Node { data: 'B', edgesList: [Array] },
    Node { data: 'C', edgesList: [] },
    Node { data: 'D', edgesList: [Array] },
    Node { data: 'E', edgesList: [Array] },
    Node { data: 'F', edgesList: [] }
  ]
}
 */

/**
 Visiting node  A
Visiting node  B
Visiting node  D
Visiting node  F
Visiting node  C
Visiting node  E
 */

console.log(graph.topologicalSort());
/**
 * [
  Node { data: 'E', edgesList: [ [Node], [Node] ] },
  Node { data: 'A', edgesList: [ [Node], [Node] ] },
  Node { data: 'C', edgesList: [] },
  Node { data: 'B', edgesList: [ [Node] ] },
  Node { data: 'D', edgesList: [ [Node] ] },
  Node { data: 'F', edgesList: [] }
]
 */
