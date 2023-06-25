"use strict";

// create random number between 1 and 20, assign to variable secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let playerScore = 20;

const messageText = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const body = document.querySelector("body");

function updateMessage(msg) {
  messageText.textContent = msg;
}

function updateScore(score) {
  score.textContent = score;
}

// add event listener to the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    updateMessage("🚫 No number entered!");

    // when player wins
  } else if (guess === secretNumber) {
    updateMessage("💥 Correct Number! 💥");
    body.classList.add("win-background");
    console.log(body.classList);
    number.textContent = secretNumber;
    number.style.width = "30rem";
    document.querySelector(".highscore").textContent = playerScore;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (playerScore > 1) {
      updateMessage("📈 Too high!");
      playerScore--;
      updateScore(playerScore);
      score.textContent = playerScore;
    } else {
      updateMessage("💀 You lost the game!");
      score.textContent = 0;
      updateScore(0);
    }

    if (guess > 20) {
      updateMessage("🚫 Number greater than 20!");
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (playerScore > 1) {
      updateMessage("📉 Too low!");
      playerScore--;
      updateScore(playerScore);
    } else {
      updateMessage("💀 You lost the game!");
      updateScore(0);
    }
  }
});

// add event listener to the again button
document.querySelector(".again").addEventListener("click", function () {
  body.classList.remove("win-background");
  body.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  playerScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateMessage("Start guessing...");
  updateScore(playerScore);
  number.textContent = "?";
  number.style.width = "15rem";
});
