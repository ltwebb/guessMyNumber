'use strict';

//let secretNumber = Math.trunc(Math.random() * 20) + 1;
//let score = 20;
//let highscore = 0;


//document.querySelector('.message').textContent = 'Correct Number!😃'
//document.querySelector('.number').textContent = 13
//document.querySelector('.score').textContent = 10
//use .textContent to select the text from the element. some elements have lots of other info so if you are just changing the text, use .textcontent

//document.querySelector('.guess').value = 23;
//to get values from input fields use .value
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;



 //when check is clicked this gets the value 
 document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no number is entered 
    if(!guess) {
        document.querySelector('.message').textContent = 'No number!';
    
    // when correct number is entered
    } else if (guess === secretNumber) {
            
            document.querySelector('.message').textContent = 'You are correct!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.color = '#60b347';
            document.querySelector('.message').style.color = '#60b347';
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
    
    //when number is too high
    } else if (guess > secretNumber) {
        if(score > 1) {
            
            document.querySelector('.message').textContent = 'Too high! Try again.';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').style.color = '#990000';
        } else {document.querySelector('.message').textContent = "You lost the game.";
                document.querySelector('.score').textContent = 0;
                document.querySelector('.message').style.color = '#990000'; 
            }
    
    //when number is too high
    } else {
        if(score > 1) {
        document.querySelector('.message').textContent = 'Too low! Try again.';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').style.color = '#990000'; 

    //when score reaches 0
    } else {document.querySelector('.message').textContent = "You lost the game.";
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').style.color = '#990000';  }
}
   


//play again reset page
document.querySelector('.again').addEventListener('click', function() {
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;; 
document.querySelector('.message').textContent = 'Guess the number I\'\m thinking of...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#ffffff';
document.querySelector('.number').style.color = '#000000';
document.querySelector('.message').style.color = '#000000';
});
});