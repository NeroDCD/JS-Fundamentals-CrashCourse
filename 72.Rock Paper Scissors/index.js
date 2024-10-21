// 72. Build JavaScript ROCK PAPER SCISSORS

// 🎯 This beginner project helps you learn the basics of DOM manipulation and using classList.
// 🗿✂️📄 A simple game where players choose between rock, paper, or scissors,
// 💻and dynamically update the UI to show the result.

// 🕹️ This sets up the game by defining choices, initializing score displays,
// 🕹️ and implementing the main game logic in the `playGame` function.

const choices = ["rock", "paper", "scissors"]; // 🎲 Array of possible choices
const playerDisplay = document.getElementById("playerDisplay"); // 🧑 Player choice display
const computerDisplay = document.getElementById("computerDisplay"); // 🤖 Computer choice display
const resultDisplay = document.getElementById("resultDisplay"); // 🏆 Result display
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); // 🔢 Player score display
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); // 🔢 Computer score display

let playerScore = 0; // 🔢 Initialize player score
let computerScore = 0; // 🔢 Initialize computer score

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // 🤖 Random computer choice
  let result = ""; // 📄 Variable to store the result

  // 🥊 Determine the result of the game
  if (playerChoice === computerChoice) {
    result = "It's a tie!🏆"; // 🏅 Tie scenario
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!🏆" : "You Lose😭"; // 🗿 beats ✂️
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!🏆" : "You Lose😭"; // 📄 beats 🗿
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!🏆" : "You Lose😭"; // ✂️ beats 📄
        break;
    }
  }
  // 📊 Update displays with choices and results
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  // 🎨 Update result display class based on outcome
  resultDisplay.classList.remove("greenText", "redText", "limeText");

  switch (result) {
    case "You Win!🏆":
      resultDisplay.classList.add("greenText"); // 💚 Add class for win
      playerScore++; // ➕ Increment player score
      playerScoreDisplay.textContent = playerScore; // 📈 Update player score display
      break;
    case "You Lose😭":
      resultDisplay.classList.add("redText"); // ❤️ Add class for lose
      computerScore++; // ➕ Increment computer score
      computerScoreDisplay.textContent = computerScore; // 📈 Update computer score display
      break;
    case "It's a tie!🏆":
      resultDisplay.classList.add("limeText"); // 💚 Add class for tie
      break;
  }
}

// 🧠 Simple Analogy 🧠
// 🤔 Think of the Rock-Paper-Scissors game like a friendly duel between two opponents.
// 🗿 The player chooses one weapon (rock, paper, or scissors), and the computer randomly selects its weapon.
// 📜 The outcome is determined by the rules: rock crushes scissors, scissors cut paper, and paper covers rock.
// 🏆 The game updates the scores and displays the results dynamically, like a scoreboard in a sports match.

// 🎯 Possible Use Cases:
// 1️⃣ Learning Tool 📚: Use as an interactive way to teach basic programming concepts and DOM manipulation.
// 2️⃣ Game Development 🎮: Serve as a foundation for more complex games involving user interactions and logic.
// 3️⃣ Random Selection 🔄: Adapt the logic for any situation needing random outcomes or choices, such as a random color picker.
// 4️⃣ User Engagement 🎉: Create engaging web experiences to keep users entertained while improving skills.
// 5️⃣ Scoring System 🏅: Implement scoring for any competitive web application, making it more dynamic and interactive.
// 6️⃣ Testing Logic 🔍: Use as a simple way to test logical conditions in JavaScript.
// 7️⃣ UI Feedback 💬: Demonstrate how to provide visual feedback in a UI based on user actions.
// 8️⃣ Fun Web Apps 💻: Integrate into larger applications for added interactivity and entertainment.
// 9️⃣ Educational Games 🕹️: Develop educational games to make learning fun and interactive for users of all ages.
// 🔟 Customizable Experience 🎨: Modify the game's visuals and logic for various themes or educational purposes.
