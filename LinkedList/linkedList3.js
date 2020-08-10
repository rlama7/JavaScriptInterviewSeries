/**
 * LinkedList 
 * 
 * Time complexities: 
 * prepend ---> O(1) // insertFirst
 * append --> O(1) // insertLast
 * lookup --> O(n)
 * insert --> O(n)
 * delete --> O(n)
 * 
 */

 /**
  * Node
  *  ______________
  * |  data | next |    
  * |______________|
  *             |
  *             V
  *  ______________
  * |  data | next |    
  * |______________|
  *             |
  *             V
  *            null
  */
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}


/**
 * Linked Lost
 */
class LinkedList {
    constructor() {
        this.head = null;
    }

    // insertFirst --> insert node to the head
    insertFirst(data) {
        this.head = new Node(data, this.head);
        // this.insertNodeAt(data, 0);
    }

    // find the number of nodes connected to the LinkedList
    size() {
        let count = 0;
        let node = this.head;   // get reference to the head 
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    // getFirstNode() --> returns the first node of the linkedlist without removing it
    getFirstNode() {
        return this.head;
    }

    // getLastNode() --> returns the last node of the linkedlist without removing it
    getLastNode() {
        // validat if no node exists
        if (!this.head) {
            return null;
        }

        let node = this. head;
        while (node) {  // loop as long as node exists
            if (!node.next) { // if the next node is null then return that node since that is the last node
                return node;
            }
            // exit strategy
            node = node.next  // move onto next node
        }
    }

    // clear() --> Empties the linked list of any nodes
    clear() {
        this.head = null;
    }

    // removeFirstNode() --> removes the firstNode in the linked list
    removeFirstNode() {
        // if the linked list is empty return null - there is nothing to return
        if (!this.head) {
            return;
        }
        // point the head to the node next to the first
        this.head = this.head.next;
    }

    // removeLastNode() --> removes the last node
    // use two pointers: 
    // previous node starting out at the head and 
    // the node starting out at the next node pointed by the head
    removeLastNode() {
        // if the linked list is empty return - there is nothing to return
        if (!this.head) {
            return;
        }

        // if the list has only a single node then nullify the head node
        if(!this.head.next) {
            this.head = null;
            return;
        }

        // get reference to the first node
        let previousNode = this.head;
        let node = this.head.next;
        // loop until next node to the current node exists
        while(node.next) {
            // exit strategy
            previousNode = node;
            node = node.next;
        }
        // at the end of the loop we're at the second last node
        previousNode.next = null;
    }

    // insertLastNode() -> inserts a node at the end of the linkedlist
    insertLast(data) {
        let node = new Node(data);
        // if the list is empty 
        if(!this.head) {
            this.head = node;
        }

        this.getLastNode().next = node;
    }

    // getNodeAt() --> get a node at specific index sposition without removing it
    getNodeAt(index) {
        let count = 0;
        // get reference to the head
        let node = this.head;
        // loop through the list as long as the node exists and/or defined
        while(node) {
            // return the reference to the node that has the same index as the count
            if (count === index) {
                return node;
            }
            // increase the counter
            count++;
            // exit strategy --> move the current node to the next node
            node = node.next;
        }
        // at this point if the index position is greater than the size of the linkedlist
        // then return null Also 
        // works if the list is empty
        return null;
    }

    // removeNodeAt(index) --> remove the node at the given index position
    removeNodeAt(index) {
        // check if the list is empty
        if (!this.head) {
            return;
        }
        // check if the list has a single node
        if(index===0) {
            this.head = null;
            return;
        }

        // if the list has more than a single node
        let previous = this.getNodeAt(index-1);
        console.log(previous);
        // check edge cases:
        // if the index is out of bound, i.e previous doesn't exist or
        // if the node next to previous is not defined.
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    // insertNodeAt(index) --> inserts node at a given index
    insertNodeAt(index, data) {
        // empty list --> insert the node
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // index === 0
        if (index === 0) {
            this.head = new Node(data, this.head);  // head --> new node --> what head was pointing previously
            return;
        }

        // insert at index 1 i.e. before B
        // A --> B --> C ---> D 
        // get reference to A if previous exists OR if the index > size of the linkedlist 
        // then add node to the last
        let previous = this.getNodeAt(index - 1) || this.getLastNode();   

        //     |-----------|
        //     |           V
        // A --|   NEW  --> B --> C ---> D      // Both A and NEW points to B
        const node = new Node(data, previous.next);
        previous.next = node;       // Now A --> points to NEW Node
        // A --> NEW --> B --> C --> D
    }

    /**
     * reverse(list) --> reverse a linked list
     * 
     * Example: 
     * 1--> 2 --> 3 --> 4 --> NULL
     * reverse(list)
     * 4 --> 3 --> 2 --> 1 --> NULL 
     * 
     * Algorithm:
     * Initialize three pointers: 
     *      --> previous === NULL
     *      --> current === this.head
     *      --> next === NULL
     * loop
     *      // before changing next of current, store next node
     *      -> next = current->next
     *      // then change next of current node; this is where the reverse happens
     *      -> current->next = previous
     *      // move previous and current one step forward
     *      -> previous = current
     *      -> current = next
     * 
     */
    reverseIterative(list)  {
        let prev = null;
        let current = this.head;
        let next = null;
        // loop as long a the node exists
        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            // exit strategy
            current = next;
        }
        this.head = prev;
        // console.log(list.head);
    }

    // reverseRecursive(list) {
    //     let node = this.head;
    //     if (!node || !node.next) {
    //         return node;
    //     }
    //     let temp = reverse(node.next);
    //     node.next.next = node;
    //     node.next = undefined;
    //     return temp;
    // }

    // forEach() --> calls the provided function with every 

    // node of the chain and the index of the node..

    // for ... of -> linked list should be compatibles as the 
}

const list = new LinkedList();
list.head = new Node(9);
list.insertFirst(10);
list.insertFirst(1000);
list.insertFirst(9999);
list.insertFirst(77777);
console.log(`list size: ${list.size()}`);   //5
console.log(list.getFirstNode());   // 77777
console.log(list.getLastNode());    // 9
console.log(list); // 77777 --> 9999 --> 1000 --> 10 --> 9
// list.clear();

// after removing first node
list.removeFirstNode()   // 77777
console.log(list); // {first Node removed } --> 9999 --> 1000 --> 10 --> 9 

// after removing last node
list.removeLastNode()   // 9
console.log(list); // 9999 --> 1000 --> 10 --> {last Node removed } -->  

// call insertLast()
list.insertLast('TAIL');
console.log(list);  // 9999 --> 1000 --> 10 --> "TAIL"

// getNodeAt(index)
console.log(list.getNodeAt(3));

// removeNodeAt(index)
list.removeNodeAt(1);
console.log(list);  // 9999 --> 10 --> "TAIL"

// insertNodeAt(index)
list.insertNodeAt(1, 'NEW');
console.log(list);  // 9999 --> 'NEW' ---> 10 --> "TAIL"

list.insertNodeAt(0, 'HEAD') // 'HEAD' --> 9999 --> 'NEW' ---> 10 --> "TAIL"


// reverse linkedlist iterative 
list.reverseIterative(list); // 'HEAD' <-- 9999 <-- 'NEW' <--- 10 <-- "TAIL"

// const recur = list.reverseRecursive(list);
// console.log(recur);

