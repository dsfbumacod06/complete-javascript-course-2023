/*
Challenge!

Dolphins vs Koalas
*/

"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const scoreDolphins = calcAverage(23, 34, 27);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins . . .");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
