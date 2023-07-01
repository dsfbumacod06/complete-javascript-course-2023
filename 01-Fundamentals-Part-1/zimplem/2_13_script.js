/*
Types of operators
    - Mathematical/Arithmetic
    - Assignment Operators
    - Comparison Operators
*/

//Mathematical/Arithmetic
// subtraction
console.log("Arithmetic Operations");
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// multiplication, division, exponential function
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// addition
// string concatenation
const firstName = "Dhobs";
const lastName = "Booms";
console.log(firstName + " " + lastName);

// Assignment Operators
// Equal
console.log("Assignment Operations");
let x = 10 + 5; // 15
// x = x + 10
x += 10; // 25
// x = x * 4
x *= 4; // 100
x++; // increment by 1
x--; // decrement by 1
console.log(x);

// Comparison Operators
// >, <, >=, <=
console.log("Comparison Operations");
console.log(ageJonas > ageSarah); // True
console.log(ageSarah >= 18); // False

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
