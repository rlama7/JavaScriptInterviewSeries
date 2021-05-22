function hashStringToInt(string, tableSize) {
  let hash = 17;
  // arbitrary prime numbers 13 & 17
  for (let index = 0; index < string.length; index++) {
    hash = 13 * hash * string.charCodeAt(index);
  }
  return hash % tableSize;
}

class HashTable {
  constructor(table) {
    this.table = new Array(5);
    count = 0;
    loadFactor = this.count / this.table.length;
  }

  resize() {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  setItem(key, value) {
    this.count++;
    const loadFactor = this.count / this.table.length;
    if (loadFactor > 0.8) this.resize();

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  }

  getItem(key) {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;
    return this.table[idx].find((x) => x[0] === key)[1];
  }
}

/**
 * Display
 */
const map = new HashTable();
map.setItem('red', 'love');
map.setItem('blue', 'peace');
map.setItem('white', 'pure');
map.setItem('purple', 'royal');
map.setItem('green', 'natural');

console.log(map.getItem('red')); // pure
console.log(map.getItem('green')); // natural
console.log(map);
/**
 * HashTable {
  table: [
    [ [Array], [Array], [Array] ],
    <9 empty items>,
    [ [Array] ],
    <2 empty items>,
    [ [Array] ],
    <3 empty items>
  ]
}

 */
