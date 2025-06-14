let targetNumber;
let attempts;
let gameOver;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const guessReset = document.getElementById('reset-btn'); 
const message = document.getElementById('message');
const DisplayAttempt = document.getElementById('attempts');
const prevGuess = document.getElementById('previous-guesses');

function initGame(){
    targetNumber = Math.floor(Math.random()*100) + 1;
    attempts = 0;  // Resets attempts counter
    gameOver = false;
 
message.textContent = '';
DisplayAttempt.textContent = attempts;  //Updates the UI to show 0 attempts (resets the counter display).
prevGuess.textContent = '';
guessInput.value = '';
guessInput.disabled = false;
guessBtn.disabled = false;
} 

function checkGuess(){
   if(gameOver) return;

const guessBYuser = parseInt(guessInput.value);
if(isNaN(guessBYuser) || guessBYuser<1 || guessBYuser >100){
    message.textContent = "Please enter valid number  between 1 and 100";
    message.style.color = 'red';
    return;
} 

  attempts++;
  DisplayAttempt.textContent = attempts;

// Displaying previous guesses in array like [....]
const guessElement = document.createElement('span');
guessElement.textContent = guessBYuser;
guessElement.className = 'guess';
prevGuess.appendChild(guessElement)
prevGuess.appendChild(document.createTextNode('  ')); //spacing 

if(guessBYuser === targetNumber) { 
    message.textContent = `Congratulations , you guessed it correct in ${attempts} attempts!!`; 
    message.style.color = 'green';
    gameOver = true;
    guessInput.disabled = true;
    guessBtn.disabled = true;
}
else if(guessBYuser > targetNumber){
  message.textContent = "Number is too high!!  Try a lower number.";
  message.style.color = 'orange'; 
}
else {
    message.textContent = "Number is too low!! Try a higher number.";
     message.style.color = 'pink';
}
guessInput.value ='';
guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter') checkGuess();
})

guessReset.addEventListener('click',initGame);

initGame();