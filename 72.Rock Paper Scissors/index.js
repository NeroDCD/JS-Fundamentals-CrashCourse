// 72. Build JavaScript ROCK PAPER SCISSORS

// 🎯 This beginner project helps you learn the basics of DOM manipulation and using classList.
// 🗿✂️📄 a simple game where players choose between rock, paper, or scissors,
// and dynamically update the UI to show the result.

// 1️⃣ Example 1 (Title Here)
// Explain this, add emoji also

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!🏆";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!🏆" : "You Lose😭";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!🏆" : "You Lose😭";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!🏆" : "You Lose😭";
        break;
    }
  }
  playerDisplay.textContent = `😎 Player: ${playerChoice}`;
  computerDisplay.textContent = `💻 Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  //   console.log(computerChoice);
}

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also
// [emoji here]: description

// 🎯 Possible Use Cases:
//10 Use Cases, add emoji also
// 1️⃣ Use cases 1 [emoji here]: description
