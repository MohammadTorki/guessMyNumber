'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;
const displayMessage = function (text) {
  return (document.querySelector('.message').textContent = text);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (guess < 1) {
    displayMessage('⛔ Not a Number!');

    // When player wins
  } else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!');

    // HighScore!
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Manipulating styles in CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  if (guess !== secretNumber) {
    if (guess > 1) {
      displayMessage(guess > secretNumber ? '📈 Go Lower!' : '📉 Go Higher!');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
      // When player loses in the "Go Lower!" section
    } else if (scoreNumber == 1) {
      // Manipulating styles in CSS
      document.querySelector('body').style.backgroundColor = '#ff4141';
      document.querySelector('.number').style.width = '30rem';
      displayMessage(`💔 You've lost!`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again! btn
document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
