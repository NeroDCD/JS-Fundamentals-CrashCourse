// 23. Learn JavaScript VARIABLE SCOPE

// Variable Scope = where a variable is recognized / accessible (local vs global)
// There are two main types of scope in JavaScript:

// 🔐 Local Scope (inside functions)
// 🌍 Global Scope (available everywhere)

// 🌟 Local Scope 🌟
// A local variable is one that is defined inside a function and is only accessible within that function.
// Think of it like a secret that's only known inside the room (the function) it's in!
//
// Example: Local Variables
// function function1() {
//     let x = 1; // 🔐 'x' is defined inside function1 (local scope)
//     console.log(x); // 🖨️ Outputs: 1
//   }

//   function function2() {
//     let x = 2; // 🔐 'x' is defined inside function2 (local scope)
//     console.log(x); // 🖨️ Outputs: 2
//   }

//   function1(); // Calls function1, prints 1
//   function2(); // Calls function2, prints 2

// 🌍 Global Scope 🌍
// A global variable is one that is defined outside of any function, making it available in every function.
// Imagine a giant billboard in the city that everyone can see from anywhere!
//
// Example: Global Variables
let x = 3; // 🌍 'x' is defined globally, so it's available everywhere.

function function1() {
  // no new 'x' inside this function, so it uses the global 'x' 👀
  console.log(x); // 🖨️ Outputs: 3 (from the global 'x')
}

function function2() {
  // no new 'x' inside this function either, so it also uses the global 'x' 👀
  console.log(x); // 🖨️ Outputs: 3 (from the global 'x')
}

function1(); // Calls function1, prints 3 (global 'x')
function2(); // Calls function2, prints 3 (global 'x')


// 🧠 Simple Analogy 🧠

// 🏡 Local Scope is like having a conversation in your own home (function).
// You can talk about things (variables) inside the house,
// but once you step outside (outside the function), no one knows what you talked about! 🏠💬

// 🌍 Global Scope is like having a public announcement on a big billboard.
// Anyone can see and use the information on the billboard no matter where they are! 📢🌎


// 🎯 Possible Use Cases:
// 1️⃣ Local variables to store temporary data in functions 🧮 (e.g., counters, sums).
// 2️⃣ Global settings for an app 🌟, accessible from any function (e.g., theme, user preferences).
// 3️⃣ Local variables to track states within individual components in a web app 🔄 (e.g., React components).
// 4️⃣ Global constants like API URLs or database connection strings 🌐 used across multiple functions.
// 5️⃣ Keeping sensitive data 🔒 (like user input) inside a function to avoid global access.
// 6️⃣ Using global variables to create a shared state for a multiplayer game 🎮 (e.g., game level, score).
// 7️⃣ Local variables to process and format text ✍️ in a function before showing it on a webpage.
// 8️⃣ Global counters 📈 to track the number of users visiting a website.
// 9️⃣ Creating local variables inside loops 🔁 to handle iteration-specific calculations.
// 🔟 Sharing global variables between different event handlers 🎛️ (like button clicks, form submissions).
