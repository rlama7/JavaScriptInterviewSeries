/**
 * promise.js   - A program to demonstrate use of promises in Javascript.
 * @author      - Ratna Lama
 * @version     - 1.0.0
 * @description - The Promise object represents the eventual completion or failure of any
 *                asynchronous operation and its resulting value.
 *                The Promis is in one of the following three states -
 *                - pending: initial state, neither fulfilled nor rejected
 *                - fullfilled: meaning that the operation was completed succesfully
 *                - rejected: meaning that the operation failed
 *                Promis was introduced in order to avoid call back hell scenarios.
 *
 */

// Example # 1 Withoud dependency
let promiseToReadTheBook = new Promise(function (resolve, reject) {
  // reading book
  let isBookRead = true;
  let resolvedMessage = 'Finished reading the book ';
  let rejectedMessage = 'Have not finished reading the book ';

  if (isBookRead) {
    resolve(resolvedMessage);
  } else {
    reject(rejectedMessage);
  }
});

promiseToReadTheBook
  .then(function (msg) {
    console.log(msg + 'Effective JavaScript');
  })
  .catch(function (msg) {
    console.log(msg + 'Effective JavaScript');
  });

console.log(
  '\n---------------Ex#2 Promise Chaining--------------------------------------'
);

// Example #2 With Dependency -> Promise Chaining <-
// In the following example, we introduce dependency such that you've to
// study to pass the Exam and then only you can graduate.
let study = function () {
  return new Promise(function (resolve, reject) {
    let didStudy = true;
    let resolveMsg = 'Studied hard';
    let rejectMsg = 'Did not study hard';

    if (didStudy) {
      resolve(resolveMsg);
    } else {
      reject(rejectMsg);
    }
  });
};

let passExam = function (msg) {
  return new Promise(function (reject, resolve) {
    let didPassExam = true;
    let resolveMsg = ' Passed the exam';
    let rejectMsg = ' Did not pass the exam';

    if (didPassExam) {
      resolve(resolveMsg);
    } else {
      reject(rejectMsg);
    }
  });
};

let graduate = function (msg) {
  return new Promise(function (resolve, reject) {
    let didGraduate = true;
    let resolveMsg = ' Graduated';
    let rejectMsg = ' Did not graduate';

    if (didGraduate) {
      resolve(resolveMsg);
    } else {
      reject(rejectMsg);
    }
  });
};

// Chain promises
study()
  .then(function (result) {
    return passExam(result);
  })
  .catch(function (reject) {
    console.log(reject);
  })
  .then(function (result) {
    return graduate(result);
  })
  .catch(function (reject) {
    console.log(reject);
  })
  .then(function (result) {
    console.log('Congrats! You have ' + result);
  })
  .catch(function (reject) {
    console.log(reject);
  });

// Run all promises parallel
// Promise.all([study(), passExam(), graduate()]).then(function () {
//   console.log('All done!');
// });

// Example #3 --> Promises using arrow function <---
console.log('\n---------------Promise using arrow function -----------');
let promise = new Promise((resolve, reject) => {
  let x = 1 + 1;

  if (x === 2) {
    resolve('Promise resolved');
  } else {
    reject('Promised rejected');
  }
});

promise
  .then((message) => {
    console.log('Success: ' + message); // Success: Promise resolved (since x===2)
  })
  .catch((message) => {
    // fires up only if promise is rejected
    console.log('Failed: ' + message);
  });

// More example -
const recordSongOne = new Promise((resolve, reject) => {
  resolve('Song 1 recorded');
});

const recordSongTwo = new Promise((resolve, reject) =>
  resolve('Song 2 recorded')
);

const recordSongThree = new Promise((resolve, reject) =>
  resolve('Song 3 recorded')
);

// run all promises parallel then display messages
// console.log('will append all messages to array: ');
Promise.all([recordSongOne, recordSongTwo, recordSongThree]).then((messages) =>
  console.log(messages)
);

// console.log('will display the first message that was resolved: ');
Promise.race([recordSongOne, recordSongTwo, recordSongThree]).then((message) =>
  console.log(message)
);
