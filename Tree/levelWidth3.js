class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add node
  add(val) {
    // create a node with the value provided
    // push it to the children array
    this.children.push(new Node(val));
  }

  // remove node
  remove(val) {
    // iterate through the node and if the node.data === val
    // filter it out
    this.children = this.children.filter((node) => node.data !== val);
  }
}

function levelWidth(root) {
  const width = [0];
  const queue = [root, 'flag'];

  // iterate through as long as there is 1 element
  // iterate breadth firsth search

  while (queue.length > 1) {
    // pull out the first element from the queue
    const node = queue.shift();

    // if the node is 'flag' then increment the counter
    // and push the flag to the end.
    if (node === 'flag') {
      width.push(0);
      queue.push('flag');
    } else {
      // if node is not flag then get the children of node and push it to the queue
      queue.push(...node.children);
      // also find the last elemnt at width and increment the width counter
      width[width - 1]++;
    }
  }
  return width;
}

const node = new Node(10);
node.add(5);
node.add(20);

console.log(node);
/**
 * Node {
  data: 10,
  children: [ Node { data: 5, children: [] }, Node { data: 20, children: [] } ]
}
 */

console.log(levelWidth(node));
