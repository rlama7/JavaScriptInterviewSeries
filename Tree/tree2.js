/**
 * Tree 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }

    // filter out the node that doesn't match the data 
    // then assigned it back to array essentially removing 
    // the node that contains the node
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data ;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Breadth first search
    traverseBF(fn) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();   // remove the first array.

            // take elements of children and push it to the END of array
            arr.push(...node.children);
            fn(node);
        }
    }

    // Depth first Search
    traverseDF(fn) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();

            // take elements of children and push it to the FRONT OF THE ARRAY
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

/**
 * Utility function
 */
let arr = [1,2,3,1,1];
const arrRemove = arr.filter((el) => {
    return el !== 1;
})
console.log(arrRemove);
console.log(arr);

// remove first element from the array
console.log(arr.shift());
console.log(arr);

// add element to the front of the array
arr.unshift('apple');
console.log(arr);