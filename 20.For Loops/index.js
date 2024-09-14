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

// 🎯 Possible Use Cases for FOR LOOPS:
// 1️⃣ Iterating over arrays or lists to perform actions on each item (e.g., processing user data or displaying products). 🔄
// 2️⃣ Counting up or down with defined increments or decrements (e.g., creating countdowns or looping through calendar days). ⏳
// 3️⃣ Repeating a set of actions a fixed number of times (e.g., generating a series of elements or creating pagination). 🔢
// 4️⃣ Skipping certain iterations with `continue` when specific conditions are met (e.g., skipping invalid entries). 🚫
// 5️⃣ Exiting the loop early with `break` when a condition is satisfied (e.g., stopping a search when a match is found). 🛑
// 6️⃣ Traversing and modifying elements of multidimensional arrays or nested data structures. 📊
// 7️⃣ Automating repetitive tasks such as rendering UI components, processing datasets, or generating reports. ⚙️
// 8️⃣ Using loops to simulate processes (e.g., physics simulations, financial models, or game logic). 🎮🔬
// 9️⃣ Implementing animations or loading sequences by running a loop a specific number of times. 🎬💻
// 🔟 Benchmarking or running stress tests by executing a loop with a large number of iterations. 🚀
