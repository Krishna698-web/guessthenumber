// Buttons
const playAgain = document.querySelector('#playAgain')
const checkBtn = document.querySelector('#check');

// Fields
const secretNum = document.querySelector('#secretNum')

// Generates a random number from 1 - 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let finalScore = 20;

// Variables that access the DOM element from the document
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');

let heading = document.querySelector('.heading')

// Check event is triggered
checkBtn.addEventListener('click', () => {
    let guess = document.querySelector('.guess');
    let guessNumber = Number(guess.value);

    if(!guessNumber){
        message.textContent = 'Please enter a number';
    }else if(guessNumber < randomNumber){
        message.textContent = 'Number is Low';
        finalScore--;
        score.textContent = finalScore;
    }else if(guessNumber > randomNumber){
        message.textContent = 'Number is High';
        finalScore--;
        score.textContent = finalScore;
    }else if(guessNumber === randomNumber){
        message.textContent = 'You win';
        highScore.textContent = score.textContent;
        secretNum.textContent = randomNumber;
        document.body.style.backgroundColor = 'green';
        heading.style.color = '#181818';
    }
    
    if(finalScore === 1){
        message.textContent = 'You lost!!';
        score.textContent = 0;
        checkBtn.disabled = true;
    }
    
})


// Play again event is triggered
playAgain.addEventListener('click', () => {
    checkBtn.disabled = false
    score.textContent = 20;
    message.textContent = "Let's begin the game"    
    document.querySelector('.guess').value = '';
    secretNum.textContent = '?';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#181818';
    heading.style.color = '#FF4E50';

})