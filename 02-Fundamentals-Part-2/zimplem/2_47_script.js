/*
Looping Arrays, Breaking, and Continuing

Continue
  - proceed with the next iteration

Break
  - end the iteration
*/

"use strict";

const dhobsArray = [
  "Dhobs",
  "Booms",
  2031 - 1998,
  "programmer",
  ["Jenny", "Jisoo", "Lisa"],
  true,
];
const types = [];

// create another array from iterating an array
for (let i = 0; i < dhobsArray.length; i++) {
  console.log(dhobsArray[i]);
  // types[i] = typeof dhobsArray[i];
  types.push(typeof dhobsArray[i]);
}
console.log(types);

// calculate ages
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//continue
for (let i = 0; i < dhobsArray.length; i++) {
  if (typeof dhobsArray[i] !== "string") continue;
  console.log(dhobsArray[i], typeof dhobsArray[i]);
}

//break
for (let i = 0; i < dhobsArray.length; i++) {
  if (typeof dhobsArray[i] === "number") break;
  console.log(dhobsArray[i], typeof dhobsArray[i]);
}
