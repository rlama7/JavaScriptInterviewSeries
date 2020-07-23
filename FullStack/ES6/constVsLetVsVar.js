/**
 * Const --> ES6 use to declare value that can't be reassigned. Different than immutable values those 
 * produced by immutable values.
 * Const Object can have properties mutated.
 * 
 * Let --> ES6; declares a variable with block scope; doesn't get hoisted
 * 
 * Var --> from the beginning; function scope; definition get hoisted but not the value so doesn't generate error
 * 
 * Temporal dead zone --> when definiton get hoisted but can't access value, variable is aggined undefined so the 
 * error wont' be generated
 */

 // Const example
 const name = "Ray";
//   name = "Moon";
//  console.log(name); // generates erros because name is declared as const

const person = {
    name: 'Brad',
    add: '123 Main St.',
    age: 21
}
console.log(person);
person.parent = 'Amy';
person.add = '123 New St.';
console.log(person);



 // let example of block scope
let i = 100;
for (let i = 0; i < 5; i++) {
    console.log(`For loop block i: ${i}`);
}
console.log(`outside i: ${i}`);

// test value hoisted when test prior to value assignment but does not generate error contrary to the the let 
// which generates error in such scenarios

console.log(`Value of test: ${test}`);
var test = 100;
