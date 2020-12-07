/**
 * Gind whether an array is a subset/subsequence of another array
 *
 * Another Variant - Given two Strings, find if the first String is a subsequence of second one
 *
 * For Example,
 *  -consider Two Strings s1 and s2. A subsequence/subset is a sequence that can be derived from another
 * sequence by deleting some elements without changing the order of the remaining elements.
 *
 * #1
 * s1 = "Work Smart", s2 = "art"
 * ---> TRUE
 * -s2 is a subset/subsequence because it is formed
 * from the the String s1 without changing any order of the String s1.
 *
 * # 2
 * s1 = "Apple", s2 = "Ale", s3 = "App", s4 = "pleA"
 * --> TRUE:  s2 and s3 are subset/subsequence of s1
 * --> FALSE: s4 is NOT subset/subsequence of s1 --> although all characters appear in
 *          : s1, the order in which they appear also matter. In this case 'A' does not appear after 'e'.
 *          : Thus FALSE
 *
 * Time Complexity is  linear : O(n)
 * Space Complexity is constant : O(1) --> no extra space created
 *
 * Make use of TWO pointers
 *
 */

const stringSubsequenceValidation = (s1, s2) => {
  // find the length of each strings
  let m = s1.length;
  console.log(`The length of ${s1} is : ${m}`);

  let n = s2.length;
  console.log(`The length of ${s2} is : ${n}`);

  let j = 0;

  // Traverse s1 and s2, and compare each characters of s2 with
  // that of s1
  // if the characters of both s1 and s2 match then move the
  // head s2
  for (let i = 0; i < m && j < n; i++) {
    if (s1.charAt(i) == s2.charAt(j)) {
      j++;
    }
  }
  // If all characters of s2 were found in s1 then return true/false
  return j == n;
};

console.log(stringSubsequenceValidation('Apple', 'Ale')); // TRUE
console.log(stringSubsequenceValidation('AlexIntheWonderland', 'xtldr')); // FALSE
