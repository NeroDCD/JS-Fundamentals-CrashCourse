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

// 🧠 Simple Analogy 🧠
// 🎯 Think of this number guessing game as a treasure hunt. 
// 🏆 The random number is the hidden treasure, and the player is trying to find it by guessing the location.
// 👇 Each time the player guesses, they get a clue—"too low" means they’re below the treasure.
// 👆 If the guess is "too high," it means they’re above the treasure.
// 🎉 The game continues until the player lands exactly on the treasure, ending the hunt with a celebration.

// 🎯 Possible Use Cases:
// 1️⃣ Creating simple number guessing games 🎮: Build fun or educational games that challenge users to guess random numbers.
// 2️⃣ Teaching basic JavaScript concepts 🧑‍🏫: Use guessing games to explain loops, conditionals, and user input handling.
// 3️⃣ Implementing game logic 🔄: Develop games where user input is compared to dynamic values like random numbers.
// 4️⃣ Using random numbers 🎲: Apply random number generation in simulations, probability experiments, or tests.
// 5️⃣ Collecting user input 🧩: Validate or test outcomes based on user guesses in games or applications.
// 6️⃣ Developing interactive tutorials 📚: Create quizzes or tutorials that engage users through interactivity.
// 7️⃣ Building simple apps 💻: Practice JavaScript skills by developing small interactive games or applications.
// 8️⃣ Adding gamification 🎯: Enhance larger projects by incorporating guessing games for entertainment or rewards.
// 9️⃣ Testing error handling ⚙️: Validate input and handle errors in a controlled, predictable game environment.
// 🔟 Generating random challenges 🏫: Create coding challenges or exercises for bootcamps, classrooms, or self-study.
