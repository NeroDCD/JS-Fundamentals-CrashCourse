// 21. JavaScript NUMBER GUESSING GAME

// 🎲 NUMBER GUESSING GAME

// STEP 1: Initialize the game range and the answer
const MIN_NUM = 1;
const MAX_NUM = 10;
const ANSWER = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM; // 🎲 Generates a random number between 1 and 10

// STEP 2: Initialize attempts and running state
let attempts = 0; // 🔢 Keeps track of the number of attempts
let guess; // ❓ Stores the player's guess
let running = true; // 🏃‍♂️ Controls the game loop

// 🎮 Game loop runs while the player hasn't guessed correctly
while (running) {
  guess = window.prompt(`Guess a number Between ${MIN_NUM} - ${MAX_NUM} 👈`); // 💬 Prompt the player for their guess
  guess = Number(guess); // 🔄 Convert input to a number

  // 🚫 Check for invalid input
  if (isNaN(guess)) {
    window.alert("Please enter a valid number 🚫"); // ❗ Alert the player if input is not a number
  } else if (guess < MIN_NUM || guess > MAX_NUM) {
    window.alert("Please enter a valid number within the range 🚫"); // ❗ Alert if the guess is out of range
  } else {
    attempts++; // ➕ Increment the attempt count

    // 🟢 Check if the guess is too low, too high, or correct
    if (guess < ANSWER) {
      window.alert("TOO LOW! TRY AGAIN! 😪"); // 👇 Alert for a low guess
    } else if (guess > ANSWER) {
      window.alert("TOO HIGH! TRY AGAIN! 😵"); // 👆 Alert for a high guess
    } else {
      window.alert(
        `CORRECT! The answer was ${ANSWER} 😎, It took you ${attempts} attempts 😐` // 🎉 Correct guess message with attempts count
      );
      running = false; // 🏁 End the game loop
    }
  }
}

// 🎯 Possible Use Cases:
// 1️⃣ Creating simple number guessing games for fun or educational purposes. 🎮
// 2️⃣ Teaching basic JavaScript concepts like loops, conditionals, and user input. 🧑‍🏫
// 3️⃣ Implementing game logic that compares user input to a dynamic value. 🔄
// 4️⃣ Using random numbers in simulations, tests, or probability-based activities. 🎲
// 5️⃣ Collecting user input to validate or test logical outcomes in games or apps. 🧩
// 6️⃣ Developing interactive tutorials or quizzes to engage users. 📚
// 7️⃣ Building simple apps for practicing JavaScript or coding skills. 💻
// 8️⃣ Incorporating guessing games into larger projects for entertainment or gamification. 🎯
// 9️⃣ Testing error handling and input validation in a controlled scenario. ⚙️
// 🔟 Creating random challenges or exercises for coding bootcamps or classrooms. 🏫
