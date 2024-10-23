// 19. Learn JavaScript WHILE LOOPS

// 🔄 while loop = repeat some code WHILE some condition is true 
// 🧠 Syntax: `while (condition) { // code block to be executed }`.

// Example 1 (While Loop)
// This loop continues to ask for the user's name until a valid input is provided (non-empty and non-null).
// let username = "";
// while (username === "" || username === null) { // Loop continues while username is empty or null
//   username = window.prompt(`Enter your name`); // Prompt for username
// }
// console.log(`Hello ${username}`); // Greet the user once valid input is given

// Example 2 (Do While Loop)
// This loop prompts the user for their name at least once, and will repeat if the input is invalid.
// let username;

// do {
//   username = window.prompt(`Enter your name`); // Prompt for username
// } while (username === "" || username === null); // Continue asking until a valid name is entered
// console.log(`Hello ${username}`); // Greet the user once valid input is given

// Example 3 (While Loop)
// This loop repeatedly asks the user for their username and password until correct credentials are entered.
let loggedIn = false; // Initial login status is set to false ❌
let username;
let password;

// while (!loggedIn) { // Loop continues while the user is not logged in
//   username = window.prompt(`Enter your username`); // Prompt for username
//   password = window.prompt(`Enter your password`); // Prompt for password

//   if (username === "nero" && password === "dcd") { // Check if credentials are correct
//     loggedIn = true; // Set login status to true
//     console.log("You are logged in! ✔️"); // Log success message
//   } else {
//     console.log("Invalid Credentials! Please try again ❌"); // Log error message for wrong credentials
//   }
// }

// Example 4 (Do While Loop)
// This example works similarly to the above, but guarantees that the user is prompted at least once.
do {
  username = window.prompt(`Enter your username`); // Prompt for username
  password = window.prompt(`Enter your password`); // Prompt for password

  if (username === "nero" && password === "dcd") {
    // Check if credentials are correct
    loggedIn = true; // Set login status to true ✔️
    console.log("You are logged in! ✔️"); // Log success message
  } else {
    console.log("Invalid Credentials! Please try again ❌"); // Log error message for wrong credentials
  }
} while (!loggedIn); // Repeat the loop until the user is logged in

// 🧠 Simple Analogy 🧠
// ⚙️ Think of `while` and `do while` loops like playing a game with different rules:
// 🎮 `while` loop: Imagine you’re collecting coins until you have 10. You check your coin count before each round to decide if you should keep playing. 
// ⏲️ If you have fewer than 10 coins, you continue. If not, you stop.
// 🎲 `do while` loop: Now, you’re in a game where you must play at least once. After each round, you check if you have fewer than 10 coins to decide
// 🔄 if you should play again. Even if you start with 10 or more coins, you’ll play at least once.

// 🎯 Possible Use Cases:
// 1️⃣ Continuous input validation ✍️: Repeatedly prompt for user input until valid information is provided (e.g., name or email).
// 2️⃣ Login systems 🔐: Allow users multiple attempts to input correct credentials (e.g., username/password validation).
// 3️⃣ Monitoring conditions ⏳: Continuously monitor a changing condition during the runtime of a program (e.g., waiting for a flag).
// 4️⃣ Game level loading 🎮🔄: Repeat a process like loading levels or refreshing API data while a condition holds true.
// 5️⃣ Automated testing ⚙️🔍: Re-run tests in a loop until certain conditions are met for testing or simulations.
// 6️⃣ Real-time condition monitoring 📡: Check sensor data or wait for user actions in real-time systems (e.g., button clicks).
// 7️⃣ Long-running services 🔌: Build systems that depend on continuous loops, like polling for updates or managing services.
// 8️⃣ Asynchronous operations ⌛: Handle async tasks by waiting in loops for conditions to be fulfilled (e.g., waiting for data).
// 9️⃣ Retry mechanisms 🔁: Implement retries on failure, like reattempting API calls or reconnecting to servers.
// 🔟 Game loops 🎮: Create loops that continuously check for player input or game state changes in real-time gaming environments.
