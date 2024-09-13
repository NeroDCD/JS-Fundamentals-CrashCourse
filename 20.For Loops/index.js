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

// 🎯 Possible Use Cases:
// 1️⃣ Iterating over arrays or lists to perform actions on each item (e.g., displaying items). 📜
// 2️⃣ Counting up or down, like creating a countdown timer or looping through days. ⏳
// 3️⃣ Skipping certain values using `continue` (e.g., skipping invalid entries). ⛔️
// 4️⃣ Exiting a loop early based on a condition using `break` (e.g., stopping a search when found). 🛑🔍
// 5️⃣ Running a loop with a fixed number of repetitions for animations or loading sequences. 🎬💻
