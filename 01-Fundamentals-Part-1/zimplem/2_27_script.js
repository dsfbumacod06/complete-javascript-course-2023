/*
Statements vs Expressions

Expression
  - a piece of code that produces a value.

Statement
  - does not produce a value
*/

console.log("Statements vs Expressions");
3 + 4; // expression
1991; // expression
true && false && !false; // expression

// statement
// if-else, switch
if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old.`); // expression is expected not a statement
// console.log(`I'm ${2037 - 1991} years old. ${if (23 > 10) {
//   const str = "23 is bigger";
// }}`);
// console.log(`I'm ${2037 - 1991} years old. ${let x = 5}`);
