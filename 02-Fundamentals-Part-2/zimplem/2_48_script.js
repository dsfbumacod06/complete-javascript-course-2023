/*
Looping backwards,
loops in loops
*/

"use strict";

const dhobsArray = [
  "Dhobs",
  "Booms",
  2031 - 1998,
  "programmer",
  ["Jenny", "Jisoo", "Lisa"],
];

// 0, 1 . . . n
// n, n-1 . . 0
for (let i = dhobsArray.length - 1; i >= 0; i--) {
  console.log(dhobsArray[i]);
}

for (let i = 1; i < 4; i++) {
  console.log(`---------- Starting exercise ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Exercise ${i}: Lifting weights repetition ${j}`);
  }
}
