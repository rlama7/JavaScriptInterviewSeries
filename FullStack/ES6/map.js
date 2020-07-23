// Map

'use strict';

// ES5 


// ES6
const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct anser');
question.set(false, 'Wrong, please try again!');



console.log(question);

console.log(question.get('question'));

console.log(question.size);
console.log(question.delete(4));
console.log(question.get(3));

if(question.has(2)) {
    console.log(question.get(2));
}

// clear deltes all
// question.clear();
// console.log(question.size);

// iteration  forEach
question.forEach((key, value) => {
    console.log(`${key}: ${value}`);
})

// for of
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === quetion.get('correct')));