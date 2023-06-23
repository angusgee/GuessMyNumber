"use strict";

// create random number between 1 and 20, assign to variable secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let playerScore = 20;

const messageText = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const body = document.querySelector("body");

function updateMessage(msg) {
  messageText.textContent = `${msg}`;
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
    body.style.backgroundImage =
      "linear-gradient(to right top, #60b347, #428b37, #286427, #114017, #001f00)";
    number.textContent = secretNumber;
    number.style.width = "30rem";
    document.querySelector(".highscore").textContent = playerScore;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (playerScore > 1) {
      updateMessage("📈 Too high!");
      playerScore--;
      score.textContent = playerScore;
    } else {
      updateMessage("💀 You lost the game!");
      score.textContent = 0;
    }

    if (guess > 20) {
      updateMessage("🚫 Number greater than 20!");
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (playerScore > 1) {
      updateMessage("📉 Too low!");
      playerScore--;
      score.textContent = playerScore;
    } else {
      updateMessage("💀 You lost the game!");
      score.textContent = 0;
    }
  }
});

// add event listener to the again button
document.querySelector(".again").addEventListener("click", function () {
  playerScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateMessage("Start guessing...");
  score.textContent = playerScore;
  number.textContent = "?";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  document.querySelector(".guess").value = "";
});
