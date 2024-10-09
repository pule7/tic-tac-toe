let inputElement1 = document.getElementById("player-name-1");
let inputElement2 = document.getElementById("player-name-2");
let h3Element1 = document.getElementById("player1");
let h3Element2 = document.getElementById("player2");
let player1div = document.getElementById("player1-div");
let player2div = document.getElementById("player2-div");
let savePlayerButton1 = document.getElementById("save-player1");
let savePlayerButton2 = document.getElementById("save-player2");

let startGameButton = document.getElementById("start-game");
let gameSectionElement = document.getElementById("game");
let activePlayerSpan = document.getElementById("active-player");

let player1name;
let player2name;

function savePlayerName(event) {
  event.preventDefault();
  player1name = inputElement1.value.trim();
  player2name = inputElement2.value.trim();
  if (player1name === "" || player2name === "") {
    alert("Please enter valid names for both players!");
    return;
  }

  h3Element1.textContent = player1name;
  h3Element2.textContent = player2name;

  player1div.style.display = "none";
  player2div.style.display = "none";
}

function openGameBoard() {
  if (!player1name || !player2name) {
    alert("Please enter and save names for both players!");
    return;
  }

  gameSectionElement.style.display = "block";
  activePlayerSpan.textContent = player1name;
 
}

savePlayerButton1.addEventListener("click", savePlayerName);
savePlayerButton2.addEventListener("click", savePlayerName);

startGameButton.addEventListener("click", openGameBoard);
