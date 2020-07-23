/**
 * Find the width of a tree
 */
class Node {
    contructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }
    levelWidth(root) {
        const arr = [root, 's'];
        const counters = [0];
        while(arr.length > 1) {
            const node = arr.shift();
            if(node === 's') {
                counters.push(0);
                arr.push('s');
            } else {
                arr.push(...node.children);
                counters[counters.length-1]++;
            }
        }
        return counters;
    }
};