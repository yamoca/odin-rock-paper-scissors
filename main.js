let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button")
const results = document.querySelector("div");
const scorep = document.querySelector("p");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});



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

// could create an object where there is a key for each choice (rock paper scissors) and the value for that key is the choice which beats it (e.g rock: 'scissors',)

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        draw(humanChoice);
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        win(humanChoice, computerChoice);
    } else {
        lose(humanChoice, computerChoice);
    }
}

function win(humanChoice, computerChoice) {
    results.replaceChildren();
    const winMsg = document.createElement("h1");
    winMsg.textContent = `Congrats you won, ${humanChoice} beats ${computerChoice}!`;

    results.appendChild(winMsg);
    
    humanScore += 1;
    scorep.textContent = `current score is ${humanScore}:${computerScore}`
}

function draw(humanChoice) {
    results.replaceChildren();
    const drawMsg = document.createElement("h1");
    drawMsg.textContent = `You drew, you both played ${humanChoice}`;

    results.appendChild(drawMsg);
    scorep.textContent = `current score is ${humanScore}:${computerScore}`
}

function lose(humanChoice, computerChoice) {
    results.replaceChildren();
    const loseMsg = document.createElement("h1");
    loseMsg.textContent = `Unlucky, you lost, ${computerChoice} beats ${humanChoice}!`;

    results.appendChild(loseMsg);
    
    computerScore += 1;
    scorep.textContent = `current score is ${humanScore}:${computerScore}`
}




function playGame() {
    for (let i = 0; i <= 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        alert("Congrats, you win! (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } else if (computerScore > humanScore) {
        alert("Unlucky, you lost! (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } else {
        alert("Wow, you drew! Play again to find the champion (" + humanScore.toString() + ":" + computerScore.toString() + ")")
    } 
}

// playGame();