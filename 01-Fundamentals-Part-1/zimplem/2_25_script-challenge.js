/*
Coding Challenge 3
*/

const scoreDolphins = 99; //(96 + 108 + 89) / 3;
const scoreKoalas = 99; //(88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
