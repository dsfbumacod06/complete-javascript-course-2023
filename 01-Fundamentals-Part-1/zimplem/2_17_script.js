/*
String and Template Literals
*/

const firstName = "Dubebe";
const job = "Software Developer";
const birthYear = 1998;
const year = 2037;

// type coercion, number -> string
const dhobs =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(dhobs);

//Template Literals
const dhobsNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(dhobsNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
    multiple \n\
    lines"
);

console.log(`String with
    multiple
    lines`);
