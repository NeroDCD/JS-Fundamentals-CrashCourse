// 10. If statements in JavaScript are simple and powerful

// 🧠 IF STATEMENTS = Making decisions based on conditions. For example, "If it's raining, take an umbrella; otherwise, just go without one."
// 🌟 This structure lets your program handle different scenarios and choose actions based on the situation, like deciding what to do when faced with multiple outcomes.

// 📝 Example 1:
// let age = 27;
// if (age >= 19) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are growing up!");
// }
// In this example, if `age` is 19 or older, it prints "You are an adult."
// Otherwise, it prints "You are growing up!"

// 📝 Example 2:
// let time = 7;
// if (time < 12) {
//   console.log("Good Morning!");
// } else {
//   console.log("Good afternoon");
// }
// // If `time` is less than 12, it says "Good Morning!", otherwise, "Good afternoon".

// // ✅ Using Boolean Example:
// let isAlive = true;
// if (isAlive) {
//   console.log("You are alive and well!");
// } else {
//   console.log("No longer active.");
// }
// If `isAlive` is true, it prints "You are alive and well!"; if not, "No longer active."

// 🔀 Using Nested If Example:
// let age = 27;
// let hasLicense = false;
// if (age >= 19) {
//   console.log("You are old enough to drive.");
//   if (hasLicense) {
//     console.log("You have your license!");
//   } else {
//     console.log("You need to get your license.");
//   }
// } else {
//   console.log("You must be at least 19 to drive.");
// }
// Here, if age is 19 or older, it checks whether the person has a license or not.
// A nested condition checks for driving eligibility.

// 🔄 Using Else If Example:
// let age = 0;
// if (age >= 100) {
//   console.log("You have lived a century!");
// } else if (age == 0) {
//   console.log("Just born!");
// } else if (age >= 19) {
//   console.log("You are an adult.");
// } else if (age < 0) {
//   console.log("Age can't be negative.");
// } else {
//   console.log("You are growing up!");
// }
// This code handles multiple conditions with "else if", providing different messages for each case.

// 🛠️ Simple Form Project
const myText = document.getElementById("myText"); // 🔍 Grabs the input field element.
const mySubmit = document.getElementById("mySubmit"); // 🔍 Grabs the submit button element.
const resultElement = document.getElementById("resultElement"); // 🔍 Grabs the result display element.
let age; // 📊 Declare the variable to store the user's age.

mySubmit.onclick = function () {
  // 🖱️ When the submit button is clicked:
  age = myText.value; // 🖊️ Get the value (input) from the text field.
  age = Number(age); // 🔢 Convert the input into a number.

  if (age >= 100) {
    // 🧓 If age is 100 or more:
    resultElement.textContent = "You have lived a century!"; // 🎉 Display the message in resultElement.
  } else if (age == 0) {
    // 👶 If age is exactly 0:
    resultElement.textContent = "Just born!"; // 👶 Display this message.
  } else if (age >= 19) {
    // 🧑 If age is 19 or more:
    resultElement.textContent = "You are an adult."; // 💀 Display this message.
  } else if (age < 0) {
    // ❌ If age is less than 0:
    resultElement.textContent = "Age cannot be negative."; // 🚫 Display this error message.
  } else {
    // 👦 For all other ages (1-18):
    resultElement.textContent = "You are growing up!"; // 😊 Display this message.
  }
};

// 🔑 Explanation:
// 1️⃣ The form takes a number input for age, processes it on button click.
// 2️⃣ Depending on the age entered, the code checks conditions and displays a message.
// 3️⃣ `Number(age)` ensures the input is treated as a number.
// 4️⃣ Multiple conditions handle different scenarios like being an adult, being a child, or entering invalid values.

// 🧠 Simple Analogy 🧠
// 📊 Think of an `if-else` statement in JavaScript like a decision-making flowchart.
// ❓ The `if` part is like asking a question, such as "Is it raining?" ☔
// ✅ If the answer is "yes," the code inside the `if` block runs, like bringing an umbrella. 
// ❌ If the answer is "no," the code inside the `else` block runs, like deciding you don’t need an umbrella. 
// 🎯 The `if-else` statement helps your program choose different actions based on conditions, just like making choices based on what you observe or know.

// 🎯 Possible Use Cases:
// 1️⃣ Form validation 📝: Provide feedback based on user input (e.g., age validation or user profile setup).
// 2️⃣ Dynamic messages 💬: Display content based on user interactions (e.g., greeting messages or eligibility checks).
// 3️⃣ Conditional logic ⚠️: Guide users through different steps or provide warnings in user forms.
// 4️⃣ Customizing UI 🎨: Adjust interface elements or functionality based on user data (e.g., age or status).
// 5️⃣ Interactive applications ⏳: Respond to user inputs and give real-time feedback or status updates.
// 6️⃣ Managing flow 🔄: Execute different code paths (e.g., redirecting users to different pages).
// 7️⃣ Game logic 🎮: Determine outcomes based on user actions or scores (e.g., win/lose scenarios).
// 8️⃣ Handling API responses 📡: Check for success or error conditions and take appropriate actions.
// 9️⃣ Content visibility 🔐: Show or hide features based on user roles or permissions (e.g., admin-only features).
// 🔟 Controlling features ⚙️: Enable/disable functionalities based on user choices or application state.
