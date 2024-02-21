document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors"));

let moves = ["rock", "paper", "scissors"];
let getComputerChoice = () => moves[Math.floor(Math.random() * moves.length)];

let getRoundResult = (pS, computerSelection) => {
  switch (computerSelection) {
    case "rock":
      return pS === "rock" ? "t" : pS === "paper" ? "p" : "c";
    case "paper":
      return pS === "paper" ? "t" : pS === "scissors" ? "p" : "c";
    case "scissors":
      return pS === "scissors" ? "t" : pS === "rock" ? "p" : "c";
  }
};

const elComputerLastMove = document.querySelector("#computer-move");
const elPlayerLastMove = document.querySelector("#player-move");
const elResult = document.querySelector("#result");

const elComputerScore = document.querySelector("#computer-score");
const elPlayerScore = document.querySelector("#player-score");
const elTieScore = document.querySelector("#tie-score");

let computerScore, playerScore, tieScore;
computerScore = playerScore = tieScore = 0;

let playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const res = getRoundResult(playerSelection, computerSelection);

  let resString;
  if (res === "t") {
    resString = "Tie!";
    elTieScore.textContent = ++tieScore;
  } else if (res === "p") {
    resString = "Player victory!";
    elPlayerScore.textContent = ++playerScore;
  } else {
    resString = "Computer victory!";
    elComputerScore.textContent = ++computerScore;
  }

  elComputerLastMove.textContent = computerSelection;
  elPlayerLastMove.textContent = playerSelection;
  elResult.textContent = resString;

  if (playerScore === 5) {
    alert(`The player has won with a score of 5-${computerScore}!`);
    location.reload();
  } else if (computerScore === 5) {
    alert(`The computer has won with a score of 5-${playerScore}.`);
    location.reload();
  }
};
