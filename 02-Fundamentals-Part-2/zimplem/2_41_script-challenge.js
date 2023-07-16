/*
Challenge 2!

Tip Calculator 2
15% if between 50 and 300
20% otherwise
*/

"use strict";

// expression implementation
const calcTip = function (bill) {
  // const tip = (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
  // return tip;
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
};

//arrow implementation
// const calcTip = (bill) =>
//   (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);

// console.log(calcTip(100));
// console.log(calcTip(1000));
// console.log(calcTip(10));
