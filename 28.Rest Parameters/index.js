// 28. JavaScript REST PARAMETERS

// Rest Parameters = (...rest) allow a function to work with a variable number of arguments by bundling them into an array
// Spread = expands an array into separate elements
// Rest = bundles separate elements into an array

//Example 1 explanation: 🗂️ This example shows how to use rest parameters to gather a variable number of arguments into an array and then print them out.

// function openFridge(...foods) {
//   console.log(...foods);  // 🖨️ Prints all arguments as separate elements
// }

// const food1 = "Pizza 🍕";
// const food2 = "Hamburger 🍔";
// const food3 = "Hotdog 🌭";
// const food4 = "Sushi 🍣";
// const food5 = "Ramen 🍜";

// openFridge(food1, food2, food3, food4, food5);  // 🖨️ Prints: Pizza 🍕 Hamburger 🍔 Hotdog 🌭 Sushi 🍣 Ramen 🍜


//Example 2 explanation: 🧾 This example demonstrates how to collect multiple arguments into an array and then return the array from the function.

// function getFood(...foods) {
//   return foods;  // 📦 Bundles all arguments into an array
// }

// const food1 = "Pizza 🍕";
// const food2 = "Hamburger 🍔";
// const food3 = "Hotdog 🌭";
// const food4 = "Sushi 🍣";
// const food5 = "Ramen 🍜";

// const foods = getFood(food1, food2, food3, food4, food5);  // 📦 Gets an array of foods
// console.log(foods);  // 🖨️ Prints: ["Pizza 🍕", "Hamburger 🍔", "Hotdog 🌭", "Sushi 🍣", "Ramen 🍜"]


//Example 3 explanation: ➕ This example uses rest parameters to sum a variable number of arguments by adding them together.

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;  // ➕ Adds each number to the result
//   }
//   return result;  // 📦 Returns the total sum
// }
// const total = sum(1, 2, 3, 4, 5);  // 🧮 Sums the numbers
// console.log(`Your total is $${total}`);  // 🖨️ Prints: Your total is $15


//Example 4 explanation: 📊 This example calculates the average of a variable number of arguments by dividing the sum by the number of arguments.

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;  // ➕ Adds each number to the result
//   }
//   return result / numbers.length;  // 🔢 Calculates the average
// }

// const total = getAverage(75, 100, 85, 90, 50);  // 🧮 Computes the average
// console.log(`The Average is ${total}`)  // 🖨️ Prints: The Average is 80


//Example 5 explanation: ✨ This example joins multiple strings into a single string with spaces in between them.

function combineStrings(...strings) {
  return strings.join(" "); // 📝 Joins strings with spaces
}
const fullname = combineStrings("Mr.", "Nero", "DCD"); // 🧩 Combines the strings
console.log(fullname); // 🖨️ Prints: Mr. Nero DCD

// 🧠 Simple Analogy 🧠
// The rest parameters are like a basket 🧺 that collects multiple items into one place, allowing you to handle them together. 
// Instead of dealing with individual items, you bundle them into a single basket (array).

// 🎯 Possible Use Cases:
// 1️⃣ Collecting items 🛒: Gather any number of items (like grocery list) into one array.
// 2️⃣ Adding numbers ➕: Sum any number of values, such as prices or scores.
// 3️⃣ Calculating averages 📉: Compute the average of various numbers, like grades or ratings.
// 4️⃣ Combining strings ✍️: Join multiple words or phrases into one string, like creating a full name.
// 5️⃣ Flexible functions 🎨: Create functions that handle a varying number of inputs, such as logging different messages.
// 6️⃣ Handling arguments 🎛️: Manage a list of options or parameters in a function call without specifying them all explicitly.
// 7️⃣ Aggregating data 📊: Combine different pieces of data into a single array for processing or display.
// 8️⃣ Dynamic content 🧩: Create dynamic lists of items or text from user inputs or other sources.
// 9️⃣ Customizing behavior 🔄: Modify the behavior of functions based on the number of inputs provided.
// 🔟 Generating reports 📑: Collect and format data from various sources into a single report or output.
