/*
Array Operations/Methods

*/

"use strict";

const friends = ["Michael", "Steven", "Peter"];

// Adding Elements

// push adds an element to the end of an array
// push returns the new lengh of the array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// unshift adds an element at the start of the array
// also returns the new length of the array
friends.unshift("John");
console.log(friends);

// Removing Elements

// pop removes the last element of the array
// returns the removed element
friends.pop();
const popped = friends.pop();
console.log(friends);
// console.log(popped);

// shift removes the first element of the array
// returns the removed element
friends.shift();
console.log(friends);

// Other methods

// indexOf returns the index of the matching element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bobby")); // returns -1 if element does not exist

// includes checks if an element exists.
console.log(friends.includes("Steven")); // true if existing
console.log(friends.includes("Bobby")); // false if not existing
// implements using strict equality
friends.push(23);
console.log(friends.includes("23")); // returns false

if (friends.includes("Steven")) console.log("You have a friend named Steven!");
