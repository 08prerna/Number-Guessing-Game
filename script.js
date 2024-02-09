let randNumber=Math.floor(Math.random()*100)+1;

const submit = document.querySelector("#guessSubmit");
const userInput = document.querySelector(".guessField");
const prevGuess = document.querySelector(".prevGuess");
const remGuess = document.querySelector(".remGuess");
const start = document.querySelector(".result-container");
const estimation = document.querySelector(".estimation");

const button=document.createElement("button");

let previousGuess=[];
let noGuess=1;
let startGame=true;

if(startGame){
    submit.addEventListener("click",function(e) {
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<=0){
        alert("Please enter a value greater than 0");
    }
    else if(guess>100){
        alert("Please enter a value less than 100");
    }
    else{
        previousGuess.push(guess);
        if (noGuess===11){
            displayGuess(guess);
            estimation.innerHTML=`<h1>Game Over! Number was ${randNumber}</h1>`;
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    userInput.value="";
    prevGuess.innerHTML+=` ${guess}`;
    noGuess++;
    remGuess.innerHTML=`${11-noGuess}`;
}

function checkGuess(guess) {
    if(guess===randNumber){
        estimation.innerHTML = `<h1 class="fs-3 text-info-emphasis">You guessed correctly!</h1>`;
        endGame();
    }
    else if(guess<randNumber){
        estimation.innerHTML = `<h1 class="fs-3 text-info-emphasis">Too Low! Try again!</h1>`
    }
    else{
        estimation.innerHTML = `<h1 class="fs-3 text-info-emphasis">Too High! Try again!</h1>`
    }
}

function endGame() {
    userInput.value="";
    userInput.setAttribute("disabled","");
    button.classList.add("w-100", "py-2", "mb-2", "btn", "btn-outline-success", "rounded-3", "newStart")
    button.innerHTML='Start New Game';
    start.appendChild(button);
    startGame=false;
    newGame();
}

function newGame() {
    const newStart=document.querySelector(".newStart");
    newStart.addEventListener("click",function () {
        randNumber = Math.floor(Math.random() * 100) + 1;
        previousGuess = [];
        noGuess = 1;
        startGame = true;
        prevGuess.innerHTML="";
        remGuess.innerHTML=`${11-noGuess}`;
        estimation.innerHTML="";
        userInput.removeAttribute("disabled");
        start.removeChild(button);
    })
}
console.log(randNumber);
