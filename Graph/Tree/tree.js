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
 * for a binary Tree
 *
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \      /  \
 *    /    \    /    \
 *   D     E   F     G ------ H_2
 *
 * ----------------------------
 *
 *             A    ------- H_0
 *          /    \
 *        /       \
 *       B         C ------- H_1
 *     /  \        \
 *    /    \        \
 *   D     E        G ------ H_2
 *
 * ----------------------------
 *
 *             A    ------- H_0
 *              \
 *               B  ------- H_1
 *
 */
