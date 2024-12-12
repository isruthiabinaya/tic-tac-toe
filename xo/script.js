let playerTurn = "x";
let moves = 0;
let isGameOver = false;
const span = document.getElementsByTagName("span");

function play(cell) {
  if (cell.dataset.player === "none" && !isGameOver) {
    cell.innerHTML = playerTurn;
    cell.dataset.player = playerTurn;
    moves++;

    playerTurn = playerTurn === "x" ? "o" : "x";

    checkWinner(1, 2, 3);
    checkWinner(4, 5, 6);
    checkWinner(7, 8, 9);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(3, 6, 9);
    checkWinner(1, 5, 9);
    checkWinner(3, 5, 7);

    if (moves === 9 && !isGameOver) draw();
  }
}

function checkWinner(a, b, c) {
  a--; b--; c--;
  if (
    span[a].dataset.player === span[b].dataset.player &&
    span[b].dataset.player === span[c].dataset.player &&
    (span[a].dataset.player === "x" || span[a].dataset.player === "o") &&
    !isGameOver
  ) {
    span[a].parentNode.classList.add("activeBox");
    span[b].parentNode.classList.add("activeBox");
    span[c].parentNode.classList.add("activeBox");
    gameOver(span[a].dataset.player);
  }
}

function gameOver(winner) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert";
  alertDiv.innerHTML = `<b>GAME OVER</b><br><br> Player ${winner.toUpperCase()} Wins! <br><br> <button onclick="resetGame()">Restart</button>`;
  document.body.appendChild(alertDiv);
  isGameOver = true;
  moves = 0;
}

function draw() {
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert";
  alertDiv.innerHTML = `<b>DRAW!</b><br><br> <button onclick="resetGame()">Restart</button>`;
  document.body.appendChild(alertDiv);
  isGameOver = true;
  moves = 0;
}

function resetGame() {
  document.querySelector(".alert").remove();
  isGameOver = false;
  moves = 0;
  playerTurn = "x";

  for (let i = 0; i < span.length; i++) {
    span[i].dataset.player = "none";
    span[i].innerHTML = "&nbsp;";
    span[i].parentNode.classList.remove("activeBox");
  }
}
