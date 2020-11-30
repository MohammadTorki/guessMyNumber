'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (guess < 1) {
    document.querySelector('.message').textContent = '⛔ Not a Number!';

    // When player wins
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // HighScore!
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Manipulating styles in CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When player should go Lower
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Go Lower!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;

      // When player loses in the "Go Lower!" section
    } else if (scoreNumber == 1) {
      // Manipulating styles in CSS
      document.querySelector('body').style.backgroundColor = '#ff4141';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.message').textContent = `💔 You've lost!`;
      document.querySelector('.score').textContent = 0;
    }

    // When player should go Higher
  } else {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📉 Go Higher!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;

      // When player loses in the "Go Higher" section
    } else if (scoreNumber == 1) {
      // Manipulating styles in CSS
      document.querySelector('body').style.backgroundColor = '#ff4141';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.message').textContent = `💔 You've lost!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
