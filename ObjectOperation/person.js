/**
 * Given a person object perform following operations:
 *  - find average salary
 * - find people who are above 30 years old
 * - Sorted on the basis of Age (Youngest to Oldest)
 */

const person = [
  {
    firstName: 'Hemendra',
    lastName: 'Chouhan',
    DOB: '11/28/1989',
    department: 'Software Development',
    salary: '50000',
  },
  {
    firstName: 'Subhash',
    lastName: 'Chouhan',
    DOB: '11/28/1958',
    department: 'Administration',
    salary: '40000',
  },
  {
    firstName: 'Aditi',
    lastName: 'Chouhan',
    DOB: '10/04/1989',
    department: 'Human Resource',
    salary: '33000',
  },
  {
    firstName: 'Nisha',
    lastName: 'Chouhan',
    DOB: '08/25/1956',
    department: 'Education',
    salary: '50012',
  },
  {
    firstName: 'Sunny',
    lastName: 'Chouhan',
    DOB: '11/19/1989',
    department: 'Information Technology',
    salary: '45000',
  },
  {
    firstName: 'Rahul',
    lastName: 'Shrivastava',
    DOB: '09/23/1989',
    department: 'Recruitment',
    salary: '80000',
  },
  {
    firstName: 'Harsh',
    lastName: 'Gautam',
    DOB: '01/09/1986',
    department: 'Recruitment',
    salary: '52000',
  },
  {
    firstName: 'Ramesh',
    lastName: 'Chouhan',
    DOB: '09/23/1982',
    department: 'Training Development',
    salary: '60000',
  },
];

/**
 * Average Salary for the persons
 *   */
const salaryArray = [];

// iterate through person object and convert salary from string to int then push it to salaryArray;
person.map((item, index) => {
  salaryArray.push(parseInt(person[index].salary));
});

console.log(salaryArray);

// sum salary array
const sum = salaryArray.reduce((accum, value) => accum + value);

console.log('salary sum -> ' + sum);

const averageSalary = sum / salaryArray.length;
console.log(`average Salary --> ${averageSalary}`);
console.log('\n-------------------------------------------------------------');

/**
 * People who are above 32 return firstName & lastName
 *  */
// let date = '10/12/3010';
// console.log(date.split('/')[2]);

// iterate through the person object based on year of birth and find the age above 32

console.log('\n-------------------------------------------------------------');
// Sorted on the basis of Age (Youngest to Oldest)

console.log('\n-------------------------------------------------------------');

console.log('\n-------------------------------------------------------------');

/**
 * Utility functions
 *
 */

// filter
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10];

// find even and odds
console.log('even items:');
const even = arr.filter((item) => item % 2 === 0);
console.log(even);

// find odd items
console.log('odd items:');
const odd = arr.filter((item) => item % 2 !== 0);
console.log(odd);

// remove duplicates

// use set --> can only contain unique elements
// #1
const uniqueArr = [...new Set(arr)];
console.log('uniqueArr:');
console.log(uniqueArr);

// remove duplicates using filter
const filterDuplicates = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);

console.log('remove duplicates using filter: ');
console.log(filterDuplicates(arr));

// find prime numbers in the array
const checkPrime = (arr) => arr.filter(isPrime);

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log('checkPrime: ');
console.log(checkPrime(arr));
console.log('\n-------------------------------------------------------------');
