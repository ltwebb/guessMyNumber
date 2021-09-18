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

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);
});//this gets the value input in the box and logs it to the console

