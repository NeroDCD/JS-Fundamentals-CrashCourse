// 22. JavaScript FUNCTIONS are easy! 🎯

// 🔄 Function = A section of reusable code.
// ✍️ It allows you to declare the code once and use it whenever needed.
// 📞 Call the function to execute the code and perform specific tasks.

// Example 1: Simple Function
// 🎂 This function prints a "Happy Birthday" message.
// function happyBirthday() {
//   console.log("Happy Birthday to you! 🎉");
//   console.log("Happy Birthday to you! 🎈");
//   console.log("Happy Birthday dear you! 💀");
//   console.log("Happy Birthday to you! 😅");
// }

// happyBirthday(); // 🟢 Call the function to execute it

// Example 2: Function with Parameters and Arguments
// 🎂 This function accepts a name and age and prints a personalized message.
// function happyBirthday(username, age) {
//   console.log("Happy Birthday to you! 🎉");
//   console.log("Happy Birthday to you! 🎈");
//   console.log(`Happy Birthday dear ${username}! 💀`); // ⬇️ Inserts the username
//   console.log(`You are ${age} years old 😅`); // 🔢 Displays the age
// }

// Arguments
// happyBirthday("Nero", 25); // 🟢 Call the function with arguments

// Example 3: Functions with the return keyword
// 🔄 These functions perform arithmetic operations and return the result.
// function add(x, y) {
//   // let result = x + y;
//   // return result;

// Shortcut 🟢
//   return x + y; // ➕ Adds two numbers
// }

// function subtract(x, y) {
//   return x - y; // ➖ Subtracts y from x
// }

// function multiply(x, y) {
//   return x * y; // ✖️ Multiplies two numbers
// }

// function divide(x, y) {
//   return x / y; // ➗ Divides x by y
// }

// let answer = multiply(5, 5); // 🟢 Calls multiply function with 5 and 5
// console.log(answer); // 📜 Logs the result

// Example 4: Function with Ternary Operator
// 🔄 This function checks if a number is even using a ternary operator.
// function isEven(number) {
//   // if (number % 2 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }

// Shortcut Ternary 🟢
//   return number % 2 === 0 ? true : false; // ⬆️ Returns true if even, false if odd
// }
// console.log(isEven(10)); // 📜 Logs true (even number)

// Example 5: Email Validation Function
// 🔄 This function checks if an email address is valid (contains "@").
function isValidEmail(email) {
  // if (email.includes("@")) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Shortcut Ternary 🟢
  return email.includes("@") ? true : false; // ✅ Returns true if email contains "@"
}
console.log(isValidEmail("github@gmail.com")); // 📜 Logs true
console.log(isValidEmail("meta.com")); // 📜 Logs false
console.log(isValidEmail("zuckerbot@gmail.com")); // 📜 Logs true
console.log(isValidEmail("temporal-fuel.com")); // 📜 Logs false

// 🧠 Simple Analogy 🧠
// 🍳 Think of a JavaScript function like a kitchen recipe. 
// 🥕 A function is a recipe that takes ingredients (parameters), 
// 📜 follows instructions (the function's code), and produces a dish (the return value). 
// 🍽️ When you follow the recipe (call the function), you use the ingredients (input values) to get a dish (output value). 
// 🔁 Just like a recipe can be used multiple times with different ingredients, a function can be called multiple times with different parameters.

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
