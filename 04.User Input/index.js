// 04. How to accept JavaScript USER INPUT

// 1. EASY WAY = Using window.prompt
// 💬 This method creates a popup for the user to enter their input.
//let username = window.prompt("What's your Username?");
//console.log(username);  // 📜 Logs the entered username to the console

// 2. PROFESSIONAL WAY = Using an HTML textbox
// 🖥️ This method uses HTML elements and JavaScript for a more interactive approach.

// HTML structure:
// <input type="text" id="myText" placeholder="Enter your username">
// <button id="mySubmit">Submit</button>
// <h1 id="myHeading"></h1>

// JavaScript for handling input:
let username;
document.getElementById("mySubmit").onclick = function () {
  // 🖱️ When the button is clicked, get the value from the textbox
  username = document.getElementById("myText").value;
  // ✨ Update the heading with a greeting message
  document.getElementById("myHeading").textContent = `Hello ${username}`;
};

// 🔍 Exploring: Handling Enter key press to submit input
// Uncomment the following code to allow submitting the username by pressing Enter

// let username;
// document.getElementById("myText").addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     // 🚪 If Enter is pressed, get the value from the textbox
//     username = document.getElementById("myText").value;
//     // ✨ Update the heading with a greeting message
//     document.getElementById("myHeading").textContent = `Hello ${username}`;
//   }
// });

// 🎯 Possible Use Cases:
// 1️⃣ Simple User Prompts: Use `window.prompt` for quick and easy user input collection, suitable for simple scripts or demos.
// 2️⃣ Interactive Forms: Implement HTML textboxes and buttons for more interactive user input, suitable for web applications requiring user data submission.
// 3️⃣ Dynamic Content Update: Use user input to update the content of web pages in real-time, such as personalizing greetings or modifying page elements based on user input.
// 4️⃣ Handling Enter Key Input: Enhance user experience by allowing users to submit data with the Enter key, improving accessibility and ease of use in forms or interactive elements.
