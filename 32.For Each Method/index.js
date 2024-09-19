// 32. JavaScript forEach() Method

// The forEach() method iterates over each element in an array
// and applies a specified function (callback) to every element 🔄

// Syntax: array.forEach(callback(element, index, array), thisArg)
// Parameters:
// - element: The current element being processed 🧩
// - index (Optional): The index of the current element 🗂️
// - array (Optional): The array on which forEach() was called 📜
// - thisArg (Optional): Value to use as this when executing the callback 🛠️

// 1️⃣ Example 1: Printing Each Element of the Array
// let numbers = [1, 2, 3, 4, 5]; // Array of numbers 📊

// numbers.forEach(display); // 📜 Applies the display function to each element

// function display(element) {
//   console.log(element); // 🖨️ Prints each element to the console
// }

// 2️⃣ Example 2: Applying Multiple Transformations to Each Element
// numbers = [1, 2, 3, 4, 5]; // Array of numbers 📊

// numbers.forEach(double); // 📈 Doubles each element
// numbers.forEach(triple); // 📉 Triples each element
// numbers.forEach(square); // ➗ Squares each element
// numbers.forEach(cube);   // 🧮 Cubes each element
// numbers.forEach(display); // 🖨️ Prints each transformed element

// 📝 Functions to Transform Array Elements
// function double(element, index, array) {
//   array[index] = element * 2; // 📈 Doubles the value at each index
// }

// function triple(element, index, array) {
//   array[index] = element * 3; // 📉 Triples the value at each index
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2); // ➗ Squares the value at each index
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3); // 🧮 Cubes the value at each index
// }

// function display(element) {
//   console.log(element); // 🖨️ Prints each element to the console
// }

// 3️⃣ Example 3: Capitalizing Each Vegetable Name
let vegetables = ["garlic🧄", "carrot🥕", "broccoli🥦"]; // Array of vegetables 🥦

// vegetables.forEach(upperCase); // ✨ Converts each vegetable name to uppercase
// vegetables.forEach(lowerCase); // ✨ Converts each vegetable name to lowercase
vegetables.forEach(capitalize); // 🆙 Capitalizes the first letter of each vegetable name
vegetables.forEach(display); // 🖨️ Prints each capitalized vegetable name

// 📝 Functions to Transform Array Elements
// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase(); // ✨ Converts each element to uppercase
// }

// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase(); // ✨ Converts each element to lowercase
// }

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1); // 🆙 Capitalizes the first letter
}

function display(element) {
  console.log(element); // 🖨️ Prints each element to the console
}

// 🧠 Simple Analogy 🧠
// 🧩 Think of forEach() as a chef working in a kitchen. 👩‍🍳
// Each ingredient (array element) is processed one by one according to a recipe (callback function),
// such as chopping, mixing, or cooking.

// 🎯 Possible Use Cases:
// 1️⃣ Transforming Arrays:🔄 Apply transformations like doubling or squaring values in an array.
// 2️⃣ Printing Elements:🖨️ Print each element of the array for debugging or output purposes.
// 3️⃣ Updating Arrays:✏️ Modify elements in place, such as capitalizing or formatting text.
// 4️⃣ Performing Actions:🚀 Execute actions such as logging or sending data to a server for each element.
// 5️⃣ Iterating Over Data:📊 Loop through elements to perform operations or calculations.
// 6️⃣ Handling User Input:🖱️ Process or manipulate user input data in real-time, like validating or formatting.
// 7️⃣ Applying Effects:🧩 Apply visual or data effects, such as styling or formatting text elements.
// 8️⃣ Debugging:🕵️ Use forEach() to inspect or log each item in an array during development.
// 9️⃣ Aggregating Results:📈 Collect results or summaries based on transformations or actions performed.
// 🔟 Managing Lists:📝 Update or manage lists of items, such as user names, product entries, or inventory.
