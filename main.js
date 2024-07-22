let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let rand = Math.random();
    if (rand <= 0.3) {
        return "rock";
    } else if (rand > 0.3 && rand <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerChoice = prompt("input your choice: (rock, paper, scissors)");
    return playerChoice.trim().toLowerCase()
}

// could create an object where there is a key for each choice (rock paper scissors) and the value for that key is the choice which beats it (e.g rock: 'scissors',)

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        alert("Draw! You both chose " + humanChoice);
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        alert("Win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
    } else {
        alert("Lose! " + humanChoice + " loses to " + computerChoice);
        computerScore += 1;
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        alert("Congrats, you win! (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } else if (computerScore > humanScore) {
        alert("Unlucky, you lost! (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } else {
        alert("Wow, you drew! Play again to find the champion (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } 
}

playGame();