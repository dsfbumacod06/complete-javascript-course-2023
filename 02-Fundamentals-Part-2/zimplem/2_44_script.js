/*
Object Methods

*/

"use strict";

// object liretal syntax
const dhobhie = {
  firstName: "Dhobhie",
  lastName: "Booms",
  birthYear: 1998,
  job: "programmer",
  friends: ["Jenny", "Jisoo", "Lisa", "Rose"],
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} drivers license.`;
  },
};

// console.log(dhobhie.calcAge(1991));
// console.log(dhobhie["calcAge"](1991));
console.log(dhobhie.calcAge());
console.log(dhobhie.age);
console.log(dhobhie.age);
console.log(dhobhie.age);

// Challenge
// Dhoby is a 46 year-old teacher, and he has a/no drivers license.
console.log(dhobhie.getSummary());
dhobhie.friends.push("YG");
console.log(dhobhie);
