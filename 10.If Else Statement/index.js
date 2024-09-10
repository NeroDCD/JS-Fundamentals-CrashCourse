// 10. If statements in JavaScript are easy

// 🧠 IF STATEMENTS = If a condition is true, execute some code; if not, do something else.

// 📝 Example 1:
// let age = 27;
// if (age >= 19) {
//   console.log("You are old enough to suffer");
// } else {
//   console.log("Weak");
// }
// In this example, if `age` is 19 or older, it prints "You are old enough to suffer".
// Otherwise, it prints "Weak".

// 📝 Example 2:
// let time = 7;
// if (time < 12) {
//   console.log("Good Morning!");
// } else {
//   console.log("Good afternoon");
// }
// If `time` is less than 12, it says "Good Morning!", otherwise, "Good afternoon".

// ✅ Using Boolean Example:
// let isAlive = true;
// if (isAlive) {
//   console.log("You are a 🌝");
// } else {
//   console.log("You are 💀👻");
// }
// If `isAlive` is true, it prints "You are a 🌝"; if not, "You are 💀👻".

// 🔀 Using Nested If Example:
// let age = 27;
// let hasLicense = false;
// if (age >= 19) {
//   console.log("You are old enough to drive 😎");
//   if (hasLicense) {
//     console.log("You have your license!");
//   } else {
//     console.log("You do not have your license yet!");
//   }
// } else {
//   console.log("You must be 19+ to have a license 😢");
// }
// Here, if age is 19 or older, it checks whether the person has a license or not.
// It also nests an extra condition inside the first one.

// 🔄 Using Else If Example:
// let age = 0;
// if (age >= 100) {
//   console.log("You ok? 😁");
// } else if (age == 0) {
//   console.log("You can't suffer yet 😪");
// } else if (age >= 19) {
//   console.log("You are old enough to suffer 💀");
// } else if (age < 0) {
//   console.log("Your age can't be below 0 😤");
// } else {
//   console.log("You haven't been tested by life yet. 😊");
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
    resultElement.textContent = "You ok? 😁"; // 🎉 Display the message in resultElement.
  } else if (age == 0) {
    // 👶 If age is exactly 0:
    resultElement.textContent = "You can't suffer yet 😪"; // 👶 Display this message.
  } else if (age >= 19) {
    // 🧑 If age is 19 or more:
    resultElement.textContent = "You are old enough to suffer 💀"; // 💀 Display this message.
  } else if (age < 0) {
    // ❌ If age is less than 0:
    resultElement.textContent = "Your age can't be below 0 😤"; // 🚫 Display this error message.
  } else {
    // 👦 For all other ages (1-18):
    resultElement.textContent = "You haven't been tested by life yet. 😊"; // 😊 Display this message.
  }
};

// 🔑 Explanation:
// 1️⃣ The form takes a number input for age, processes it on button click.
// 2️⃣ Depending on the age entered, the code checks conditions and displays a message.
// 3️⃣ `Number(age)` ensures the input is treated as a number.
// 4️⃣ Multiple conditions handle different scenarios like being old enough to suffer, being too young, or entering invalid numbers.
