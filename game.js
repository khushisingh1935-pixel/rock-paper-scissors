const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoredisplay = document.getElementById("playerScoredisplay");
const computerScoredisplay = document.getElementById("computerScoredisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if(playerchoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
                case "paper": 
                result = (computerChoice === "rock") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
                case "scissors":
                    result = (computerChoice === "paper") ? "YOU WIN!" : "COMPUTER WINS!";
                    break;
        }
    }
    playerDisplay.textContent = `Player: ${playerchoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greentext", "redtext");
    switch(result){
        case "YOU WIN!" :
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoredisplay.textContent = `Player Score: ${playerScore}`;
            break;
            case "COMPUTER WINS!" :
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoredisplay.textContent = `Computer Score: ${computerScore}`;
            break;
    }
}