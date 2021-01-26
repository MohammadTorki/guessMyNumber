'use strict';

// Variables
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() { // again btn
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function() { // check btn
  
  const guess = Number(document.querySelector('.guess').value);
  
  if (score > 1) {
    if (!guess) { // When there is no input
      displayMessage('No input!');
      
    } else if (guess === secretNumber) { // Right answer (player wins)
      displayMessage('Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      
      if (score > highScore) { // Highscore
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      
    } else if (guess !== secretNumber) { // Wrong answer (score--)
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Go lower!' : 'Go higher!');
    }

} else { // player lose
    displayMessage('You have lost the game!');
    document.querySelector('.score').textContent = '-0-';
}
});