/** 
 * Doubly linked list
 * 
 */
class Node {
    constructor(data, next=null, prev=null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenghth = 0;
    }

    // isEmpty() --> check if the list is empty
    isEmpty() {
        return this.head === null;
    }

    // insertFirst() --> inserts new node to the first of the linked list
    insertFirst(data) {
        // check if the list is empty
        if (this.isEmpty()) {
            this.tail = new Node(data, null, this.head);
        } else {
            this.head.previous = new Node(data, this.head, null);
        }
        
        this.lenghth++;
    }
}

const n1 = new Node(10);
const n2 = new Node(100);
const n3 = new Node(1000);
const n4 = new Node(9999);

const list = new DoublyLinkedList();
list.head = n1;
n1.prev = null;

n1.next = n2;
n2.prev = n1;

n2.next = n3;
n3.prev = n2;

n3.next = n4
n4.prev = n3
console.log(list); // 10 --> 100 --> 1000 --> 9999

// isEmpty
console.log(list.isEmpty());  // false

// insertFirst()
list.insertFirst(7777);
console.log(list);