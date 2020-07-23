const Queue = require('./queue2.js');

const weave = ((q1, q2) => {
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
})


const q4= new Queue();

console.log(q);

module.exports = weave;