/*
Data Types
A value is either an
  - object (dictionary?)
  - primitive (string, int)

7 primitive data types
  - Number / Floating Point - eg 23
  - String - eg "Jonas"/'Jonas'
  - Boolean - eg true/false
  - Undefined - declared but not defined
  - Null - empty
  - Symbol(ES2015)
  - BigInt - Large numbers

Dynamic Typing
  - data type does not need to be defined.
  - data type determined automatically.
  - value has a type, not the variable.
*/

// single line comment
/* multiline comment */

let javascriptIsFun = true;
// let -> first time declaring a variable
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Junas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
console.log(null);
