// 20. Learn JavaScript FOR LOOPS

// for loop = repeat some code a LIMITED amount of times 🔄⏲️

// Example (Increment)
// ⬆️ This loop counts from 1 to 10, increasing the value of `i` by 1 each time.
// for (let i = 1; i <= 10; i++) { // Starts at 1, ends at 10, increments by 1
//   console.log(i); // Logs the current value of i 📜
// }

// Example (Decrement)
// ⬇️ This loop counts down from 10 to 1, decreasing the value of `i` by 1 each time.
// for (let i = 10; i > 0; i--) { // Starts at 10, ends at 1, decrements by 1
//   console.log(i); // Logs the current value of i 📜
// }
// console.log(`Happy New Year 💀`); // Prints a message after finishing the countdown 🎉

// Example (Continue)
// 🚫 This loop skips the number 13 and continues logging other numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) { // Starts at 1, ends at 20
//   if (i === 13) { // If the number is 13...
//     continue; // ...skip this iteration (don't log 13) 🚫
//   }
//   console.log(i); // Log all other numbers 📜
// }

// Example (Break)
// 🛑 This loop stops completely when it reaches the number 13.
for (let i = 1; i <= 20; i++) { // Starts at 1, ends at 20
  if (i === 13) { // If the number is 13...
    break; // ...exit the loop 🔚
  }
  console.log(i); // Log all numbers before 13 📜
}

// 🧠 Simple Analogy 🧠
// 📜 Think of a `for` loop like a repetitive task with a set number of steps:
// 📚 Imagine you’re sorting a stack of 10 cards. You start with the first card and move to the next until all 10 cards are sorted.
// 📊 Each card is checked in order, and the task is repeated exactly 10 times, just like the `for` loop repeats a block of code a specific number of times.

// 🎯 Possible Use Cases:
// 1️⃣ Iterating over arrays or lists 🔄: Perform actions on each item, like processing user data or displaying products.
// 2️⃣ Counting up or down ⏳: Loop through calendar days or create countdowns with defined increments or decrements.
// 3️⃣ Repeating actions 🔢: Execute a set of actions a fixed number of times, such as generating elements or pagination.
// 4️⃣ Skipping iterations 🚫: Use `continue` to skip certain iterations when specific conditions are met (e.g., invalid entries).
// 5️⃣ Exiting early 🛑: Break out of the loop with `break` when a condition is satisfied (e.g., finding a search match).
// 6️⃣ Traversing nested structures 📊: Modify or access elements of multidimensional arrays or nested data.
// 7️⃣ Automating tasks ⚙️: Use loops to render UI components, process datasets, or generate reports.
// 8️⃣ Simulating processes 🎮🔬: Run simulations in fields like physics, financial models, or game logic.
// 9️⃣ Implementing animations 🎬💻: Use loops to control the number of times animations or loading sequences run.
// 🔟 Running benchmarks 🚀: Execute a loop with a large number of iterations for stress testing or performance analysis.
