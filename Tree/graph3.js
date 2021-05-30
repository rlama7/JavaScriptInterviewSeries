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
