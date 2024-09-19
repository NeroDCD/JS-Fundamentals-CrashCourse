// 31. Learn JavaScript CALLBACKS

// 🔄 CALLBACK FUNCTION 🔄

// A callback function is a function passed as an argument to another function.
// This allows the receiving function to execute the callback once an operation is complete or when certain conditions are met.

// Often used for asynchronous tasks like:
// 1️⃣ Reading files 📂
// 2️⃣ Making network requests 🌐
// 3️⃣ Interacting with databases 🛢️

// Think of it like: "When you're done, call this function next." 🤖

// Example 1

// function hello(Callback) {
//     console.log("Hello");    // 👋 Logs "Hello" to the console
//     Callback();              // ⏩ Executes the callback function passed as an argument
//   }

//   function wait() {
//     console.log("Wait!");    // ⏸️ Logs "Wait!" to the console
//   }

//   hello(wait);               // 🔄 "wait" is passed as the callback, so "Wait!" is logged after "Hello"

// Example 2

function sum(Callback, x, y) {
  let result = x + y; // ➕ Adds x and y
  Callback(result); // ⏩ Executes the callback with the result as an argument
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result; // 🖥️ Displays the result on the webpage by updating an element
}

sum(displayPage, 1, 2); // 🔄 Passes "displayPage" as the callback and sums 1 + 2, displaying the result on the page

// 🧠 Simple Analogy 🧠
// 🧩 Imagine you're baking a cake (function). While waiting for the cake to bake, you set a timer (callback).
// When the timer goes off, the oven (callback) reminds you that the cake is done (next function),
// so you can move on to decorating. The timer helps manage tasks asynchronously,
// just like a callback function helps manage different steps in a code sequence.

// 🎯 Possible Use Cases:
// 1️⃣ File Reading 📂: Execute a callback after reading a file.
// 2️⃣ API Requests 🌐: Call a function after receiving data from an API.
// 3️⃣ UI Updates 🎨: Update parts of a webpage after an event, like form submissions.
// 4️⃣ Database Queries 🛢️: Fetch and display results after querying a database.
// 5️⃣ Animations 🎥: Execute a callback when an animation completes.
// 6️⃣ Event Handling 🎯: Trigger actions when events like clicks or keypresses occur.
// 7️⃣ Timers ⏲️: Execute code after a set delay using setTimeout.
// 8️⃣ Error Handling ⚠️: Handle errors asynchronously in data processing or network requests.
// 9️⃣ Chained Operations 🔗: Run a sequence of functions where each waits for the previous to finish.
// 🔟 User Authentication 🔐: Execute further steps once user login is validated.
