/**
 * Stack --> Items are arranged in LIFO --> Last In First Out/ First in Last Out
 * 
 * push --> add an item to the top of the stack
 * pop --> remove the top item from the stack
 * peek --> return the top item from the stack without popping it
 * 
 * [...........] <----------- Data Entry/Exit
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

const s = new Stack();
console.log(s);

s.push('1 - ant');
s.push('2 - bat');
s.push('3 - cat');
s.push('4 - dog');
s.push('5 - eagle');
console.log(s);

s.pop();
console.log(s);

console.log(s.peek());
console.log(s);


console.log(`\n-------------------------------------`)
const items = [1,2,3,4,5];
console.log(items);
console.log(items.push(10));
console.log(items.push(10000));
console.log(items);
console.log(`pop: ${items.pop()}`);
console.log(items);
console.log(items[items.length-1]);
console.log(items);