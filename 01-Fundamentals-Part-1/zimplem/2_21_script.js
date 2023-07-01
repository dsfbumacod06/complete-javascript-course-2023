/*
Truthy and Falsy Values

Falsy values
  - not exactly false, but is false when converted to boolean.
  - 5 cases
    - 0
    - ''
    - undefined
    - null
    - NaN

  Truthy Values
    - inverse of falsy values

Type Coercion to Boolean
  - comparison operators
  - control statements
*/

console.log("Falsy Values");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("Truthy Values");
console.log(Boolean(25));
console.log(Boolean("hello"));
console.log(Boolean(String));
console.log(Boolean({})); // empty object
console.log(Boolean(typeof false));

const money = 100;
// even if defined, if variable is set to 0, it will be falsy.
if (money) {
  console.log("Don't spend it all!!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED.");
}
