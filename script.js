"use strict";

// create random number between 1 and 20, assign to variable secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let playerScore = 20;

// document.querySelector(".number").textContent = secretNumber;

// add event listener to the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number entered!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "💥 Correct Number! 💥";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore").textContent = playerScore;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (playerScore > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      document.querySelector(".message").textContent = "💀 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    if (guess > 20) {
      document.querySelector(".message").textContent =
        "🚫 Number greater than 20!";
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (playerScore > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      document.querySelector(".message").textContent = "💀 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
