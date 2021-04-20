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
 * find average salary
 *
 * ---Algorithm---
 * 1. map throught the person object and grab salary property
 * 2. parse string salary to int
 * 3. apply reduce to get the sum of salary
 * 4. divide the total sum of the salary by person object's length
 */

const getAverageSalary = (person) => {
  return (
    person
      .map((item, index) => parseInt(person[index].salary))
      .reduce((accumulator, value) => accumulator + value) / person.length
  );
};

console.log(getAverageSalary(person)); // 51,251.5
