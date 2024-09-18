// 27. JavaScript SPREAD OPERATOR

// Spread Operator =  ... allows an iterable such as an array or string to be
// expanded into separate elements (unpacks the elements)

//Example 1 explanation: ➕ This example uses the spread operator to pass array elements as individual arguments to Math.max() and Math.min(), allowing us to find the highest and lowest numbers.

// let numbers = [1, 2, 3, 4, 5];   // Array of numbers
// let maximum = Math.max(...numbers);  // 🏆 Spreads the array and finds the maximum value
// let minimum = Math.min(...numbers);  // 📉 Spreads the array and finds the minimum value
// console.log(maximum);   // 🖨️ Prints the maximum number
// console.log(minimum);   // 🖨️ Prints the minimum number

//Example 2 explanation: ✍️ This example spreads a string into individual characters, then joins them with a dash ("-") between each letter, making the string more visually distinct.

// let username = "Nero";   // String username
// let letters = [...username].join("-");  // 🌀 Spreads string into individual characters and joins with '-'
// console.log(letters);    // 🖨️ Prints the letters joined by '-'

//Example 3 explanation: 🍎🥕 This example combines two arrays, `fruits` and `vegetables`, along with other food items, 
//into a single array using the spread operator, which "unpacks" the elements of both arrays into a new array.

let fruits = ["Apple🍎", "Orange🍊", "Banana🍌"]; // Array of fruits
let vegetables = ["Garlic🧄", "Carrot🥕", "Broccoli🥦"]; // Array of vegetables

let foods = [...fruits, ...vegetables, "Egg🥚", "Milk🥛"]; // Combines fruits, vegetables, and other foods using spread operator

console.log(foods); // 🖨️ Prints the combined array of foods
// Output:
// [
//   "Apple🍎", "Orange🍊", "Banana🍌",
//   "Garlic🧄", "Carrot🥕", "Broccoli🥦",
//   "Egg🥚", "Milk🥛"
// ]

// 🧠 Simple Analogy 🧠
// The spread operator is like opening a suitcase 🧳 full of items and spreading them out on the floor. 
// Instead of keeping them in a bundle, you're laying them out so you can use each one individually.

// 🎯 Possible Use Cases:
// 1️⃣ Merging arrays 🌀: Combine multiple arrays into one array, like combining fruits and vegetables into a single list.
// 2️⃣ Copying arrays 📝: Easily copy an array into a new one without affecting the original.
// 3️⃣ Expanding function arguments 🧮: Spread array elements into individual arguments for functions like Math.max().
// 4️⃣ Spreading strings ✍️: Convert a string into an array of individual characters (useful for manipulation).
// 5️⃣ Adding new elements to an array 🎯: Insert new items into an array without mutating the original.
// 6️⃣ Passing arrays as arguments ⚙️: Pass array elements as separate arguments in function calls.
// 7️⃣ Shallow copying objects 🏷️: Spread operator can copy properties from one object to another, useful for updating objects.
// 8️⃣ Combining objects 🔗: Merge multiple objects together into one, especially when working with configurations or settings.
// 9️⃣ Working with arrays in loops 🔄: Spread elements to manipulate or loop through them efficiently.
// 🔟 Splitting and joining strings 🔤: Use spread to split strings and join them in creative ways (like adding separators).
