'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // steven is used, variable lookup does not occur if the variable is already found within the score. -- note that the change does not affect the global variable firstName
      const str = `Oh, and you'are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // const output = `NEW OUTPUT!`; const -> local, output only reassigns
    }
    // console.log(str); // does not work, const and let are block-scoped
    console.log(millenial); // works, not block scoped
    // console.log(add(2, 3)); // does not work, functions are block-scoped in strict mode only
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Junathan';
calcAge(1991);
console.log(firstName);
// console.log(age); // does not work
// printAge(); // does not work

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (var val = 0; val < 3; val++) {
//   const printVal = function () {
//     console.log(`The number is ${val}`);
//   };
//   setTimeout(printVal(), 1000);
//   // setTimeout(function () {
//   //   console.log(`The number is ${val}`);
//   // }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(`The number is ${i}`);
//   }, 1000);
// }

// for (var val = 0; val < 3; val++) {
//   console.log(val);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
