// String ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5 
console.log ('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + 
'. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 using template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is 
${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;

// Other String functions startsWith(), endsWith(), includes(), repeat()
console.log(n.startsWith('j'));
console.log(n.endsWith('ith'));
console.log(n.includes('oh'));
console.log(`${n}`.repeat(5));