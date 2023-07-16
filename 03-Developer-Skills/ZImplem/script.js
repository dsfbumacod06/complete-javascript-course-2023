// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* 
Setting up Prettier and VS Code


*/

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));

/*
Using google, stackoverflow, and MDN
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// console.log(Math.max(temperatures));
// console.log(Math.min(temperatures));

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

/*
problem 2 function should now accept two arrays
*/

// const calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, [25, -9]);
// console.log(amplitude);

//Debugging
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// with bug
// const calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = 0; //temps[0];
//   let min = 0; //temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     debugger;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude([9, 2, 1], [25, 4, 17]);
// console.log(amplitude);

let td1 = [17, 21, 23];
let td2 = [12, 5, -5, 0, 4];

// my code
const printForecast = function (foreCast) {
  let message = '...';
  for (let i = 0; i < foreCast.length; i++) {
    message += ` ${foreCast[i]}°C in ${i + 1} days ...`;
  }
  return message;
};

// lecture code

console.log(printForecast(td1));
console.log(printForecast(td2));
