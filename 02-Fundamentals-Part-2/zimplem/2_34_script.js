/*
Function Declarations vs Expressions
  - function declarations can be invoked before they are defined, unlike expressions.

Which to use?
  - preference


'expressions produce values'
'functions are values that can be stored in variables'

*/

"use strict";

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
