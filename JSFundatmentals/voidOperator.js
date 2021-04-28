// This function can be called as you want and when you want
const testFunction = () => {
  console.log('Hello World!');
};
testFunction();

// This function will evalute the given expression and then return undefined
// You won't be able to call it again!
void (function anotherFunction() {
  console.log('You can not see this print');
})();

// anotherFunction(); <-- This will result in reference error as there is
// no record of anotherFunction()

// following function is declared and immediately executed
(function testX() {
  console.log('This is test function');
})();
