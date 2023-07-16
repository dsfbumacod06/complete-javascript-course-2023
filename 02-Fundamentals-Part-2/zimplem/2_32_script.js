/*
Strict Mode
    - forbids us to do certian things
    - creates visible errors in the developer console
*/

"use strict";
// needs to be in the first line

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// strict mode displays an error in the console

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D ");

const interface = "Audio";
const private = 534;
// const if = 23;
// strict mode displays that interface is a reserved word
