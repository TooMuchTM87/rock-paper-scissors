let playerChoice = '';
let computerChoice = '';
let roundCount = 0;
let playerCount = 0;
let tieCount = 0;
let computerCount = 0;

let title = document.querySelector(".title");
let titleText = document.createElement("div");
title.appendChild(titleText);
titleText.textContent = "Rock Paper Scissors";
titleText.style.fontSize = "xxx-large";
titleText.style.display = "flex";
titleText.style.justifyContent = "center";

let scoreboard = document.querySelector(".scoreboard");

let playerScoreboard = document.createElement("div");
playerScoreboard.textContent = "Player:";
scoreboard.appendChild(playerScoreboard);
let playerCountText = document.createElement("span");
playerCountText.textContent = `${playerCount}`;
playerScoreboard.appendChild(playerCountText);

let tieScoreboard = document.createElement("div");
tieScoreboard.textContent = "Ties:";
scoreboard.appendChild(tieScoreboard);
let tieCountText = document.createElement("span");
tieCountText.textContent = `${tieCount}`;
tieScoreboard.appendChild(tieCountText);

let computerScoreboard = document.createElement("div");
computerScoreboard.textContent = "Computer:";
scoreboard.appendChild(computerScoreboard);
let computerCountText = document.createElement("span");
computerCountText.textContent = `${computerCount}`;
computerScoreboard.appendChild(computerCountText);

playerScoreboard.style.fontSize = "xx-large";
playerScoreboard.style.display = "flex";
playerScoreboard.style.justifyContent = "center";
playerScoreboard.style.color = "green"

tieScoreboard.style.fontSize = "xx-large";
tieScoreboard.style.display = "flex";
tieScoreboard.style.justifyContent = "center";
tieScoreboard.style.color = "orange";

computerScoreboard.style.fontSize = "xx-large";
computerScoreboard.style.display = "flex";
computerScoreboard.style.justifyContent = "center";
computerScoreboard.style.color = "red";

let buttonContainer = document.querySelector(".buttonContainer");
let rockButton = document.createElement("button");
buttonContainer.appendChild(rockButton);
rockButton.textContent = "Rock";
rockButton.style.fontSize = "large";
rockButton.style.borderRadius = "22%"

buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.gap = "30px";
buttonContainer.style.marginTop = '20px';

let paperButton = document.createElement("button");
buttonContainer.appendChild(paperButton);
paperButton.textContent = "Paper";
paperButton.style.padding = "8px";
paperButton.style.fontSize = "large";
paperButton.style.borderRadius = "22%"

let scissorsButton = document.createElement("button");
buttonContainer.appendChild(scissorsButton);
scissorsButton.textContent = "Scissors";
scissorsButton.style.fontSize = "large";
scissorsButton.style.borderRadius = "22%"

let restartButton = document.createElement("button");
buttonContainer.appendChild(restartButton);
restartButton.textContent = "Restart";
restartButton.style.backgroundColor = "Red";
restartButton.style.color = "white";
restartButton.style.fontSize = "large";

let choiceDisplay = document.querySelector(".choiceDisplay");
let playerDisplay = document.createElement("div");
choiceDisplay.appendChild(playerDisplay);
playerDisplay.textContent = `Player:`;
playerDisplay.style.display = "flex";
playerDisplay.style.justifyContent = "center";
playerDisplay.style.padding = "10px";
playerDisplay.style.fontSize = "35px";
playerDisplay.style.color = "green";

let computerDisplay = document.createElement("div");
choiceDisplay.appendChild(computerDisplay);
computerDisplay.textContent = `Computer:`;
computerDisplay.style.display = "flex";
computerDisplay.style.justifyContent = "center";
computerDisplay.style.fontSize = "35px";
computerDisplay.style.color = "red";


let roundCounterDisplay = document.querySelector('.roundCounter');
let roundCounterTxt = document.createElement('div');
roundCounterDisplay.appendChild(roundCounterTxt);
roundCounterTxt.textContent = `Round: ${roundCount}/5`;
roundCounterDisplay.style.display = "flex";
roundCounterDisplay.style.justifyContent = "center";
roundCounterDisplay.style.padding = "10px";
roundCounterDisplay.style.fontSize = "35px";

function rockClick() {
    rockButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Rock';
    paperButton.style.backgroundColor = 'white';
    scissorsButton.style.backgroundColor = 'white';
    playerChoice = 'Rock';
    playRound(playerChoice, getComputerChoice());
    computerDisplay.textContent = `Computer: ${computerChoice}`;
}

function paperClick() {
    paperButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Paper';
    rockButton.style.backgroundColor = 'white';
    scissorsButton.style.backgroundColor = 'white';
    playerChoice = 'Paper';
    playRound(playerChoice, getComputerChoice());
    computerDisplay.textContent = `Computer: ${computerChoice}`;
};

function scissorsClick() {
    scissorsButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Scissors';
    rockButton.style.backgroundColor = "white";
    paperButton.style.backgroundColor = "white";
    playerChoice = 'Scissors';
    playRound(playerChoice, getComputerChoice());
    computerDisplay.textContent = `Computer: ${computerChoice}`;
};

function restartClick() {
    rockButton.style.backgroundColor = "white";
    paperButton.style.backgroundColor = "white";
    scissorsButton.style.backgroundColor = "white";
    playerDisplay.textContent = 'Player:';
    computerDisplay.textContent = 'Computer:';
    playerCountText.textContent = 0;
    tieCountText.textContent = 0;
    computerCountText.textContent = 0;
    roundCount = 0;
    playerCount = 0;
    tieCount = 0;
    computerCount = 0;
    playerChoice = '';
    computerChoice = '';
    roundCounterTxt.textContent = `Round: ${roundCount}/5`;
}

function getComputerChoice() {
    let option = Math.floor(Math.random() * 100);
    if (option <= 33) {
        return computerChoice = "Rock";
    }else if (option >= 34 && option <= 67) {
        return computerChoice = "Paper";
    }else {
        return computerChoice = "Scissors";
    }
}

function winner() {
    if (playerCount > computerCount) {
        alert ('you win')
    }else if (playerCount < computerCount) {
        alert ('you lose')
    }else{
        playerCount === computerCount;
        alert ('its a tie')
    }    
}

function playRound(playerChoice, computerChoice) {
    if (roundCount == 5) {
        restartClick(winner());
    } else {
        if (playerChoice === "Rock" && computerChoice === "Paper") {
            computerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            computerCountText.textContent = `${computerCount}`;
        }else if (playerChoice === "Paper" && computerChoice === "Scissors") {
            computerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            computerCountText.textContent = `${computerCount}`;
        }else if (playerChoice === "Scissors" && computerChoice === "Rock") {
            computerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            computerCountText.textContent = `${computerCount}`;
        }else  if (playerChoice === "Rock" && computerChoice === "Scissors") {
            playerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            playerCountText.textContent = `${playerCount}`;
        }else if (playerChoice === "Paper" && computerChoice === "Rock") {
            playerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            playerCountText.textContent = `${playerCount}`; 
        }else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            playerCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            playerCountText.textContent = `${playerCount}`;
        }else{
            tieCount++;
            roundCount++;
            roundCounterTxt.textContent = `Round: ${roundCount}/5`;
            tieCountText.textContent = `${tieCount}`;
        }
    }
}

rockButton.addEventListener('click', rockClick);
paperButton.addEventListener('click', paperClick);
scissorsButton.addEventListener('click', scissorsClick);
restartButton.addEventListener('click', restartClick);