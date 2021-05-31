/**
 * tree3.js     - A program to implement a node and a Tree class in JavaScripts.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - Implement a Node class and a Tree class.
 *
 */

/**
 * Create a node class. The constructor should accept an argumen that gets
 * assigned to the data propeerty and initialize and empty array for storing
 * children. The node class should have methods 'add' and 'remove'
 */
console.log('\n--------------Node Class--------------------------');
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add data
  add(val) {
    // create a new node with the val then
    // push it to the children array
    this.children.push(new Node(val));
  }

  // remove data
  remove(val) {
    this.children = this.children.filter((node) => node.data !== val);
  }
}

const node = new Node(10);
node.add(100);
node.add(200);
node.add(30);
node.add(75);

console.log(node);

/**
 Node {
  data: 10,
  children: [
    Node { data: 100, children: [] },
    Node { data: 200, children: [] },
    Node { data: 30, children: [] },
    Node { data: 75, children: [] }
  ]
}
 */

node.remove(200);
console.log(node);

/**
 Node {
  data: 10,
  children: [
    Node { data: 100, children: [] },
    Node { data: 30, children: [] },
    Node { data: 75, children: [] }
  ]
}
 */

console.log('\n--------------Tree Class--------------------------');
/**
 * Create a tree class. The tree constructor should initialize a 'root' property to null.
 * root property is the entry point of reference to the rest of the tree nodes.
 *
 * Then on the tree class implement:
 *  1) traverseBFS -> to traverse the tree in a level-order fashion or breadth first search.
 *
 *  2) traverseDFS -> to traverser the tree in a depth first search
 *      NOTE: --> Depth First Search can be done in 3 ways:
 *                1) preorder --> <root> <leftChild> <rightChild>
 *                2) inorder  --> <leftChild> <root> <rightChild>
 *                3) postorder --> <leftChild> <rightChild> <root>
 *
 *     NOTE: --> Inorder traversal of a Tree in a Depth First Search yields sorted list.
 */
class Tree {
  constructor() {
    this.root = null;
  }

  // BreadthFirstSearch
  traverseBFS(fn) {
    // initialize queue with the root node of the tree
    const queue = [this.root];

    // iterate through the queue as long as there is a single element
    // we'll use array that acts like a queue for data structure
    // queue datastructures follows: FIFO -> First In First Out
    // OUT <--[1, 2, 3, 4,  5] <--- IN
    // imagine a line at a cinema where first person in line gets the first ticket

    while (queue.length) {
      // remove the first element from the queue
      const node = queue.shift();
      // push node's children to the queue
      queue.push(...node.children);
      // repeat the process
      fn(node);
    }
  }

  // DepthFirstSearch
  traverseDFS(fn) {
    // initialize stack with the root node of the tree
    const stack = [this.root];

    // iterate through the stack as long as there are elements
    // we'll use array that acts like a stack for the data structure
    // stack datastructure follows: LIFO --> Last In First Out
    // in the Stack datastructure data in/out happens only from the one end.
    // since JS array are dynamic and we can add and remove elements from array both
    // from front and back, we'll limit out stack to be able to only interact with
    // data in/out from the front
    //    data in/out <--> [1, 2, 3, 4, 5] | this end is sealed

    while (stack.length) {
      // remove the first element from the stack
      const node = stack.shift();
      // push node's children to the stack
      stack.unshift(...node.children);

      // repeat the process
      fn(node);
    }
  }
}

// intantiate a node
const rootNode = new Node(101);

// intantiate a tree
const tree = new Tree();

// assign the root node to the tree
tree.root = rootNode;

console.log(tree);
/**
 Tree { 
        root: Node { 
                    data: 101, children: [] 
              } 
     }
 */

module.exports = { Node, Tree };
