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

console.log(
  '\n----------------BEGIN---------------------------------------------'
);
/**
 * Average Salary for the persons
 *   */
const salaryArray = [];

// iterate through person object and convert salary from string to int then push it to salaryArray;
person.map((item, index) => {
  salaryArray.push(parseInt(person[index].salary));
});
console.log('salaryArray: ');
console.log(salaryArray);

// sum salary array
const sum = salaryArray.reduce((accum, value) => accum + value);

console.log('salary sum -> ' + sum);

const averageSalary = sum / salaryArray.length;
console.log(`average Salary --> ${averageSalary}`);

console.log('\n-------------------------------------------------------------');

/**
 * People who are above age > 32 return firstName & lastName
 *
 */

// iterate through the person object's DOB property
// convert DOB to seconds
// collect firstName & lastname where age > 32
const getAge = (dob) => {
  // number of milliseconds elapsed since Jan 1 1970 00:00:00 UTC w/leap seconds ignored
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const fullName = person.filter((dob, index) => {
  if (getAge(person[index].DOB) > 32)
    return person[index].firstName + person[index].lastName;
});
console.log('sorted person that are age > 32: ');
console.log(fullName);
console.log('\n-------------------------------------------------------------');

/**
 * Sorted on the basis of Age (Youngest to Oldest)
 *
 **/
const sortedPersonOnAge = person.sort((a, b) => getAge(b.DOB) - getAge(a.DOB));
console.log(
  'sorted person based on DOB YEAR and not Month and DAY: --> need updates here! '
);
console.log(sortedPersonOnAge);

/**
 * Sorted on the basis of Salary (ascending order)
 *
 **/
console.log('\n-------------------------------------------------------------');
const sortedPersonOnSalary = person.sort(
  (a, b) => parseInt(a.salary) - parseInt(b.salary)
);

console.log('sorted person on salary: ');
console.log(sortedPersonOnSalary);
console.log('\n-------------------------------------------------------------');

/**
 * Sorted on the basis of lastName (a to z) ignore upper and lowercase
 *
 **/
const sortPersonOnLastName = person.sort(
  (a, b) => a.lastName.toLowerCase() - b.lastName.toLowerCase()
);

console.log('sort person based on Last name: ');
console.log(sortPersonOnLastName);

console.log('\n-------------------------------------------------------------');
const sortPersonOnFirstName = person.sort(
  (a, b) => a.firstName.toLowerCase() - b.firstName.toLowerCase()
);
console.log('sort person based on First name: ');
console.log(sortPersonOnFirstName);
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
console.log('uniqueArr using Set:');
console.log(uniqueArr);

// remove duplicates using filter
const filterDuplicates = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);

console.log('arr: ' + arr);
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
const array01 = [13, 4, 5, 615, 13, 17, 19, 38, 64, 81];
console.log('array01 ' + array01);
console.log('checkPrime: ');
console.log(checkPrime(array01));

console.log('\n-------------------------------------------------------------');
let date1 = '10/12/2010';
let date2 = '11/12/2010';
let date3 = '12-12-2010';
console.log(date1.split('/')[2]);
// get js date format then year
console.log('full year date3: -> ' + new Date(date3).getFullYear());

console.log('new Date:');
// parse date String
let newDate1 = new Date(date1);
let newDate2 = new Date(date2);
let newDate3 = new Date(date3);
console.log('newDate1 -> ' + newDate1.toString());
console.log('newDate2 -> ' + newDate2.toString());
console.log('newDate3 -> ' + newDate3.toString());

// getTime() convert dates to milliseconds then convert it to seconds by dividing by 1000
console.log('\nDate in seconds: ');
let seconds = 1000;
console.log('newDate1 in seconds-> ' + newDate1.getTime() / seconds);
console.log('newDate2 in seconds-> ' + newDate2.getTime() / seconds);
console.log('newDate3 in seconds -> ' + newDate3.getTime() / seconds);

console.log('typeof newDate2 -> ' + typeof newDate2);

let diff =
  newDate1.getTime() / seconds < newDate3.getTime() / seconds
    ? 'older'
    : 'younger';
console.log(`Who's older? ${diff}`);

console.log(
  '\n-------------------END------------------------------------------'
);
