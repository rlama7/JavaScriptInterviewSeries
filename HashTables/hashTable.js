/**
 * HashTable Implementation
 * 
 * Time complexity for HashMap vs Arrays
 * search --> O(1) Vs Arrays search --> O(n)
 * insert --> O(1) Vs Arrays insert --> O(n)
 * lookup --> O(1) Vs Vs Arrays lookup --> O(1)
 * delete --> O(1) Vs Arrays delete --> O(n)
 * 
 */
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // private property do not access outside of the class.
    _hash(key) {
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash = (hash + key.charCodeAt(index) * index) % this.data.length;
        }
        return hash;
    }

    // key value for hashmap
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // get key --> value from the hashmap
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let index = 0; index < currentBucket.length; index++) {
                if (currentBucket[index][0] === key) {
                    return currentBucket[index][1];
                } 
            }
        }
        return undefined;
    }

    // iterate through the keys of the hashtable
    keys() {
        if(!this.data.length) {
            return undefined;
        }
        const result = [];
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if(this.data[i] && this.data[i].length) {
                // also loop through all potential collisor
                if(this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0]);
                    }
                } else {
                    result.push(this.data[i][0]);
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(5)
myHashTable.set('apple', 10);
myHashTable.set('bat', 20);
myHashTable.set('cat', 30);
myHashTable.set('dog', 40);
myHashTable.set('egg', 50);
console.log(myHashTable);


const str = 'Apple';
for (let index = 0; index < str.length; index++) {
    console.log(str.charCodeAt(index));    
}

myHashTable.set('fish', 60);
console.log(myHashTable);
console.log(myHashTable.get('cat'));
console.log(myHashTable);

console.log(myHashTable.keys());
