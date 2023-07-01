/*
Switch Statements
  - alternative way of writing if else statement if we want
    to compare one value to multiple values.
*/

console.log("The Switch Statement");
const day = "Saturdays";
switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup.");
    break; // no breaking causes the code to run succeeding code.
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
  default:
    console.log("Not a valid day!");
}
