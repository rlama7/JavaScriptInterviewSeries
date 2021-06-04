/**
 * Given an inpur array and a reward, write a function to reward students that follows following two rules:
 *  - all students must receive at least one reward
 *  - any given student must receive strictly more rewards than an adjacent student ( a student immediately )
 *  - left or to the right ) with a lower score and must receive strictly fewer rewards than an adjacent student
 * with a higher score.
 *
 * INPUT:
 * OUTPUT:
 * CONSTRAINTS:
 *  - no duplicate score
 *  - can NOT sort
 *
 * EDGE CASES:
 *
 * TIME COMPLEXITY
 * time O(n) -> linear
 * space O(n) -> linear
 *
 * @param {*} array input array
 * @param {*} reward reward
 */
const minimumRewards = (array) => {
  const reward = [];
  const len = array.length;

  // fill reward lis with 1
  for (let index = 0; index < len; index++) {
    reward.push(1);
  }

  // iterate from left to right
  // if next number is greater than the current number going
  // left to the right increase reward by 1 to the next number
  for (let index = 0; index < len; index++) {
    let currentNumber = array[index],
      nextNumber = array[index + 1];

    if (nextNumber > currentNumber) {
      reward[index + 1] = Math.max(reward[index + 1], reward[index] + 1);
    }
  }

  // iterate from right to left
  // if next number is greater than current number going towards right to left,
  // increase the reward by 1
  for (let index = len - 1; index > 0; index--) {
    let currentNumber = array[index],
      nextNumber = array[index - 1];
    if (nextNumber > currentNumber) {
      reward[index - 1] = Math.max(reward[index - 1], reward[index] + 1);
    }
  }

  return reward;
};

const array1 = [8, 4, 2, 1, 3, 6, 7, 9, 5];

console.log(minimumRewards(array1)); // [4, 3, 2, 1, 2, 3, 4, 5, 1]
