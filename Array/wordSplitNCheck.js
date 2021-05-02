/**
 * Given a word and a dictionary collection of words, we need to find the way to
 * split the word and check if the splitted word exists in the dictionary
 *
 * I -> INPUT
 *      word = 'newspaper'  , list = ['apple', 'cherry', 'news', 'mango', 'new',  'pencil', 'paper']
 * O -> OUTPUT
 *      true  // since we can find news and paper and also new
 * C -> CONSTRAINTS
 *      optimize
 *      only two split words
 *      e.g. news+paper, pine+apple
 *      NOT more than 2 split words
 * E -> EDGE CASES
 *      // empty string/ word does not exist in the data set / list is empty
 *
 * @param {*} word word to be splitted and verify if the splitted word exits in a dictionary;
 * @parm {*} list list of words
 */
const wordSplitNCheck = (word, list) => {
  // word can't be empty and list can't be empty
  if (word.length === 0 || list.length === 0) return false;
  //   console.log(word.substr(0, 1));

  // apply sliding window technique starting from the first character in the 0th index
  // of word
  // on each iteration, you get two words: 0the index to the current window and the rest
  // compare if the first word and the second word exists in the list and
  // if the words includes in the list
  // return the words
  // also increment the nextPointer so we move on to do next set of comparisons

  let firstPointer = 0,
    nextPointer = 1;

  // store found words in result array
  const result = [];

  // iterate over the splitWordArray
  while (nextPointer < word.length - 1) {
    let firstWord = word.substring(firstPointer, nextPointer), // first index 0 to next 1 but end index is excluded
      secondWord = word.substring(nextPointer);
    // if the endIndex is omitted, substring() extracts characters to the end of the string

    if (list.includes(firstWord) && list.includes(secondWord)) {
      return [firstWord, secondWord];
    }

    // increment the nextPointer
    nextPointer++;
  }

  // by this point we should have found some words in the result
  // if that is not the case then the substring words do not exist in the dictionary list
  return 'Sub string words not found in the dictionary';
};

const word1 = 'newspaper';
const list1 = ['apple', 'cherry', 'news', 'mango', 'new', 'pencil', 'paper'];

const word2 = 'cobweb';
const list2 = ['apple', 'sob', 'cop', 'cob', 'new', 'webpage', 'web'];

const word3 = 'raylove';
const list3 = ['ray', 'cherry', 'love', 'mango', 'new', 'pencil', 'paper'];

const word4 = 'mountainbike';
const list4 = [
  'bicycle',
  'bilke',
  'bike',
  'mount',
  'mountain',
  'pencil',
  'paper',
];

const word5 = '';
const list5 = [];

const word6 = 'crossbow';
const list6 = ['bow', 'bowels', 'croc', 'crook', 'cross', 'pencil', 'paper'];

const word7 = 'ironman';
const list7 = [
  'iron',
  'men',
  'women',
  'ferrous',
  'superwoman',
  'pencil',
  'paper',
];

console.log(wordSplitNCheck(word1, list1)); // [ 'new', 'news', 'paper' ] // true

console.log(wordSplitNCheck(word2, list2)); // [ 'cob', 'web' ] // true;
console.log(wordSplitNCheck(word3, list3)); // [ 'ray', 'love' ] // true
console.log(wordSplitNCheck(word4, list4)); // [ 'mount', 'mountain', 'bike' ] //true
console.log(wordSplitNCheck(word5, list5)); // false
console.log(wordSplitNCheck(word6, list6)); // [ 'cross', 'bow' ] // true;
console.log(wordSplitNCheck(word7, list7)); // Sub string words not found in the dictionary // false

// console.log(word.includes('news'));
// console.log(list.includes(...word));
