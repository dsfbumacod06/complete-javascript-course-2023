/*
Equality Operators
===
  -> strict equality operator
  -> does not perform type coercion


==
  -> loose equality operator
  -> performs type coercion

!= -> lose inequality
!== -> strict inequality
*/

console.log("Equality Operators");
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!!");
} else {
  console.log("You have no taste!!");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
