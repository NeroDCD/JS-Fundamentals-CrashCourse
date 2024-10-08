// 61. JavaScript Error Handling

// ⚠️ Error = An object created to represent a problem that occurs.
// 🛑 Errors often happen due to user input, incorrect syntax, or issues like network connections.
// ✅ JavaScript provides mechanisms like `try...catch` to handle errors gracefully, preventing the app from crashing.

// // 1️⃣ Example 1: ReferenceError
// // 🔍 This example shows an error when accessing an undefined variable.

// console.log(x); // ❌ ReferenceError: x is not defined
// console.log("You have reached the end!");

// // 🧠 Explanation:
// // In this case, `x` hasn't been declared, causing a `ReferenceError`. When an error like this occurs,
// // the execution stops, and the rest of the code will not run unless the error is handled.

// // 2️⃣ Example 2: Handling Errors with try...catch
// // 🔍 This example demonstrates how to use `try...catch` to handle errors.

// try {
//   console.log("Hello"); // ✅ No Error
//   console.log(x); // ❌ ReferenceError
// } catch (error) {
//   console.error(error); // 🚨 Catches and logs the error
// } finally {
//   // ✅ The `finally` block always runs, no matter if an error occurred or not.
//   console.log("This always executes");
// }
// console.log("You have reached the end!");

// // 🧠 Explanation:
// // - `try` block contains code that may throw an error.
// // - If an error occurs, the code in the `catch` block runs, allowing you to handle the error gracefully.
// // - `finally` block runs regardless of whether an error occurred, useful for cleanup (like closing files or releasing resources).

// 3️⃣ Example 3: Custom Error Handling
// 🔍 This example shows how to manually throw custom errors for specific cases.

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can't divide by zero!"); // 🚫 Custom error for division by zero
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number"); // 🚫 Custom error for invalid input
  }

  const result = dividend / divisor; // ✅ Calculation
  console.log(result);
} catch (error) {
  console.error(error); // 🚨 Logs the error
}
console.log("You have reached the end!");

// 🧠 Simple Analogy 🧠
// Imagine you're driving a car 🚗 (running your code). If you encounter a problem (like a flat tire 🛞),
// without error handling, the car stops entirely 🛑. But with error handling, you can put a spare tire on
// (catch the error 🛠️) and continue the journey 🛤️. You may still have to deal with the flat tire, but you won’t be stuck.

// 🎯 Possible Use Cases:
// 1️⃣ User Input Validation 📝: Prevent errors when users provide invalid data (e.g., invalid form input).
// 2️⃣ API Calls 🌐: Handle network errors when fetching data from external APIs.
// 3️⃣ File Handling 📁: Gracefully manage errors when opening, reading, or writing files.
// 4️⃣ Security Issues 🔒: Capture and address security-related errors like permission issues.
// 5️⃣ Promise Rejection ❌: Manage errors from rejected promises in asynchronous operations.
// 6️⃣ Divide by Zero 🧮: Ensure mathematical operations don’t crash the program with invalid inputs.
// 7️⃣ Database Queries 🗄️: Handle database-related errors such as query failures or missing records.
// 8️⃣ Closing Resources 🛠️: Always close files, network connections, or clean up resources in the `finally` block.
// 9️⃣ Network Timeouts 🌍: Deal with timeouts or connection errors when making remote requests.
// 🔟 Configuration Issues ⚙️: Detect and fix errors in configuration files or environment settings before they cause bigger problems.
