'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven'; // steven is used, variable lookup does not occur if the variable is already found within the score. -- note that the change does not affect the global variable firstName
//       const str = `Oh, and you'are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // const output = `NEW OUTPUT!`; const -> local, output only reassigns
//     }
//     // console.log(str); // does not work, const and let are block-scoped
//     console.log(millenial); // works, not block scoped
//     // console.log(add(2, 3)); // does not work, functions are block-scoped in strict mode only
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Junathan';
// calcAge(1991);
// console.log(firstName);
// // console.log(age); // does not work
// // printAge(); // does not work




// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }

// // for (var val = 0; val < 3; val++) {
// //   const printVal = function () {
// //     console.log(`The number is ${val}`);
// //   };
// //   setTimeout(printVal(), 1000);
// //   // setTimeout(function () {
// //   //   console.log(`The number is ${val}`);
// //   // }, 1000);
// // }

// // for (let i = 0; i < 3; i++) {
// //   setTimeout(function () {
// //     console.log(`The number is ${i}`);
// //   }, 1000);
// // }

// // for (var val = 0; val < 3; val++) {
// //   console.log(val);
// // }

// // for (let i = 0; i < 3; i++) {
// //   console.log(i);
// // }




// hoisting ----------------------

// variables
// console.log(me); // undefined
// console.log(job); // in the temporal deadzone
// console.log(year); // in the temporal deadzone

var me = 'dube';
let job = 'programmer';
const year = 1991;


// functions
// console.log(addDec(1,2)); // 3
// console.log(addExpr(1,2)); // in the TDZ
// console.log(addArrow(1,2)); // in the TDZ


function addDec(a,b) {
  return a+b;
}

const addExpr = function(a,b) {
  return a+b;
}

// const addArrow = (a,b) => a+b;



// causes the function to have a value of undefined
// so if we try to call them, we get "undefined not a function" error.
// var addExpr = function(a,b) {
//   return a+b;
// }

var addArrow = (a,b) => a+b;



// Example:
//undefined is also a falsy value, hence causing the shopping cart to be deleted
if(!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All prducts deleted!')
}

var x = 1;
let y = 1;
const z = 3;

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)