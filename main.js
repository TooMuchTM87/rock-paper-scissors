let title = document.querySelector(".title");
let titleText = document.createElement("div");
title.appendChild(titleText);
titleText.textContent = "Rock Paper Scissors";
titleText.style.fontSize = "xxx-large";
titleText.style.display = "flex";
titleText.style.justifyContent = "center";

let playerCount = 0;
let tieCount = 0;
let computerCount = 0;

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

let paperButton = document.createElement("button");
buttonContainer.appendChild(paperButton);
paperButton.textContent = "Paper";

let scissorsButton = document.createElement("button");
buttonContainer.appendChild(scissorsButton);
scissorsButton.textContent = "Scissors";

let restartButton = document.createElement("button");
buttonContainer.appendChild(restartButton);
restartButton.textContent = "Restart";

let choiceDisplay = document.querySelector(".choiceDisplay");
let playerDisplay = document.createElement("div");
choiceDisplay.appendChild(playerDisplay);
playerDisplay.textContent = `Player:`;

let computerDisplay = document.createElement("div");
choiceDisplay.appendChild(computerDisplay);
computerDisplay.textContent = `Computer:`;

let playerChoice = '';
let computerChoice ='';

function rockClick() {
    rockButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Rock';
    paperButton.style.backgroundColor = 'white';
    scissorsButton.style.backgroundColor = 'white';
    playerChoice = 'rock';
};

function paperClick() {
    paperButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Paper';
    rockButton.style.backgroundColor = 'white';
    scissorsButton.style.backgroundColor = 'white';
    playerChoice = 'paper';
};

function scissorsClick() {
    scissorsButton.style.backgroundColor = 'gray';
    playerDisplay.textContent = 'Player: Scissors';
    rockButton.style.backgroundColor = "white";
    paperButton.style.backgroundColor = "white";
    playerChoice = 'scissors';
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
    playerCount = 0;
    tieCount = 0;
    computerCount = 0;
    playerChoice = '';
    computerChoice = '';
}

rockButton.addEventListener('click', rockClick);
paperButton.addEventListener('click', paperClick);
scissorsButton.addEventListener('click', scissorsClick);
restartButton.addEventListener('click', restartClick);



