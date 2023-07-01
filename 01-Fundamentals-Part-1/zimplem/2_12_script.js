/*
let -> declaring a variable that may change value
        later on. 
    -> block-scoped
const -> declaring a variable that cannot change
        value. -> initial value is required.
      -> block-scoped
var -> not advised
    -> works the same as let
    -> global-scoped
    -> allows access before declaration

not using let or const delares the variable
in the global-scope
*/

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";
