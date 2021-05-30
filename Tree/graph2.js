/**
 * Graph -> a datastructure made up of nodes or vertices and edges or the connections between nodes
 * vertices/nodes ->
 * edges -> form connection between nodes or vertices
 * Directed vs Undirected graphs ->
 * Weighted vs unweighted graphs ->
 * Cyclic vs Acyclic graphs ->
 *
 *          1------------2
 *          |         / /  \
 *          |       /  /    3
 *          |     /   4____/  \
 *          |   /           \ 6
 *          5---------------
 *
 *
 * Tree: A special kind of graph
 * Trees are just a special kind of graph with one root and only one
 * unique path between any two nodes
 *
 * A grpah can go beyond that and have any number of root elements and multiple
 * paths between nodes
 *
 *
 * From the images /folder/treeVSgrpah.png , for a tree we can find only a single
 * path say going from A-->H -----> A->B->E->H
 *
 * Whereas for a graph, Going from A-->H we can find more than one path,
 * for example, A-->H -----> A->B->D->H    OR A->B->D->E->F->G->H
 *
 * --->Time Complexity:<---
 *
 * Time complexity to find adjacent nodes -> O(e) where e is the number of edges ->
 * we'll have to traverse through each nodes
 *
 * Time complexity to check it wo nodes are connected -> O(e)
 *
 * Space complexity -> O(v+e) where v is the number of vertices and e is the number of edges
 *
 *
 */
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  ['A', 'B'], // A-B are connected
  ['A', 'D'], // A-D are connected and so on...
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E'],
];

console.log('\n------Adjacency Matrix-------------');

// Adjacency Matrix
const adjacencyMatrix = [
  //A  B  C  D  E
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

/**
 * Adjacency Matrix
 *
 * A 2-D array filled out with 1's and 0's where each array represents a node
 * and each index in the subarray, represents a potential connection to another node
 *
 * the value at adjacencyMatrix[node1][node2] indicates where there is a connection between
 * node 1 and node 2. If the value is 1 then there is a connection between two nodes if the
 * value is 0 then there is no established connection.
 *
 * Time complexity to find adjacent nodes --> O(v) where v is the number of of vertices/noes
 * Time complexity to check if two nodes are connected --> O(1)
 * Space complexity --> O(v^2) where v is number of vertices
 *
 * Since the space requirement is quadratic, Adjacency Matrix is not recommended for grap datastructure
 */

// create a hash map out of verties where key -> alphabets ('A', 'B' ... 'E')
// AND  value -> it index
// 'A' -> 0
// 'B' -> 1
// 'C' -> 2
// 'D' -> 3
// 'E' -> 4
let hashMap = new Map();

// assign key->value to hashMap.
vertices.map((element, index) => hashMap.set(element, index));
console.log(hashMap); // Map(5) { 'A' => 0, 'B' => 1, 'C' => 2, 'D' => 3, 'E' => 4 }

/**
 * find Adjacent nodes conntectd to the given node
 * @param {*} node to be check for any other connected node
 */
const finadAdjacencies = (node) => {
  // get the row in the matrix
  // loop through the row
  // if there is 1, push that node,
  // otherwise skip
  const adjacentNodes = [];
  nodeIdx = hashMap.get(node);
  console.log(nodeIdx);
  for (let index = 0; index < vertices.length; index++) {
    if (adjacencyMatrix[nodeIdx][index] === 1) {
      adjacentNodes.push(vertices[index]);
    }
  }

  return adjacentNodes;
};

console.log(finadAdjacencies('A')); //[ 'B', 'D' ]
console.log(finadAdjacencies('B')); // [ 'A', 'C' ]
console.log(finadAdjacencies('C')); // [ 'B', 'D', 'E' ]
console.log(finadAdjacencies('D')); // [ 'A', 'C', 'E' ]
console.log(finadAdjacencies('E')); // [ 'C', 'D' ]
/**
 * find if there exists any connection / edges between two nodes
 * @param {*} node1 node to be checked if has connection with other nodes
 * @param {*} node2 node to be checked if has connection with other nodes
 */
const isConnected = (node1, node2) => {};
