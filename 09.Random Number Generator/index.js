// 09. Random number generator in JavaScript

// 🎲 RANDOM NUMBER GENERATOR 🎲

// Example:
// let randomNum = Math.random() * 5;
// This generates a random decimal number between 0 and 5.

// 📝 Whole Number Example:
// To get a whole number between 1 and 100:
// let randomNum = Math.floor(Math.random() * 100) + 1;
// `Math.floor()` rounds the number down to the nearest whole number,
// and `+1` ensures the minimum value starts from 1.

// 🧮 Random Number between a Certain Range:
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// This generates a random whole number between 50 and 100.

// 💻 Actual Random Number Generator:
const myButton = document.getElementById("myButton"); // ⏺️ Get the button element.
const Label1 = document.getElementById("Label1"); // 🏷️ Get the first label to display a number.
const Label2 = document.getElementById("Label2"); // 🏷️ Get the second label to display a number.
const Label3 = document.getElementById("Label3"); // 🏷️ Get the third label to display a number.

const min = 1; // 🚪 Set the minimum value to 1.
const max = 10; // 🚪 Set the maximum value to 10.
let randomNum1; // 🟢 Declare variable to store first random number.
let randomNum2; // 🟢 Declare variable to store second random number.
let randomNum3; // 🟢 Declare variable to store third random number.

myButton.onclick = function () {
  // 🎯 When the button is clicked:
  randomNum1 = Math.floor(Math.random() * max) + min; // 🎲 Generate random number 1.
  randomNum2 = Math.floor(Math.random() * max) + min; // 🎲 Generate random number 2.
  randomNum3 = Math.floor(Math.random() * max) + min; // 🎲 Generate random number 3.

  Label1.textContent = randomNum1; // 🏷️ Display random number 1 in Label1.
  Label2.textContent = randomNum2; // 🏷️ Display random number 2 in Label2.
  Label3.textContent = randomNum3; // 🏷️ Display random number 3 in Label3.
};

// 🔑 Explanation:
// 1️⃣ `Math.random()` generates a decimal between 0 and 1.
// 2️⃣ `Math.random() * max` scales this to a range between 0 and `max`.
// 3️⃣ `Math.floor()` rounds it down to the nearest whole number.
// 4️⃣ Adding `min` ensures the range starts at the specified minimum value.
// 5️⃣ The click event triggers random number generation and updates the text in the labels.

// 🎯 Possible Use Cases:
// 1️⃣ Game development: Generating random values for dice rolls, card shuffling, or random events. 🎲
// 2️⃣ User interfaces: Creating dynamic elements, such as randomized color themes or layout adjustments. 🎨
// 3️⃣ Data sampling: Selecting random samples from a dataset for testing or analysis. 📊
// 4️⃣ Lottery systems: Picking random winners or entries in a raffle or contest. 🎟️
// 5️⃣ Testing and simulations: Generating random data for testing algorithms or simulating various scenarios. 🔍
// 6️⃣ Random password generation: Creating secure, random passwords for user accounts. 🔐
// 7️⃣ Generating random user IDs or tokens in applications for unique identification. 🆔
// 8️⃣ Creating random story elements or characters in creative writing or interactive fiction. 📚
// 9️⃣ Simulating random events or behaviors in virtual environments or simulations. 🌐
// 🔟 Designing randomized quizzes or games where questions or challenges vary each time. 🎮