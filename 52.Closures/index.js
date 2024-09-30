// 52. Learn JavaScript CLOSURES

// 🔒 Closure = A function defined inside of another function.
// The inner function has access to the variables and scope of the outer function.
// 🔐 Closures allow for private variables and state maintenance, which can only be accessed through the inner functions.
// 📦 Used frequently in JS frameworks like React, Vue, Angular for state management and encapsulation.

// 1️⃣ Example 1 (Inner and Outer)
// 🛠️ The outer function creates a variable `message`, and the inner function has access to it.
// Even though `message` is declared in the outer function, the inner function can use it due to closure.
// When `outer()` is called, it runs `inner()` which logs the `message` to the console.

// function outer() {
//   let message = "Hello";
//   function inner() {
//     console.log(message);  // Accesses `message` from the outer scope
//   }
//   inner();  // Calls the inner function
// }

// outer();
// 🖨️ Logs: "Hello"

// 2️⃣ Example 2 (State Maintenance)
// 🏗️ Here, `createCounter()` is a closure that maintains a `count` variable.
// The `increment()` function increases the count and logs it. The `getCount()` function returns the current count.
// Both functions have access to the `count` variable even after `createCounter()` finishes executing.

// function createCounter() {
//   let count = 0;  // Private variable maintained within the closure

//   function increment() {
//     count++;  // Increments the `count` by 1
//     console.log(`Count Increased to ${count}`);
//   }

//   function getCount() {
//     return count;  // Returns the current value of `count`
//   }

//   return { increment, getCount };  // Exposes the two inner functions
// }

// const counter = createCounter();  // Creates a new counter with its own `count` variable

// counter.increment();  // 🖨️ Logs: Count Increased to 1
// counter.increment();  // 🖨️ Logs: Count Increased to 2
// counter.increment();  // 🖨️ Logs: Count Increased to 3
// counter.increment();  // 🖨️ Logs: Count Increased to 4

// console.log(`The current count is ${counter.getCount()}`);
// 🖨️ Logs: "The current count is 4"

// 3️⃣ Example 3 (Game Score System)
// 🎮 In this example, `createGame()` creates a game score system using closures.
// The `score` is encapsulated within the closure and can only be accessed through the `increaseScore()`, `decreaseScore()`, and `getScore()` functions.
// This allows for private score management, where outside code can't directly modify `score`.

function createGame() {
  let score = 0; // Private variable for tracking the game score

  function increaseScore(points) {
    score += points; // Adds points to the score
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points; // Deducts points from the score
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score; // Returns the current score
  }

  return { increaseScore, decreaseScore, getScore }; // Exposes the three inner functions
}

const game = createGame(); // Creates a new game with its own `score`

game.increaseScore(1); // 🖨️ Logs: +1pts
game.increaseScore(4); // 🖨️ Logs: +4pts
game.increaseScore(5); // 🖨️ Logs: +5pts
game.decreaseScore(9); // 🖨️ Logs: -9pts

console.log(`The final score is ${game.getScore()}pts`);
// 🖨️ Logs: "The final score is 1pts"

// 🧠 Simple Analogy 🧠
// Think of a closure like a backpack.
// The outer function stores items (variables) in the backpack, and the inner function
// can take out those items whenever it needs them, even after the outer function has finished running.
// Only the inner functions know what's inside the backpack, keeping the variables private and secure.

// 🎯 Possible Use Cases:
// 1️⃣ Game Development 🎮: Track and update scores or levels while keeping sensitive game logic private.
// 2️⃣ Counter Apps 🧮: Create counters that maintain a private count and allow incrementing/decrementing.
// 3️⃣ Timer Functions ⏲️: Track elapsed time and update it through functions, without exposing the internal time variable.
// 4️⃣ Private Variables 🛡️: Protect variables from being changed or accessed directly by external code.
// 5️⃣ DOM Event Handlers 🖱️: Attach event handlers that can access outer scope variables, such as for button clicks.
// 6️⃣ Form Validation 📋: Maintain validation state and functions privately, ensuring only the form logic modifies it.
// 7️⃣ Encapsulation in OOP 💼: Use closures to encapsulate data and functions, mimicking private class members.
// 8️⃣ State Management in React ⚛️: Manage and update component state privately through hooks like `useState`.
// 9️⃣ Memoization ⚡: Create functions that cache results of expensive operations for faster subsequent calls.
// 🔟 Security Features 🔑: Implement features where only certain functions can modify or access sensitive data.
