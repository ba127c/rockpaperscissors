// buttons is a node list. It looks and acts much like an array.
const playerMove = document.querySelectorAll('.playerMove');

let yourScore = 0;
let comScore = 0;
let outcome = "";

// and for each one we add a 'click' listener
playerMove.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();

        singleRound(playerSelection, computerSelection);

        if (yourScore == 5 || comScore == 5) {
            finalScore();
            playerMove.forEach((button) => {
                button.setAttribute('disabled', '');
                button.classList.add('disabled-button', 'opacity');
                button.setAttribute('style', 'background-color: grey;', 'cursor: not-allowed;', 
                "transform: none;")
              });
        }
    });
});


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
        if (choice == 1) {
            return "rock";
        }

        else if (choice == 2) {
            return "paper";
        }

        if (choice == 3) {
            return "scissors";
        }
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result = "Draw";
    }
    else if ((playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors"))
        {
        yourScore++;
        result = "Win";
    
    } else if ((playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper"))
        {
        comScore++;
        result = "Lose";
    }
    console.log(result);
    console.log(computerSelection);
    console.log("Your score: " + yourScore + "\n Computer's score: " + comScore);
    roundResult.textContent = `${result}!`;
    yourPoints.textContent = `Player: ${yourScore}`;
    comPoints.textContent = `Computer: ${comScore}`;
    computer.textContent = `Computer: ${computerSelection}`;
}

const yourPoints = document.getElementById('yourScore');
const comPoints = document.getElementById('comScore');
const finalOutcome = document.getElementById('finalOutcome');
const roundResult = document.getElementById('roundResult');
const startOver = document.querySelector('#startOver');
const computer = document.getElementById('computer')

function finalScore() {
    if (yourScore > comScore) {
        outcome = "winner!";
    }
    else if (yourScore < comScore) {
        outcome = "loser...";
    }
    console.log("You are the " + outcome);
    finalOutcome.textContent = `You are the ${outcome}`
    yourPoints.textContent = `Player: ${yourScore}`;
    comPoints.textContent = `Computer: ${comScore}`;
}

function restart() {
    yourScore = 0;
    comScore = 0;
    outcome = "";
    yourPoints.textContent = `Player: ${yourScore}`;
    comPoints.textContent = `Computer: ${comScore}`;
    finalOutcome.textContent = `Who will win?`
    roundResult.textContent = `?`
}

/*const allButtons = document.querySelector('#buttons');
const startOver = document.createElement('button');
startOver.textContent = "Start Over";
allButtons.appendChild(startOver);*/
startOver.addEventListener('click', () => {
    restart();
    playerMove.forEach((button) => {
        button.removeAttribute('disabled');
        button.setAttribute('style', 'background-color: paleturquoise;', 'cursor: pointer;', 
                "transform: translateY(2px);")
      });
});
