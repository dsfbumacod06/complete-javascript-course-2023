/*
Reviewing Functions

*/

"use strict";

// arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// function expression
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired! 💥 `);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Duvhie"));
console.log(yearsUntilRetirement(1970, "Jisoo"));
