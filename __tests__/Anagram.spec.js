const anagrams1 = require('../Anagram/anagram1');

// describe('cleanedStrTest', () => {
//   it('cleanedStr function exists', () => {
//     expect(typeof cleanedStr).toEqual('function');
//   });

//   it('"Hello!" is cleaned to remove !', () => {
//     expect(cleanedStr('Hello!')).toBe('hello');
//   });
// });

// describe('buildCharMapTest', () => {
//   it('buildCharMap function exists', () => {
//     expect(typeof buildCharMap).toEqual('function');
//   });

//   //   it('"hello!" is cleaned to remove !', () => {
//   //     expect(cleanedStr('Hello!')).toBe('hello');
//   //   });
// });

describe('anagram1Test', () => {
  it('anagram function exists', () => {
    expect(typeof anagrams1).toEqual('function');
  });

  it('"RAIL! SAFETY!" and "fairy ?????tales" are valid anagram', () => {
    expect(anagrams1('RAIL! SAFETY!', 'fairy ?????tales')).toBeTruthy();
  });

  it('"Apple" is NOT an anagram of "pEarL?"', () => {
    expect(anagrams1('Apple', 'pEarL?')).toBeFalsy();
  });
});
