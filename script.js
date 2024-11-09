'use strict';

// function calcAge(birthYear) {
//   const age = 2030 - birthYear;
//   function printAge () {
//     const output  = `You are ${age}, born in ${birthYear}`

//   }
//   return age
// }

// const firstName = 'Prefna'

// calcAge(1998)

// THIS KEYWORD
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2030 - birthYear);
//   console.log(this);
// }
// calcAge(1998)

// const calcAgeArrow = birthYear => {
//   console.log(2030 - birthYear);
//   console.log(this);
// }
// calcAgeArrow(2000);

// const prefna = {
//   birthYear: 1998,
//   calcAge: function (){
//     console.log(this);
//     console.log(2030 - this.birthYear);
//   }
// }
// prefna.calcAge();

// const goldy = {
//   year: 2017,
// }
// goldy.calcAge = prefna.calcAge;
// goldy.calcAge()

// const prefna = {
//   birthYear: 1998,
//   calcAge: function (){
//     console.log(this);
//     console.log(2030 - this.birthYear);
//   },
//   greet: () => console.log(`hey ${this.firstName}`),
// }
// prefna.calcAge();

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

const Jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', Jessica);
console.log('After marriage: ', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 28,
  family: ['Alice', 'Bob'],
};

const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('Aftet marriage: ', jessica2Copy);
