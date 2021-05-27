/**
 * #2 Create a function named concatenate which takes two string as arguments
 * and returns a single string composed of those two strings without space
 *
 * @param {*} string1 input string
 * @param {*} string2 input string
 *
 * --->Example<---
 * INPUT:
 *      concatenate ('foo', 'bar')
 * OUTPUT:
 *      'foobar'
 *
 * INPUT:
 *      concatenate ('hello', 'world')
 * OUTPUT:
 *      'helloworld'
 */

const concatenate = (string1, string2) => {
  //   if both strings are empty then return empty string message
  //   if (string1.length < 1 && string2.length < 1)
  //     return 'Both input strings are empty';

  // if string1 or string2 is either undefined or null return message | -1
  if (
    string1 === undefined ||
    string2 === undefined ||
    string1 === null ||
    string2 === null
  )
    return -1;

  // if string1 and string2 are not strings return message
  if (typeof string1 !== 'string' || typeof string2 !== 'string')
    return 'Please enter both input as strings and try again!';

  return string1.trim() + string2.trim();
};

console.log(concatenate(' ', ' ')); //
console.log(concatenate(undefined, undefined)); // -1
console.log(concatenate(null, null)); // -1
console.log(concatenate('hello', 1234)); // Please enter both input as strings and try again!
console.log(concatenate(' Fantastic', 'World ')); // FantasticWorld
console.log(concatenate(' Jurassic ', ' Park ')); // JurassicPark
console.log(concatenate('Dino', ' World')); // DinoWorld
console.log(concatenate(' Mango ', 'World ')); // MangoWorld
console.log(concatenate(' Oragne ', ' World ')); // OragneWorld
console.log(concatenate('foo', 'bar')); // foobar
console.log(concatenate('hello', 'world')); // helloworld
