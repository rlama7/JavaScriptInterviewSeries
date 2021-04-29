const matchBracket = (string) => {
  // empty string case
  if (string.length === 0) return 'String is empty';

  // if the string length is odd bracket is not balancd
  if (string.length % 2 !== 0) return false;

  const stack = [];
  const brackets = '[]{}()<>';
  // if open brackets push to stack
  for (let index = 0; index < string.length; index++) {
    if (
      string[index] === '[' ||
      string[index] === '{' ||
      string[index] === '(' ||
      string[index] === '<'
    ) {
      stack.push(string[index]);
    } else {
      stack.pop(string[index]);
    }
  }
  // if closed brackets pop off the stack

  // at the end the stack should be empty for balanced situation
  return stack.length === 0;
};

const str0 = '';
const str1 = '[{()}]';
const str2 = '[{(){}}]{}';
const str3 = '[{{}{}}]{}';
const str4 = '[{(]';
const str5 = '((()){})';

console.log(matchBracket(str0)); // String is empty
console.log(matchBracket(str1)); // true
console.log(matchBracket(str2)); // true
console.log(matchBracket(str3)); // true
console.log(matchBracket(str4)); // false
console.log(matchBracket(str5)); // false
