'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// value property is used to get the value of input fields
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('div[class="number"]').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No guess
  if (!guess) {
    displayMessage('⛔ No number');

    // When player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//challenge: implement the again button functionality

document.querySelector('.again').addEventListener('click', function () {
  // setting variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //resetting content
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //resetting style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// console.log(document.querySelector('.again'));
