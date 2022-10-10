"use strict";

// create random number between 1 and 20, assign to variable secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

// add event listener to the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number entered!";
  }
});
