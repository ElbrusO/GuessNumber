"use strict";

const buttonCheck = document.querySelector('.check');
const buttonRestart = document.querySelector('.again');
const colorBack = document.querySelector('.body');

let randomNum = Math.floor(Math.random() * 21);
let winScore = 0;
let doGameLol = true;

buttonCheck.addEventListener('click', function() {
    if (doGameLol === true) {

        const hotORcool = document.querySelector('.message');
        const inputGuess = document.querySelector('.guess');
        const inputNum = inputGuess.value;

        inputGuess.value = ''; 
        inputGuess.focus();

        const centrNumber = document.querySelector('.number');
        const scoreHigh = document.querySelector('.highscore');
        const scoreNum = document.querySelector('.score');
        let score = scoreNum.textContent;

        if (inputNum < randomNum) {
            hotORcool.textContent = 'Маленькое число';

            if (score <= 0) {
                doGameLol = false;
                hotORcool.textContent = 'Вы проиграли!';
            } else {
                scoreNum.textContent = score - 1;
            }
            
        } else if (inputNum > randomNum) {
            hotORcool.textContent = 'Большое число';

            if (score <= 0) {
                doGameLol = false;
                hotORcool.textContent = 'Вы проиграли!';
            } else {
                scoreNum.textContent = score - 1;
            }
            
        } else {
            hotORcool.textContent = 'Вы угадали число!';

            doGameLol = false;

            colorBack.classList.add('green');
            centrNumber.textContent = randomNum;

            if (winScore <= score) {
                winScore = score;
                scoreHigh.textContent = winScore;
            }
        }
    }
    // Слышь - а если попытки закончаться, то что тогда ? - Готово (line 29-30, 38-39) Вот тебе и булевое применение;
    else { alert('Нажмите -> Снова! <- для продолжения'); }
});

buttonRestart.addEventListener('click', function () {

    const scoreNum = document.querySelector('.score');
    const centrNumber = document.querySelector('.number');

    randomNum = Math.floor(Math.random() * 21);
    doGameLol = true;

    colorBack.classList.remove('green');
    scoreNum.textContent = 20;
    centrNumber.textContent = '?';
});
