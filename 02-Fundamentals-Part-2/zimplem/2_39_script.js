/*
Introduction to Arrays

*/

"use strict";

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Peter", "Steven"]; //literal syntax
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //last element
friends[2] = "Jay";
console.log(friends);

// only primitive values are immutable when using const.
// elements can be changed but the variable cannot be redefined.
// friends = [5, 4]; // does not work

const y = new Array(1991, 1984, 2008, 2020);

const firstName = "Dhobs";
const dhobhie = [firstName, "Booms", 2037 - 1991, "programmer", friends];
console.log(dhobhie);
console.log(dhobhie.length);

const calcage = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length - 1]);

const ages = [
  calcage(years[0]),
  calcage(years[1]),
  calcage(years[years.length - 1]),
];
console.log(ages);
