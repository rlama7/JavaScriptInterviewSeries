/**
 * Given a person object perform following operations:
 *
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
 * given an object find people who are above 30 years old
 * @param {*} person input object
 *
 * ---Algorithm---
 * 1. map through the person object and grab DOB
 */
const getCorrectDOB = (dob) => {
  let today = new Date();
  let birthday = new Date(dob);
  let age = today.getFullYear() - birthday.getFullYear();
  return age;
};

const findPersonAgeGreaterThan32 = (person) => {
  person.filter((item, index) => {
    if (getCorrectDOB(person[index].DOB) > 32) return person[index].firstName;
  });
};

console.log(findPersonAgeGreaterThan32(person)); // [63, 65, 35, 39];

const array = [0, 1, 1, 1, 2, 2, 3, 3, 4];

const unique = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);
console.log(unique(array));

const even = (array) => array.filter((item) => item % 2 === 0);
console.log(even(array));

/**
 * UTILITY
 */
let today = new Date();
let birthday = new Date('11/12/1950');
let age = today.getFullYear() - birthday.getFullYear();
console.log('today: ' + today + '\nbirthday: ' + birthday + '\nage: ' + age);
