/*
Arrow Functions
  - ES6
  - special form of function expression
  - does not have a "this" keyword.

*/

"use strict";

// normal function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1980, "Jennyah"));
