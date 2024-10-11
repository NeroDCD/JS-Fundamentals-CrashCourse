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


// 🧠 Simple Analogy 🧠
// Think of user input as a way to get information from someone, like asking for their name:
// 💬 Using `window.prompt` is like having a quick chat where you ask for their name and they tell you right away. It’s straightforward but less interactive.
// 🖥️ Using an HTML textbox is like setting up a form where they can type their name and press a button to submit it. 
// This method is more interactive and user-friendly, allowing for better integration with your web page.
// 🔍 Adding an Enter key press handler is like adding an extra convenience, allowing them to submit their input by just pressing Enter, 
// similar to how they might press "Enter" on a physical form to submit their response.

// 🎯 Possible Use Cases:
// 1️⃣ Simple User Prompts 📝: Use `window.prompt` for quick and easy user input collection, suitable for simple scripts or demos.
// 2️⃣ Interactive Forms 📋: Implement HTML textboxes and buttons for more interactive user input, suitable for web applications requiring user data submission.
// 3️⃣ Dynamic Content Update ✨: Use user input to update the content of web pages in real-time, 
// such as personalizing greetings or modifying page elements based on user input.
// 4️⃣ Handling Enter Key Input ⌨️: Enhance user experience by allowing users to submit data with the Enter key, improving accessibility 
// and ease of use in forms or interactive elements.
// 5️⃣ Validation and Error Handling 🚫: Use user input to validate data and display error messages when inputs do not meet certain criteria.
// 6️⃣ User Preferences ⚙️: Allow users to set and save preferences or settings through input fields (e.g., theme choices, notification settings).
// 7️⃣ Search Functionality 🔍: Implement search features where users input queries to filter or find information within an application or website.
// 8️⃣ Form Autocompletion 🖊️: Enhance forms with autocompletion features based on user input, improving efficiency and user experience.
// 9️⃣ User Authentication 🔐: Collect and validate login credentials or other security-related input for authentication purposes.
// 🔟 Interactive Surveys 📊: Gather responses from users through input forms for surveys or feedback collection.
