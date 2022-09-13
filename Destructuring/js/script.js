// const {
//     /* Properties here */
// } = objectName;

// const { property1, property2} = objectName;

const streetNumbers = [ 12, 13, 14, 50, 1, 51]


const [x, y] = streetNumbers;

console.log(x, y);

const person = {
    firstName: 'Michael',
    lastName: 'Wasilewski',
    country: 'Norway',
};

const names = ["Michael", "Emil", "Sander", "Sandra"]

const [a, b, c, ...others] = names;
console.log(a, b, c,);
console.log(others);

const values = [3, 4, 5, 12, 32];
const [value0, , value2] = values;
console.log(value0, value2);

const myCat = {
    name: 'Vincent',
    age: '9',
    breed: 'cute',
};
const {name, age, breed} = myCat;
console.log(name,age,breed);
// dot notation
// const firstName = person.firstName;
// const lastName = person.lastName;
// const country = person.country;

// const greeting = `Hello, I am ${firstName} ${lastName} from ${country}.`;
// console.log(greeting);
// Use of destructuring 

// const {firstName, lastName, country} = person;
// const greeting = `Hello i am ${firstName} ${lastName} from ${country}`;
// console.log(greeting);

// const {

// } = objectName;

// const { property1, property2} = objectName;

// const user = {
//     firstName: 'Michael',
//     lastName: 'Wasilewski',
//     country: 'Poland',
// };

// const { firstName, lastName, country} = user;
// const greet = `Hello, I am ${firstName} ${lastName} from ${country}.`;
// console.log(greet); 

// function greetPerson ({ firstName, lastName }) {
//     console.log(`Hello ${firstName} ${lastName}.`);
// }
// const person ={
//     firstName:'Michael',
//     lastName: 'Wasilewski',
// };

// greetPerson(person);

// const people = [
//     {
//       firstName: 'Ola',
//       lastName: 'Nordmann',
//       score: 8,
//     },
//     {
//       firstName: 'Kari',
//       lastName: 'Nordmann',
//       score: 9,
//     },
//     {
//       firstName: 'Joakim',
//       lastName: 'Nordmann',
//       score: 4,
//     },
//   ];
  
//   const winners = people.filter((currentItem) => {
//     if (currentItem.score >= 5) {
//       return true;
//     }
//   });

const people = [
    {
      firstName: 'Ola',
      lastName: 'Nordmann',
      score: 8,
    },
    {
      firstName: 'Kari',
      lastName: 'Nordmann',
      score: 9,
    },
    {
      firstName: 'Joakim',
      lastName: 'Nordmann',
      score: 4,
    },
    {
        firstName: 'mich',
        lastName: 'Thebish',
        score: 29,
      },
  ];
  
  // Destructuring 'score' property from the current element
  const winners = people.filter(({ score }) => {
    if (score >= 5) {
      return true;
    }
  });
  console.log(winners);

// function that greets user

function greetUser ({firstName, country}){
    console.log(`Hello ${firstName} from ${country}`);
};
greetUser(person);


// destruct from array

// const [
//     // values here
// ] = arrayName;

// const [
//     value1, value2
// ] = arrayName;

