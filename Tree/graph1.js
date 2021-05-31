// the data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
console.log('Hello'.split('')); // [ 'H', 'e', 'l', 'l', 'o' ]

console.log(airports);
/**
 [
  'PHX', 'BKK', 'OKC',
  'JFK', 'LAX', 'MEX',
  'EZE', 'HEL', 'LOS',
  'LAP', 'LIM'
]
 */

// 2-D matrix
// space intensive
// thus avoid it when possible for graph
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// adjacency list
// aka Map
// key -> airport (node)
// value -> edges
// so Map is the adjacency graph that's empty to begin with
const adjacenyList = new Map();

// Add node
function addNode(airport) {
  adjacenyList.set(airport, []); // set key (airport) ---> value (routes)
}

// add edges, undirected with no cycles
function addEdge(origin, destination) {
  // BKK --- LAX , i.e.,
  // One can fly from BKK -> LAX and from LAX -> BKK

  // get origin then push the destination
  adjacenyList.get(origin).push(destination);

  // get destination then push origin
  adjacenyList.get(destination).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacenyList);

/**
 Map(11) {
  'PHX' => [ 'LAX', 'JFK' ],
  'BKK' => [ 'MEX', 'LIM' ],
  'OKC' => [ 'JFK' ],
  'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
  'LAX' => [ 'PHX', 'MEX' ],
  'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
  'EZE' => [ 'MEX' ],
  'HEL' => [ 'JFK' ],
  'LOS' => [ 'JFK' ],
  'LAP' => [],
  'LIM' => [ 'MEX', 'BKK' ]
}

 */

/**
 * Time complexity for both BFS/DFS is
 * O(V +  E) -> O(n) -> linear
 * V -> Vertices
 * E -> Edges
 */

// Breadth First Search
// will find the all possible routes
console.log('\n----------------BFS-----------------------');
function bfs(start) {
  // use queue data structure
  // js array is dynamic allowing us to transform array from the
  // front and the end
  // for the purpose of creating queue data structure from array
  // we'll follow First In First Out policy
  // OUT <-- [1, 2, 3, 4, 5] <-- IN | First In First Out

  // keep track of visited airports
  // set works like an arry except Set can only
  // contain unique values only
  const visited = new Set();

  // initialize queue with starting node
  const queue = [start];

  // as long as the queue as elements iterate through
  while (queue.length) {
    const airport = queue.shift(); // extract the first element from the queue

    const destinations = adjacenyList.get(airport); // get all destinations for the airport

    for (const destination of destinations) {
      if (destination === 'BKK') {
        console.log('found it!');
      }

      //
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

// display route between PHX <----> BKK
bfs('PHX');

/**
 Map(11) {
  'PHX' => [ 'LAX', 'JFK' ],
  'BKK' => [ 'MEX', 'LIM' ],
  'OKC' => [ 'JFK' ],
  'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
  'LAX' => [ 'PHX', 'MEX' ],
  'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
  'EZE' => [ 'MEX' ],
  'HEL' => [ 'JFK' ],
  'LOS' => [ 'JFK' ],
  'LAP' => [],
  'LIM' => [ 'MEX', 'BKK' ]
}
LAX
JFK
PHX
MEX
OKC
HEL
LOS
found it!
BKK
LIM
EZE
found it!

 */

console.log('\n---------DFS--------------------------');
// Depth First Search
// will find a route as quickly as possible
function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const destinations = adjacenyList.get(start);

  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log('-->DFS found Bangkok in steps<--');
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs('PHX');
/**
PHX
LAX
MEX
DFS found Bangkok in steps
JFK
OKC
HEL
LOS

 */
