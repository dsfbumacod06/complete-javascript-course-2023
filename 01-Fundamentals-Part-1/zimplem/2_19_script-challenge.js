/*
Coding Challenge 1
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

let message;
if (markHigherBMI) {
  message = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
  message = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
}
console.log(message);
