/**
 * Tree Data Structure
 * A collection of nodes and edges where:
 *  - there is one root (parent)
 *  - there is only one unique path between any two nodes
 *
 *  - A is the root node
 * - B & C are the children of A and they are also on the save level
 * - Similarly B & C are siblings with the same parent A
 *  - D, E, F, G are leaf nodes, i.e., does not have childrens
 *  - D, E, F, G are also all on same level however, only
 *  - D & E are siblings with their parent as B
 *  - and F & G are siblings with their parent as C
 *
 *  - Height of the tree refers to the height from the root to the leaf node
 *  - In the example below the height of the tree  --> 2
 *
 *
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_2
 *
 *
 */

/**
 * Binary Tree
 * A tree that has at most two children.
 * So a tree with a root node (parent) and either 0 or 1 or 2 children qualifies
 * for a binary Tree.
 *
 * In the following examples, #1, #2, #3 are binary tree whereas #4 is NOT a binary Tree
 * since #4 has three children for node (parent) B & C.
 *
 * #1
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_2
 *
 * ----------------------------
 * #2
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \        \
 *    /    \        \
 *   D     E        G ------ H_2
 *
 * ----------------------------
 * #3
 *             A    ------- H_0
 *              \
 *               B  ------- H_1
 *
 * ----------------------------
 * # 4
 *              A    ------- H_0
 *          /       \
 *        /          \
 *       B            C ------- H_1
 *     / |  \       / |  \
 *    /  |   \     /  |   \
 *   D   X   E    F   Y   G ------ H_2
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
/**
 * #1
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_2
 */

// let's create a tree node in the example #1
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

/**
 * Next let's setup hierarcy for the Tree
 * as shown in the example #1 above.
 *
 * we need establish A as the node (parent) of B & C
 * B and C are the left and right child respectively
 *
 * Similarly, D & E are the left and right child of B and
 * F & G are the left and right child of C
 *
 */
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

const breadFirstTraversal = (root) => {
  /**
   * For a breadth first traversal we'll need
   * to visit the nodes in the tree in a level order
   * fashion, i.e., that is visited ALL the nodes in the same level
   * before visiting the nodes in the next level
   *
   * We'll implement queue data structure for this purpose
   * Queue data structure follows First In First Out order.
   * OUT <--- [1,2,3,4,5,6,7] <--- IN
   *
   * So if we imagine a queue of number then 1 will come out firs since 1
   * is infront of all number if any number has to join queue then
   * they will be added to the back and then will process in the order
   *
   * Initialize the queue with the root node.
   *
   * then as long as there are items in queue,
   * we'll need add its left and right and children to the queue
   * if NOT already visited
   * we'll use Set to mark the visited node
   * since SET can only contain unique items
   * therefore avoids duplicate items
   *
   * and REPEAt until we reached the leaf node
   *
   */

  const queue = [root];
  const storeNode = [];
  // const visitedNode = new Set();

  while (queue.length) {
    const currentNode = queue.shift(); // take out the first item from the queue

    // push current node to storeNode to
    // print out later
    storeNode.push(currentNode.data);

    // if the current node has left and right children
    // then only push those to the queue
    if (currentNode.left !== null) queue.push(currentNode.left);

    if (currentNode.right !== null) queue.push(currentNode.right);
  }
  return storeNode;
};

console.log(breadFirstTraversal(A)); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G's]
