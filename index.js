let inputElement1 = document.getElementById("player-name-1");
let inputElement2 = document.getElementById("player-name-2");
let h3Element1 = document.getElementById("player1");
let h3Element2 = document.getElementById("player2");
let player1div = document.getElementById("player1-div");
let player2div = document.getElementById("player2-div");
let form1Element = document.getElementById("form1");
let form2Element = document.getElementById("form2");
let savePlayerButton1 = document.getElementById("save-player-btn-1");
let savePlayerButton2 = document.getElementById("save-player-btn-2");

let switchPlayerParagraph = document.getElementById("switch-paragraph");
let winnerParagraph = document.getElementById("winner-paragraph");

let startGameButton = document.getElementById("start-game");
let gameSectionElement = document.getElementById("game");
let activePlayerSpan = document.getElementById("active-player");
let activePlayerSymbol = "X";

let nineGameFields = document.querySelectorAll("li");

let player1name;
let player2name;
let winner;
let numberOfTurns = 0;
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

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
  savePlayerButton1.style.display = "none";
  savePlayerButton2.style.display = "none";
}

function openGameBoard() {
  if (!player1name || !player2name) {
    alert("Please enter and save names for both players!");
    return;
  }

  winner = undefined;
  numberOfTurns = 0;
  gameSectionElement.style.display = "block";
  switchPlayerParagraph.style.display = "block";
  activePlayerSpan.textContent = player1name;
  activePlayerSymbol = "X";
  winnerParagraph.textContent = "";
  winnerParagraph.classList.remove("winner");
  for (let oneGameField of nineGameFields) {
    oneGameField.textContent = "";
    gameBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }

  startGameButton.textContent = "Restart game";
}

function addSimbol(event) {
  if (event.target.textContent !== "" || winner != undefined || winner === "draw") {
    return;
  }
  event.target.textContent = activePlayerSymbol;

  let fieldRow = +event.target.dataset.row;
  let fieldCol = +event.target.dataset.col;
  gameBoard[fieldRow][fieldCol] = activePlayerSymbol;
  console.log(gameBoard);

  checkForWinner();
  

  if (activePlayerSymbol === "X") {
    activePlayerSymbol = "O";
    activePlayerSpan.textContent = player2name;
  } else {
    activePlayerSymbol = "X";
    activePlayerSpan.textContent = player1name;
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] != 0 &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][0] === gameBoard[i][2]
    ) {
      if (gameBoard[i][0] === "X") {
        winner = player1name;
      } else {
        winner = player2name;
      }
      alert(`We have a winner, congratulations ${winner}`);
      switchPlayerParagraph.style.display = "none";
      winnerParagraph.textContent = `${winner}, you won!`;
      winnerParagraph.classList.add("winner");
    }

    if (
      gameBoard[0][i] != 0 &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[0][i] === gameBoard[2][i]
    ) {
      if (gameBoard[0][i] === "X") {
        winner = player1name;
      } else {
        winner = player2name;
      }
      alert(`We have a winner, congratulations ${winner}`);
      switchPlayerParagraph.style.display = "none";
      winnerParagraph.textContent = `${winner}, you won!`;
      winnerParagraph.classList.add("winner");
    }
  }

  if (
    gameBoard[0][0] != 0 &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[0][0] === gameBoard[2][2]
  ) {
    if (gameBoard[0][0] === "X") {
      winner = player1name;
    } else {
      winner = player2name;
    }
    alert(`We have a winner, congratulations ${winner}`);
    switchPlayerParagraph.style.display = "none";
    winnerParagraph.textContent = `${winner}, you won!`;
    winnerParagraph.classList.add("winner");
  }

  if (
    gameBoard[0][2] != 0 &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[0][2] === gameBoard[2][0]
  ) {
    if (gameBoard[0][2] === "X") {
      winner = player1name;
    } else {
      winner = player2name;
    }
    alert(`We have a winner, congratulations ${winner}`);
    switchPlayerParagraph.style.display = "none";
    winnerParagraph.textContent = `${winner}, you won!`;
    winnerParagraph.classList.add("winner");
  }
  numberOfTurns++;

  if(numberOfTurns === 9){
    winner = "draw";
    alert("It is a draw!");
    switchPlayerParagraph.style.display = "none";
    winnerParagraph.textContent = `It is a draw!`;
    winnerParagraph.classList.add("winner");
  };
}

console.log(winner);

form1Element.addEventListener("submit", savePlayerName);
form2Element.addEventListener("submit", savePlayerName);

startGameButton.addEventListener("click", openGameBoard);

for (let oneGameField of nineGameFields) {
  oneGameField.addEventListener("click", addSimbol);
}
