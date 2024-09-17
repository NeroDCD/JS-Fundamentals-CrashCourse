// 22. JavaScript FUNCTIONS are easy! 🎯

// 🔄 function = A section of reusable code.
//               Declare the code once, use it whenever you want.
//               Call the function to execute that code.

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
// Think of a JavaScript function like a kitchen recipe 🍳:
// A function is a recipe that takes ingredients (parameters) 🥕, follows instructions (the function's code) 📜, and produces a dish (the return value) 🍽️.
// When you follow the recipe (call the function) 🍽️, you use the ingredients (input values) to get a dish (output value) 🍲.
// Just like a recipe can be used multiple times with different ingredients, a function can be called multiple times with different parameters 🔁.


// 🎯 Possible Use Cases:
// 1️⃣ Defining reusable blocks of code that can be called multiple times, reducing code duplication. 🔄
// 2️⃣ Accepting inputs (parameters) to perform operations or calculations with dynamic data (e.g., mathematical operations). ➕
// 3️⃣ Returning results (using the `return` keyword) that can be used elsewhere in the program (e.g., getting values after processing). 🔙
// 4️⃣ Encapsulating logic for cleaner, more modular code (e.g., separating concerns in large applications). 🧩
// 5️⃣ Improving code readability and maintainability by breaking tasks into smaller, understandable pieces. 📜
// 6️⃣ Validating data or performing checks before taking actions (e.g., checking user input validity). ✅
// 7️⃣ Creating utilities (helper functions) that simplify repetitive or complex tasks (e.g., sorting, formatting, calculations). 🛠️
// 8️⃣ Handling asynchronous operations or executing code based on events (e.g., callback functions, event listeners). 🕑
// 9️⃣ Passing functions as arguments to other functions (higher-order functions), enabling more flexible operations (e.g., map, filter). 🔗
// 🔟 Organizing and structuring the flow of a program, making the logic more modular and easy to follow. 🧱
