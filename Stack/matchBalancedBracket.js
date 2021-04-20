const matchBalancedBracket = (inputString) => {
  // if the length of the string is odd we know that the bracket is not balanced
  if (inputString.length % 2 !== 0) return false;

  // Super important to have the opening and closing order of the matched brackets
  // CAN NOT be like [{(<>)}] <- even though the bracker it matched,
  // we need to track opening and closing of the brackets. This is because
  // in following scenario opening brackets have even indexex (0,2,4,6) AND
  // closing brackets have odd indexes (1,3,5,7)
  let matchedBrackets = '[]{}()<>';

  let stack = [];

  for (let bracket of inputString) {
    let openingBracketsIndex = matchedBrackets.indexOf(bracket);

    // if the bracket is an opening bracket i.e. with index=even
    // then push to the stack the index of the closing bracket which
    // is one more index than the opening bracket's index
    // !----
    // the closing brackets is pushed onto the stack and the NOT The actual closing bracket itself.
    // stack.push(bracketsIndex + 1);
    if (openingBracketsIndex % 2 === 0) {
      stack.push(openingBracketsIndex + 1);
    } else {
      if (stack.pop() !== openingBracketsIndex) return false;
    }
  }

  // if all matches and balances out then stack should be empty
  return stack.length === 0;
};

const string1 = '[{(<>)}]'; // true
const string2 = '[{([{(<>)}])}]'; // true
const string3 = '[{[{()}](<>)}]'; //  true
const string4 = '[{()}[{()}]]'; //  true
const string5 = '[{()}[{(<>)}]'; // false

console.log(matchBalancedBracket(string1));
console.log(matchBalancedBracket(string2));
console.log(matchBalancedBracket(string3));
console.log(matchBalancedBracket(string4));
console.log(matchBalancedBracket(string5)); // false

console.log(
  string1.length,
  string2.length,
  string3.length,
  string4.length,
  string5.length
);
//string 1->5 length:  8 14 14 12 13
