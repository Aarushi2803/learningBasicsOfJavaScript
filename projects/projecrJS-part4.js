const random_num = parseInt( Math.random()*100 + 1);
const submit = document.querySelector('# ');
const userGuess = document.querySelector('#userGuess');
const lowORhigh = document.querySelector('#lowORhigh')
const prevGuess = document.querySelector('#prevGuess');
const remaining = document.querySelector('#remainingGuess');

const p = document.createElement('p') 

let prevGuesses = [];
let remainingGuesses = 1;
let playGame = true;
 
function validateGuess(userGuess){ 
     if(isNaN(userGuess)){
        alert('Please enter a valid number')
     } 
     else if(userGuess < 0){
       alert('Please enter a number greater than 0') 
     }
     else if(userGuess>101){
       alert('Please enter a number less than 101')
     }
     else{
        if(remainingGuesses > 11) {
            displayGuess(userGuess)
            displayMessage(`Game over . Random number is ${random_num}`) 
            endGame();
        }
        else{
            displayGuess(userGuess)
            checkGuess(userGuess)
        }
     } 
} 
   
function checkGuess(userGuess){
    if(userGuess=== random_num){
        displayMessage('Congratulations✨, You guessed it right')
    }
    else if(userGuess < random_num){
        displayMessage(`Number is too low.`)
    } 
    else if(userGuess > random_num){
        displayMessage(`Number is too high.`)
    }
} 

function displayGuess(userGuess){
   userGuess.value = ''
     
}
function displayMessage(message){
   userGuess.value
}