/*
Type Conversion and Coercion
Type Coercion
  - converts automatically
Type Conversion
  - manually convert one type from another
*/

//Type Conversion
console.log("Type Conversion");
const inputYear = "1991";
// console.log(inputYear + 18); // concatenates
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN -> Not a number
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log("Type Coercion");
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old"); // type conversion
console.log("23" - "10" - 3); // subtracts
console.log("23" + "10" + 3); // concatenates
console.log("23" + "10" - 3); // concatenates then subtracts
console.log("23" * "2"); // multiplies
console.log("23" / "2"); // divides

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n); // 10

// let word = "word";
// str_word = word + "";
// num_word = word - 0;
// console.log(typeof str_word, str_word);
// console.log(typeof num_word, num_word);
