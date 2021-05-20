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
 * Find proper age and then filter out persons that are above 32 years old
 * @param {*} dob
 */
console.log('\n------Filter by AGE------------------------------');
const getCorrectAge = (dob) =>
  Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10);

console.log(getCorrectAge('09/23/1982'));

// find person greater than age 32
const getPersonAgeGreaterThan32 = (person) =>
  person.filter((personItem, index) => {
    if (getCorrectAge(person[index].DOB) > 32) {
      return personItem;
    }
  });

console.log(getPersonAgeGreaterThan32(person));

console.log('\n------Filter by SALARY------------------------------');
// filter persons by salary greater than 55,000
const getPersonWithSalaryGreaterThan55K = (person, targetSalary) =>
  person.filter((personItem, index) => {
    if (parseInt(person[index].salary) > targetSalary) {
      return personItem;
    }
  });

console.log(getPersonWithSalaryGreaterThan55K(person, 55000));

console.log('\n------Sort by SALARY------------------------------');

const sortBySalary = (person) =>
  person.sort((a, b) => parseInt(a.salary) - parseInt(b.salary));

console.log(sortBySalary(person));

console.log('\n------Sort by LastName------------------------------');

const sortByFirstName = (person) =>
  person.sort((a, b) => a.firstName - b.firstName);

console.log(sortByFirstName(person));
