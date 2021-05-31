/**
 * Binar Search Tree
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if(data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data); // base case
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }
        // recurse to the right
        if(this.data < data && this.right) {
            return this.right.contains(data);
        }

        // recurse to the left
        if(this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
}