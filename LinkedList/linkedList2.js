/**
 * Linked List
 */

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
 }


class LinkedList {
    constructor() {
        this.head = null;   // !IMPORTANT --> the linkedlist has the reference to the head node ONLY
    }
     // insertFirst --> inserts node to the first of the list 
     // don't write the head node
     // Head -> firstNode --> secondNode --->.....--> null
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // size  --> iterate throught the list then return the number of node in the list
    size() {
        let count = 0;

        // get the reference to the head
        let node = this.head;

        // loop until there is node
        while(node) {
            count++;
            // go to the next node
            node = node.next;
        }
        return count;
    }

    // getFirst --> Returns the first node of the list
    getFirst() {
        return this.head;
    }

    // getLast  --> Returns the last node from the list
    getLast() {
        // check if there are no nodes
        if (!this.head) {
            return null;
        }

        let node = this.head;

        // loop through the list if node is found
        while(node) {
            // if the next node does not exist then this must be the last one 
            if(!node.next) {
                return node;
            }
            // continue to move to next node 
            node = node.next;
        }
    }

    // clear --> completely empty the list
    clear() {
        // if the head looses the reference to the rest node then as far as linkedlist is concerned then list is empty.
        this.head = null; 
    }

    //removeFirst --> Remove only the first
    removeFirst() {
        // if there is no node then we can't remove it!
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    // removeLast --> remove the last node
    removeLast() {
        // if the head is empty then can't remove anything
        if(!this.head) {
            return;
        }

        // if the list has a single node then remove it
        if(!this.head.next) {
            this.head=null;
            return;
        }
        // hold the reference to the head
        let previous = this.head;
        let node = this.head.next;
        
        // loop through until we find next node 
        while(node.next) {
            previous = node;
            node = node.next; 
        }
        previous.next = null; 
    }

    // insertLast --> insert node at the end
    insertLast(data) {
        let node = new Node(data);
        const last = this.getLast();
        if(last) {
            last.next = node;
        } else {
            this.head = node;
        }
    }

    // circular
    isCircular(list) {
        let slow = list.getFirst();
        let fast = list.getFirst();

        while(fast.next && fast.next.next) {
            if (slow === fast) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    }
}

const n1 = new Node(5);
const n2 = new Node(15);
const n3 = new Node(25);

const list = new LinkedList();
// make the head reference to the node n1
list.head = n1; 
n1.next = n2;
n2.next = n3;

list.insertFirst(10);

// convert object to JSON string
console.log(JSON.stringify(list));
console.log(`size --> ${list.size()}`);
console.log(list.getFirst());
console.log(list.getLast());
console.log(JSON.stringify(list));
// list.clear();

list.removeFirst();
console.log(JSON.stringify(list));

list.removeLast();
console.log(JSON.stringify(list));

list.insertLast(999);
console.log(JSON.stringify(list));

