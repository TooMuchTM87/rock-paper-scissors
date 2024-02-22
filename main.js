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


