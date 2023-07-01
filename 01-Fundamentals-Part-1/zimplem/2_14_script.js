/*
Operator Precedence
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > 3 * (now - 2018));

let x, y;
x = y = 25 - 10 - 5; // subtraction is left to right
// x = y = 10 -> assignment is right to left
// y = 10; then
// x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
