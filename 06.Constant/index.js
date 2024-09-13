// 06. JavaScript CONSTANTS

// 🔒 Constants are variables that cannot be changed once assigned.

// ❓ Why use constants?
// Constants help prevent accidental modification of values that should remain unchanged,
// such as mathematical constants or configuration settings.

// 🛑 Example: Attempting to change the value of a constant will result in an error.
// const PI = 3.14159;
// PI = 420.69; // 🚨 This will cause an error: "Uncaught TypeError: Assignment to constant variable."

// 🔢 To calculate the circumference of a circle using a constant PI:

// 📝 Example with user input via prompt

// let radius;
// let circumference;

// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius); // 🔢 Convert the input to a number

// circumference = 2 * PI * radius; // 🔍 Calculate the circumference

// console.log(circumference); // 📈 Display the result

//--------------------------------------------------------

// 🖥️ Example with user input via HTML textbox

const PI = 3.14159; // 🧮 Using a constant for PI (Constants are usually named using uppercase letters)
let radius;
let circumference;

// 🔄 Update the circumference calculation based on user input from the HTML form
document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value; // 🖋️ Get the value from the textbox
  radius = Number(radius); // 🔢 Convert the input to a number
  circumference = 2 * PI * radius; // 🔍 Calculate the circumference
  document.getElementById("myH3").textContent = circumference + " cm"; // 📈 Display the result
};

// 🏷️ Clarification on Naming Conventions:
// In JavaScript, constants are typically named using uppercase letters with underscores separating words.
// This convention helps distinguish constants from regular variables.

// 📜 Example:
// const PI = 3.14159;  // 🧮 Using uppercase letters for the constant

// 🖊️ For variables, camelCase is commonly used, where the first word is lowercase and subsequent words are capitalized.
// 📜 Example:
// let radius = 5;      // 🧮 Variable using camelCase

// 🧑‍💻 For data types:
// - Capitalizing data types like `Number`, `Boolean`, `String`, etc., is usually done in documentation and type annotations.
// - However, in actual code, we use their primitive names: `number`, `boolean`, `string`.

// 📜 Example:
// let age: number;     // 🔠 Type annotation in TypeScript or similar languages
// let isStudent: boolean; // 🔠 Type annotation

// 🎯 Possible Use Cases:
// 1️⃣ Configuration Settings: Set unchanging values like API URLs or default user roles.
// 2️⃣ Mathematical Values: Use fixed values like PI for math calculations.
// 3️⃣ Limits and Thresholds: Define limits such as the maximum file size or minimum password length.
// 4️⃣ Application Defaults: Set default values for things like timeout durations or currency conversion rates.
// 5️⃣ Feature Toggles: Enable or disable features based on constant settings.
// 6️⃣ Error Codes: Use constants for common error codes or messages.
// 7️⃣ CSS Class Names: Standardize class names for consistent styling across your app.
// 8️⃣ Environment Settings: Manage values that change based on whether you’re in development, staging, or production.
