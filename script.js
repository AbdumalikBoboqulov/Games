'use strict';
// document.querySelector('.number').textContent = 5
document.querySelector('.Uz').addEventListener('click', function () {
  document.querySelector('h1').textContent = "O'ylagan sonni top";
  document.querySelector('.between').textContent = ' 1 dan 20 gacha son';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.check').textContent = 'Tekshir';
  document.querySelector('.message').textContent = 'Taxminiy Son';
  document.querySelector('.label-score').textContent = '💯 Imkonyatlar : 20 ';
  document.querySelector('.label-highscore').textContent = ' 🥇 Rekord : 0';
});
document.querySelector('.Eng').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💯 Score: 20 ';
  document.querySelector('.label-highscore').textContent = '🥇 Highscore: 0';
});

('use strict');

let computerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let tili = 'uzb';

console.log(computerNumber);

let engToUzb = {
  '⛔️ No number!': '⛔️ Raqam yuq',
  '📈 Too high': '📈 Katta son',
  '📉 Too low': '📉 Kichik son',
  '✅ Correct Number': '✅ Tugri son',
  '😔 You lost the game': '😔 Uyinda yutqazdingiz',
  'Start guessing...': 'Topishni boshla...',
};

let english = {
  '⛔️ No number!': '⛔️ No number!',
  '📈 Too high': '📈 Too high',
  '📉 Too low': '📉 Too low',
  '✅ Correct Number': '✅ Correct Number',
  '😔 You lost the game': '😔 You lost the game',
  'Start guessing...': 'Start guessing...',
};

function showMessage(message) {
  if (tili == 'uzb') {
    document.querySelector('.message').textContent = engToUzb[message];
  } else {
    document.querySelector('.message').textContent = english[message];
  }
}

// document.querySelector('.number').textContent = computerNumber;

document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNumber) {
      showMessage('⛔️ No number!');
    } else if (guessNumber !== computerNumber) {
      showMessage(guessNumber > computerNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('✅ Correct Number');
      document.querySelector('.number').textContent = computerNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    message.textContent = '😔 You lost the game';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  computerNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.Uz').addEventListener('click', function () {
  tili = 'uzb';
  document.querySelector('h1').textContent = 'Meni raqamimni top';
  document.querySelector('.between').textContent = '1 dan 20 gacha';
  document.querySelector('.again').textContent = 'Yana';
  document.querySelector('.check').textContent = 'Tekshiring';
  document.querySelector('.message').textContent = 'Taxminni boshla...';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Yaxshisi: <span class="highscore">0</span>';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball: <span class="score">20</span>';
});
document.querySelector('.Eng').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.between').textContent = 'Between 1 and 20';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Highscore: <span class="highscore">0</span>';
  document.querySelector('.label-score').innerHTML =
    '💯 Score: <span class="score">20</span>';
});
