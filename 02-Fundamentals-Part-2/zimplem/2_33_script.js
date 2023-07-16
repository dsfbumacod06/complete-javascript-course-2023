/*
Functions
    - fundamental building block of javascript
    - piece of code that we can reuse
    - variable for chunks of code
*/

"use strict";

function logger() {
  // function body
  console.log("My name is Dhobhi3e!!");
}

logger(); // invoke/run/call
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
