/**
 * Validate Binary tree --> A Binary tree has following characteristics
 * 1) a parent can only have 2 children
 * 2) data <= root (parent) must be to the left 
 * 3) data > root (parent) must be to the right
 * 
 * Algorithm:
 * 
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

const validateBinaryTree = (node, min=null, max=null) => {
    if(max !== null && node.data > max) {
        return false;
    }
    if(min !== null && node.data < min) {
        return false;
    }

    // left
    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    // right
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    return true;
}
