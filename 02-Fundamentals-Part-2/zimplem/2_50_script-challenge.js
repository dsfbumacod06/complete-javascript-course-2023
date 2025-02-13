/*
Challenge 4!

Tip Calculator 3
*/

"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const [tips, totals] = [[], []];

const calcTip = function (bill) {
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
