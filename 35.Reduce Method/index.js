// 35. JavaScript reduce() method

// .reduce() = reduces the elements of an array to a single value

// 1️⃣ Example 1: Calculating Total Price
// 📜 This example demonstrates how to use .reduce() to sum up all prices in an array.
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum); // 🔄 Applies the sum function to accumulate total price

// // 🔄 The accumulator starts with the first value (5) and adds each subsequent value
// function sum(accumulator, element) {
//   return accumulator + element; // 🔢 Adds the current element to the accumulator
// }

// console.log(`$${total.toFixed(2)}`); // 📜 Logs: $105.00

// 2️⃣ Example 2: Finding Maximum and Minimum Grades
// 📜 This example shows how to use .reduce() to find the maximum and minimum values in an array of grades.
const grades = [75, 50, 90, 80, 55, 95];
const maximum = grades.reduce(getMax); // 🔄 Finds the maximum grade
const minimum = grades.reduce(getMin); // 🔄 Finds the minimum grade

function getMax(accumulator, element) {
  return Math.max(accumulator, element); // 🔼 Compares and returns the maximum value
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element); // 🔽 Compares and returns the minimum value
}

console.log(maximum); // 📜 Logs: 95
console.log(minimum); // 📜 Logs: 50

// 🧠 Simple Analogy 🧠
// 🧩 Think of .reduce() as a way to gather information from a group of items (array elements)
// and summarize it into a single value, like adding up expenses to get a total or finding the highest score from a list.

// 🎯 Possible Use Cases:
// 1️⃣ Summing Values:🔢 Add up numbers in an array, like calculating total expenses or scores.
// 2️⃣ Finding Extremes:🔍 Find the maximum or minimum value in an array, such as highest or lowest temperatures.
// 3️⃣ Aggregating Data:📊 Combine data into a single result, like totaling sales or combining user input.
// 4️⃣ Counting Occurrences:🔢 Count the occurrences of specific items in an array, such as counting votes or items in stock.
// 5️⃣ Building Objects:🛠️ Construct complex objects or data structures from arrays, like merging arrays into a single object.
// 6️⃣ Reducing Arrays:🔄 Condense an array into a single value, such as concatenating strings or summing up numbers.
// 7️⃣ Performing Calculations:🔢 Apply calculations across an array, like finding the average of values.
// 8️⃣ Combining Results:🔗 Merge results from multiple arrays into one, like combining multiple user data arrays into a single report.
// 9️⃣ Data Transformation:🔧 Transform data into a new format or structure, such as converting a list of values into a map.
// 🔟 Aggregating Results:📈 Summarize results or outcomes based on array elements, like calculating the total sales for a month.
