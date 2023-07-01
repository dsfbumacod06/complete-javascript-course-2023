/*
Coding Challenge 1
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);
