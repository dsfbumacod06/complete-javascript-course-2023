/*
Dot vs Bracket Notation

*/

"use strict";

// object liretal syntax
const dhobhie = {
  firstName: "Dhobhie",
  lastName: "Booms",
  age: 2037 - 1998,
  job: "programmer",
  friends: ["Jenny", "Jisoo", "Lisa", "Rose"],
};

console.log(dhobhie);

// dot notation
console.log(dhobhie.lastName);

// bracket notation
// argument can be an expression, hence a result of a computation/operation
console.log(dhobhie["lastName"]);

// comparing the notations
// bracket > dot in this case
const nameKey = "Name";
console.log(dhobhie["first" + nameKey]);
console.log(dhobhie["last" + nameKey]);
const interestedIn = prompt(
  "What do you want to know about Dhobhie? Choose between firstName, lastName,age, job, friends."
);
// console.log(dhobhie.interestedIn); // dot notation does not accept variables
// console.log(dhobhie[interestedIn]);
// trying to access properties that does not exist returns undefined.
// undefined is a falsy value, hence we an catch it
if (dhobhie[interestedIn]) {
  console.log(dhobhie[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName,age, job, friends."
  );
}

dhobhie.location = "Japan";
dhobhie["twitter"] = "@mhiema23";
console.log(dhobhie);

// Challenge
// Write a code the logs
// "Jonas has 3 friends, his best priend is called Michael."
console.log(
  `
  ${dhobhie.firstName} has ${dhobhie.friends.length} friends, his best friend is called ${dhobhie.friends[0]}
  `
);
