// 36. JavaScript FUNCTION EXPRESSIONS

// Function expressions = a way to define functions as values or variables

// 1️⃣ Callbacks in Asynchronous Operations 🔄
// Callbacks are functions passed as arguments to other functions.
// They are executed once an asynchronous task completes.
// For example, use a callback to handle data after an API request finishes.
// This allows your program to continue running while waiting for tasks to complete.

// 2️⃣ Higher-Order Functions 🔝
// Higher-order functions are functions that take other functions as arguments.
// They can also return functions as results.
// Examples include `map`, `filter`, and `reduce` in JavaScript.
// These functions process each element in an array using a provided function.

// 3️⃣ Closures 🔒
// Closures are functions that capture and remember the environment in which they were created.
// They can access variables from their outer scope even after the outer function has finished executing.
// Closures help in creating private variables and functions that are accessible only within specific inner functions.

// 4️⃣ Event Listeners 📣
// Event listeners are functions that respond to events triggered by the user or browser.
// Common events include clicks, key presses, or mouse movements.
// By attaching event listeners to elements, you can create interactive features, like showing a message
// when a button is clicked or validating form inputs on submission.

// Example 1:📜 Define a function expression and assign it to the variable 'hello'.
// 🎯 This function, when called, prints "Hello" to the console.

// const hello = function () {
//   console.log("Hello"); // 👋 Logs "Hello" to the console
// };

// hello(); // 👋 Calls the function and executes the code inside it.

// Example 2:🕰️ Use a function expression as a callback with setTimeout.
// ⏳ After 3 seconds, it prints "Hello" to the console.

// setTimeout(function () {
//   console.log("Hello"); // 🖨️ Prints "Hello" after 3 seconds
// }, 3000); // ⏲️ 3000 milliseconds = 3 seconds

// Example 3
const numbers = [1, 2, 3, 4, 5]; // 📊 Array of numbers

// Square
// 🔢 Use the map method to square each element in the array.
// 🎯 This function expression calculates the square of each number.
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2); // 🧮 Returns the square of the number
// });
// console.log(squares); // 🖨️ Prints the array of squared numbers

// Cubes
// 🔢 Use the map method to cube each element in the array.
// 🎯 This function expression calculates the cube of each number.
// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3); // 🧮 Returns the cube of the number
// });
// console.log(cubes); // 🖨️ Prints the array of cubed numbers

// Filter Method (Even)
// 🕵️‍♂️ Use the filter method to find even numbers in the array.
// 🎯 This function expression checks if a number is even.
// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0; // ✔️ Checks if the number is even
// });
// console.log(evenNums); // 🖨️ Prints the array of even numbers

// Filter Method (Odd)
// 🕵️‍♂️ Use the filter method to find odd numbers in the array.
// 🎯 This function expression checks if a number is odd.
// const oddNums = numbers.filter(function (element) {
//   return element % 2 !== 0; // ✔️ Checks if the number is odd
// });
// console.log(oddNums); // 🖨️ Prints the array of odd numbers

// Reduce Method
// 🧮 Use the reduce method to sum all elements in the array.
// 🎯 This function expression adds each number to the accumulator.
const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element; // ➕ Adds the current element to the accumulator
});
console.log(total); // 🖨️ Prints the sum of all numbers in the array

// 🧠 Simple Analogy 🧠
// 🧰 Think of function expressions as recipes in a cookbook. Each recipe (function) has specific steps (code) to perform a particular task.
// 📚 Just like choosing a recipe based on what you want to cook, you choose a function expression based on the task you need to complete.
// 🍳 For example, if you want to bake cookies, you follow the cookie recipe. Similarly, in JavaScript, you call the function expression to execute its instructions.

// 🎯 Possible Use Cases:
// 1️⃣ Dynamic Function Assignment 🔄: Store a function in a variable and use it when needed. For example, save a function to calculate a discount and use it later.
// 2️⃣ Immediate Execution 🚀: Run a function immediately when you need it without giving it a name. Useful for quick tasks or simple operations.
// 3️⃣ Passing Functions as Arguments 🔗: Send a function as an argument to another function to make your code more flexible and reusable.
// 4️⃣ Returning Functions 🔄: Have one function return another function, allowing you to create specialized functions or manage complex tasks more easily.
// 5️⃣ Event Handling 🖱️: Create functions to handle user actions like clicks or typing and use them to respond to these events on your webpage.
// 6️⃣ Callback Functions ⏳: Use function expressions to handle tasks that need to be done after something else finishes, like processing data after loading a file.
// 7️⃣ Function Composition 🔗: Combine multiple functions to perform complex tasks. For example, use one function to process data and another to display it.
// 8️⃣ Function Wrapping 🛠️: Add extra features to existing functions, such as logging or error handling, by using function expressions to wrap them.
// 9️⃣ Inline Functions 📏: Write functions directly within other code, such as inside function calls or object methods, to keep your code simple and readable.
// 🔟 Dynamic Behavior 🎭: Create functions based on conditions or user input, making your code adaptable to different situations and user actions.
