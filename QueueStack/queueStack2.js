/**
 * Queue Stack
 * use two stacks to create a stack data structure
 */

class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    // take item from s1 and dump it to s2
    enQueue(item) {
        this.s1.push(item);
    }

    // queue removes item from the front 
    deQueue() {
        while(this.s1.peek()) {
            // move item from the s1 to s2 
            this.s2.push(this.s1.pop())
        }
        const record = this.s2.pop(); // remove the top item from the s2

        // move back the data to the s1 bucket
        while(this.s2.peek()) {
            this.s1.push(this.s2.pop())
        }
        return record;
    }
    
    peek() {
        // move items from s1 to s2
        while(this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }
        // get the reference to the to item in the s2 bucket
        const record = this.s2.peek();
        // restore the state by moving back the item from s2 to s1
        while(this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }
        return record;
    }
}

const s1 = new Stack();
const s2 = new Stack();

// s1.push(1);
// s1.push(2);
// s1.push(3);
// console.log(s1);

// s2.push(9);
// s2.push(99);
// console.log(s2);

const q = new Queue();
q.enQueue(1);
q.enQueue(10);
q.enQueue(1000);
q.enQueue(10000);
console.log(q);
console.log(q.peek());
console.log(q);
console.log(q.deQueue());
console.log(q);
q.enQueue(999999);
q.enQueue('elephant');
console.log(q);
console.log(q.peek());
q.deQueue();
console.log(q);




