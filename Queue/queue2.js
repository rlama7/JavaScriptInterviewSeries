/**
 * Queue --> 
 * Follows First In Fist Out --> FIFO
 * 
 * enQueue() --> add records to the last --> unshift()
 * deQueue() --> remove records from the end --> pop()
 * peek() --> 
 * weave() --> 
 * 
 * 
 * 
 */
class Queue {
    constructor() {
        this.data = []; // [end ...................... front]
    }
    // add item to the last
    enQueue(item) {
        this.data.unshift(item);
    }

    // remove item from the front
    deQueue() {
        return this.data.pop();
    }

    // peek item ---> show the item next to be removed without removing it
    peek() {
        return this.data[this.data.length - 1];
    }
}

// instantiating queue
const q = new Queue();

console.log(`Enqueue item to Queue to the last...`);
for (let index = 0; index < 5; index++) {
    q.enQueue(index);       // end [4, 3, 2, 1, 0] front
}
console.log(q);

console.log(`Dequeueing item from the front...`)
q.deQueue();                // end [4, 3, 2, 1] front
console.log(q);


console.log(`Enqueue item to Queue to the last...`);
q.enQueue('zebra');         // end ['zebra', 4, 3, 2, 1] front
console.log(q); 
console.log(q.peek());


console.log(`\n----------------------------------------------->`)
const bunch = [10, 20, 30, 40, 50];
console.log(bunch);
bunch.push('yak');
bunch.push('zebra')
console.log(bunch);
bunch.shift();
bunch.shift();
bunch.push('ant');
console.log(`[front --------- end ]`);
console.log(bunch);
console.log(`\n----------------------------------------------->`)



const weave = function(q1, q2){
    // instantiate queue
    const q = new Queue();

    // loop until either of the queue returns undefined
    while(q1.peek() || q2.peek()) {
        if(q1.peek()) {
            q.enQueue(q1.deQueue());
        }
        if(q2.peek()) {
            q.enQueue(q2.deQueue());
        }
    }
    return q;
}

const q5 = new Queue();
const q6 = new Queue();
let q7 = new Queue();

q5.enQueue(0);
q5.enQueue(2);
q5.enQueue(4);
q5.enQueue(6);
console.log(q5);

q6.enQueue(1);
q6.enQueue(3);
q6.enQueue(5);
q6.enQueue(7);
console.log(q6);

q7 = weave(q5, q6);
console.log(q7);






// module.exports = Queue;



