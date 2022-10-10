"use strict";

// create random number between 1 and 20, assign to variable secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let playerScore = 20;

document.querySelector(".number").textContent = secretNumber;

// add event listener to the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number entered!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "💥 Correct Number! 💥";
  } else if (guess > secretNumber) {
    if (guess > 20) {
      document.querySelector(".message").textContent =
        "🚫 Number greater than 20!";
    } else {
      document.querySelector(".message").textContent = "📈 Too high!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
    playerScore--;
    document.querySelector(".score").textContent = playerScore;
  }
});
