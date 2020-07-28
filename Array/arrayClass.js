/**
 * Array class implementation 
 */
class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    // fetch element at ith index
    get(index) {
        return this.data[index];
    }

    // add item to the end of the array
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // remove item from the end of the array
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // remove item at the ith index
    delete(index) {
        const item = this.data[index];
        this.shiftItmes(index);
        return item;
    }

    // shifts array elements to the left after a single element is removed
    shiftItmes(index) {
        // delete this.data[index];
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new Array();
for (let index = 0; index < 10; index++) {
    newArray.push(index);
}


console.log(newArray);

// console.log(newArray.get(1));
// console.log(newArray.pop());
// console.log(newArray);

console.log(newArray.delete(7));
console.log(newArray);