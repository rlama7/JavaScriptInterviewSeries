/**
 * Split the 10th grade class into two teams for a soccer game.
 * Given a list of students and their 'enemies' aka the kids they
 * can't be on the same team a, determine whether it is possible to split
 * the class in two in such a way that no child is on the same team as
 * any of their enemies. If possible, return the two teams.
 *
 * David: [Lucy, Jose, Chris]
 * Lucy: [David, Brian, Emily]
 * Emily: [Lucy, Jack]
 * Jose: [David, Paul]
 * Paul: [Jose, Chris]
 * Chris: [Paul, David, Brian]
 * Brian: [Lucy, Chris, Jack]
 * Jack: [Brian, Emily]
 *
 *               Jack   Emily
 *                  \   /
 *                   \ /
 *                   /\
 *                  /  \
 *  David ----Lucy ---- Brian
 *    |   \            /
 *    |    \          /
 *    |     \        /
 *   Jose     Chris_/
 *    |      |
 *    \      /
 *      \   /
 *        Paul
 *
 * Bipartite Graph:
 * - A graph whose vertices / node can be divided into two disjoint and independent
 * - sets such that every edge connects a vertex in the first set to one in the second set.
 *
 * - One of the property of a Bipartite Graph is that they can NOT have odd number of cycle
 *   NOT ALLOWED in a Bipartite Graph
 *          A
 *        /   \
 *       /    \
 *      B --- C
 *
 * Image reference: bipartiteGraph01.png/bipartiteGraph02.png
 *
 * We'll model our question as a bipartite graph.
 * If a graph is a bipartite then we'll have two distinct independent sets
 *
 * Graph Coloring -
 * - A way of labeling nodes or edges in a graph
 * - Legal Coloring - a graph coloring such that NO neighboring (adjacent) nodes
 * - share the same color
 *
 *  - If we can color all the alternate nodes with just TWO Color for a given
 *  - graph then the graph is a bipartite graph therefore
 *  - there exists towo distinct disjoint sets
 *
 * - If NOT then the graph is NOT bipartite graph
 * - and we can not find separate the given garaph into
 * - two disjoint sets
 *
 */
class Node {
  constructor(data) {
    this.color = null;
    this.data = data;
    this.edgesList = [];
  }

  // connect nodes
  connect(node) {
    // we'll consider undirected graph therefore
    // if there is a connection from A to B
    // there is also connection from B to A
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  // get Adjacent nodes
  getAdjacentNodes() {
    return this.edgesList;
  }

  // is connected
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
    node.edgesList.push(this);
  }

  isBipartite() {}
}

// create node
const JACK = new Node('Jack');
const EMILY = new Node('Emily');
const DAVID = new Node('David');
const LUCY = new Node('Lucy');
const BRIAN = new Node('Brian');
const JOSE = new Node('Jose');
const PAUL = new Node('Paul');
const CHRIS = new Node('Chris');

// create graph
const graph = new Graph([JACK, EMILY, DAVID, LUCY, BRIAN, JOSE, PAUL, CHRIS]);

// connect nodes in a graph
JACK.connect(EMILY);
JACK.connect(BRIAN);
EMILY.connect(LUCY);
DAVID.connect(LUCY);
LUCY.connect(BRIAN);
DAVID.connect(JOSE);
DAVID.connect(CHRIS);
CHRIS.connect(BRIAN);
JOSE.connect(PAUL);
PAUL.connect(CHRIS);

console.log(graph);

graph.isBipartite();
