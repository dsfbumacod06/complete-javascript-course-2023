/*
Boolean Logic
  - uses several true or false values.
  - AND, OR, and NOT

Logical Operators
*/

console.log("Boolean Logic/Logical Operators");
const hasDriversLicence = true;
const hasGoodVision = true;
console.log(hasDriversLicence && hasGoodVision); // and
console.log(hasDriversLicence || hasGoodVision); // or
console.log(!hasDriversLicence); // not

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true;
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
