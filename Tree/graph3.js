class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }
  connect(node) {
    // undirected graph  A --- B two way connection
    // A to B connection
    this.edgesList.push(node);
    // B to A conection
    node.edgesList.push(this);
  }

  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.data);
  }

  isConnected(node) {
    return this.edgesList.map((edge) => edge.data).indexOf(node.data) > -1;
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

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

for (let node of graph.nodes) {
  console.log(`Node ${node.data} is connected to --> `);
  for (let connectedNode of node.edgesList) {
    console.log(`${connectedNode.data}`);
  }
}
/**
 Node A is connected to --> 
B
D
Node B is connected to --> 
A
C
Node C is connected to --> 
B
D
E
Node D is connected to --> 
A
C
E
Node E is connected to --> 
C
D
 */

console.log(nodeA.getAdjacentNodes()); // [ 'B', 'D' ]
console.log(nodeB.getAdjacentNodes()); // [ 'A', 'C' ]
console.log(nodeC.getAdjacentNodes()); // [ 'B', 'D', 'E']
console.log(nodeD.getAdjacentNodes()); // [ 'A', 'C', 'E' ]
console.log(nodeE.getAdjacentNodes()); // [ 'C', 'D' ]

console.log(nodeA.isConnected(nodeA)); // false
console.log(nodeA.isConnected(nodeB)); // true
console.log(nodeA.isConnected(nodeC)); // false
console.log(nodeA.isConnected(nodeD)); // true
console.log(nodeA.isConnected(nodeE)); // false

/**
 * Directed vs Undirected Graphs
 *
 * Undirected Graphs:
 * In an undirected Graph, when there is a connection between nodes, it goes both ways
 * Facebook and its users and the relationship between the users can be modeled as an undirected graph.
 * Users are nodes and friendships between the users are edges
 * There may be many ways two users are connected on Facebook
 * The graph is undirected because if you are friends with someone on Facebook, they are by definition
 * friends with you in return
 *
 * Directed Graphs:
 * In a Directed graph, connections between nodes have direction
 * The internet can be modeled as a directed graph, where individual web pages are nodes and links between
 * the pages are directed edges
 * Links are directed - just because one page links to another, doesn't mean that page links back in return
 * The degree of a node is the number of edges connected to the node.
 * In a directed graph, nodes have an indegree or edges pointing to it and an outdegree or edges
 * pointing from it.
 *
 * Weighted Graphs Vs Unweighted Graphs:
 *
 * Weighted Graphs:
 * A weighted graphs is a graph in which the edges have values corresponding to weights
 * An intercity road network could be an example of a weighted graph, where each city
 * is a node and each road is an edge, labeled with their lengths.
 *
 * Unweighted Graph:
 * An unweighted graph has no weights to its edges, so every edge is the same as any
 * other edge.
 *
 * Cyclic Vs Acyclic Graph:
 *
 * Cyclic Graph:
 * In a cyclic graph, there is at least one cycle, meaning that there is a path from at least one
 * node back to itself.
 *
 * Acyclic Graph:
 * An acyclic graph contains no cycles aka no node can be traversed back to itself.
 *
 * Bot of these graphs can be directed or undirected. Directed Acyclic Graphs(DAG's) have
 * special applications in computer science and can often be used to represent any
 * complex data processing flows.
 *
 * Dense Vs Sparse Graphs
 * Desnse Graph: close to the maximum number of edges
 * Sparse Graph: the number of edges is close to the number of nodes in the graph
 *
 * Self-loop: when an edges has just one vertex (like a web page linking to itself)
 * Multi-Edge graphs: there are multiple edges between two vertices
 * Simple Graph: a graph with no self-loops and no multi-edges
 *
 *
 */
