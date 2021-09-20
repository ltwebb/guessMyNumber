'use strict';

//variables for 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displayTextColor = function (colors) {
    document.querySelector('.message').style.color = colors;
    document.querySelector('.number').style.color = colors;
};

const displayBackgroundColor = function (background) {
    document.querySelector('body').style.backgroundColor = background;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


//use .textContent to select the text from the element. some elements have lots of other info so if you are just changing the text, use .textcontent

//when check is clicked this gets the value 
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    //when no number is entered 
    if (!guess) {
        displayMessage('No number!');

        // when correct number is entered
    } else if (guess === secretNumber) {

        displayMessage('You are correct!');
        displayTextColor('#60b347');
        displayBackgroundColor('#60b347');
        document.querySelector('.number').textContent = secretNumber;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                y: 0.6
            }
        });

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when number is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber ? displayMessage('Too high! Try a smaller number.') : displayMessage('Too low! Try a bigger number.');
            score--;
            displayScore(score);
            displayTextColor('#990000');

        } else {
            displayMessage('You lost the game, but you can try again!');
            displayScore(0);
            displayTextColor('#990000');

        }
    }


    //play again reset page
    document.querySelector('.again').addEventListener('click', function () {
        displayScore(20);
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Guess the number I\'\m thinking of...');
        displayScore(score);
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        displayTextColor('#000000');
        displayBackgroundColor('#ffffff');
    });
});