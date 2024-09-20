// 37. Learn JavaScript ARROW FUNCTIONS

// Arrow functions = a concise way to write function expressions
// Good for simple functions that you use only once

// 1️⃣ Example 1: Basic Function
// 📜 This example demonstrates how to define and use a simple function that logs "Hello" to the console.

// 👋 Function Expression
// const hello = function () {
//   console.log("Hello"); // 🖨️ Logs "Hello" to the console
// };
// hello(); // 🔄 Calls the function to execute the code inside it

// 🖋️ Arrow Function
// const hello = () => console.log("Hello"); // 📝 Shorter syntax for the same function
// hello(); // 🔄 Calls the arrow function to log "Hello"

// 2️⃣ Example 2: Function with Parameters
// 📜 This example shows how to define a function with parameters to log a personalized greeting and age.

// 📋 Function Expression
// const hello = function (name, age) {
//   console.log(`Hello ${name}`); // 🖨️ Logs "Hello" followed by the provided name
//   console.log(`You are ${age} years old`); // 🖨️ Logs the provided age
// };
// hello("Nero", 27); // 🔄 Calls the function with arguments "Nero" and 27

// 🖋️ Arrow Function
// const hello = (name, age) => {
//   console.log(`Hello ${name}`); // 🖨️ Logs "Hello" followed by the provided name
//   console.log(`You are ${age} years old`); // 🖨️ Logs the provided age
// };
// hello("Nero", 27); // 🔄 Calls the arrow function with "Nero" and 27

// 3️⃣ Example 3: Using with setTimeout
// 📜 This example demonstrates how to use a function with `setTimeout` to delay logging a message by 3 seconds.

// ⏲️ Function Expression
// setTimeout(function () {
//   console.log("Hello"); // 🖨️ Logs "Hello" after a delay
// }, 3000); // ⏲️ Waits 3000 milliseconds (3 seconds) before executing the function

// ⏰ Arrow Function
// setTimeout(() => console.log("Hello"), 3000); // 🖨️ Shorter syntax for the same delayed logging

// 4️⃣ Example 4: Array Operations
const numbers = [1, 2, 3, 4, 5];

// 🔢 Square
// 📜 This example uses `map` with an arrow function to calculate the square of each number in the array.

// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares); // 🖨️ Logs an array of squared numbers, e.g., [1, 4, 9, 16, 25]

// 🧮 Cube
// 📜 This example uses `map` with an arrow function to calculate the cube of each number in the array.

// const cubes = numbers.map((element) => Math.pow(element, 3));
// console.log(cubes); // 🖨️ Logs an array of cubed numbers, e.g., [1, 8, 27, 64, 125]

// 🔍 Filter Method (Even Number)
// 📜 This example uses `filter` with an arrow function to find even numbers in the array.

// const evenNums = numbers.filter((element) => element % 2 === 0);
// console.log(evenNums); // 🖨️ Logs an array of even numbers, e.g., [2, 4]

// 🔎 Filter Method (Odd Number)
// 📜 This example uses `filter` with an arrow function to find odd numbers in the array.

// const oddNums = numbers.filter((element) => element % 2 !== 0);
// console.log(oddNums); // 🖨️ Logs an array of odd numbers, e.g., [1, 3, 5]

// ➕ Reduce Method
// 📜 This example demonstrates how to use the `reduce` method to calculate the total sum of numbers in an array.

// 🔢 Calculating the Total
// `reduce` is used to accumulate a single result from all elements in the array.
const total = numbers.reduce((sum, num) => sum + num); // 🔄 Applies the arrow function to add up all numbers
console.log(total); // 🖨️ Logs the total sum of the numbers in the array

// 🧠 Breakdown of the Reduce Method
// 1. `reduce` Method:
// 📜 The `reduce` method iterates over each element in the array and applies a function to combine all elements into a single value.

// 2. Arrow Function `(sum, num) => sum + num`:
// 🧩 This function defines how the reduction should be performed:
//   - `sum` is the accumulator that keeps track of the accumulated value.
//   - `num` is the current element in the array being processed.
//   - `sum + num` is the operation that adds the current number to the accumulated total.
//     - For example, if `sum` is 10 and `num` is 5, the result of `sum + num` is 15, which updates `sum` for the next iteration.

// 3. Initial Value (not provided here):
// 📜 By default, `reduce` uses the first element of the array as the initial `sum` and starts iterating from the second element.
// If you want to specify an initial value (e.g., `0`), you can provide it as the second argument to `reduce`:
// `const total = numbers.reduce((sum, num) => sum + num, 0);`
// This sets the initial value of `sum` to `0`, ensuring that `reduce` starts with `0` and adds all numbers from the start.

// 4. How It Works:
// 📜 Here's how the function processes the array `[1, 2, 3, 4, 5]` step-by-step:
// Iteration 1: `sum` is 1, `num` is 2, so `sum + num` is 3
// Iteration 2: `sum` is 3, `num` is 3, so `sum + num` is 6
// Iteration 3: `sum` is 6, `num` is 4, so `sum + num` is 10
// Iteration 4: `sum` is 10, `num` is 5, so `sum + num` is 15

// 🔄 The final result, `15`, is the total sum of all numbers in the array.

// 🧠 Simple Analogy 🧠
// 🛠️ Think of arrow functions as shorthand notes you use for quick tasks.
// Instead of writing out detailed instructions, you use brief notes (arrow functions) to keep your code concise and readable.

// 🎯 Possible Use Cases:
// 1️⃣ Short Functions ✂️: Use arrow functions for simple tasks where you need a brief and clear function.
// 2️⃣ Inline Callbacks 🔄: Pass arrow functions directly as arguments to other functions for cleaner code.
// 3️⃣ Event Handlers 🖱️: Create short functions to handle user events like clicks or typing easily.
// 4️⃣ Timers ⏲️: Use arrow functions with `setTimeout` or `setInterval` for simple timing tasks without extra syntax.
// 5️⃣ Functional Programming 🔗: Apply arrow functions in functional programming to keep your code readable and concise.
// 6️⃣ Mapping Data 🗂️: Use arrow functions in `map` to transform each element in an array in a simple way.
// 7️⃣ Reducing Data 🧮: Use arrow functions in `reduce` to aggregate or process array data efficiently.
// 8️⃣ One-Time Use Functions 🚀: Write functions used only once with a compact syntax for clarity and brevity.
// 9️⃣ Simplifying Code 📝: Reduce the length of your code and make it easier to understand by using arrow functions.
// 🔟 Enhancing Readability 📖: Keep your code neat and more readable with shorter and clearer arrow function syntax.
