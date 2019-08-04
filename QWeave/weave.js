const Queue = require("./queue"); // import Queue

function weave(q1, q2) {
  const q3 = new Queue();

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q3.add(q1.dequeue());
    }
    if (q2.peek()) {
      q3.add(q2.dequeue());
    }
  }
  return q3;
} // end weave()

module.exports = weave;
