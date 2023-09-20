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
