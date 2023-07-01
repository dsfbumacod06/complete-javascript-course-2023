/*
Conditional Ternary Operator/Expression
  - single line if else statement
*/

console.log("Conditional Ternary Operator");

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// using if-else
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); // if else cannot be used but ternary operator works
