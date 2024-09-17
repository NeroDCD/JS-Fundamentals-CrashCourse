// 25. Learn JavaScript ARRAYS

// An array is a collection of values stored in a single variable. 🍇🍎🍊🍌
// You can think of it like a row of baskets 🧺, each holding a fruit. Each basket (array index) is numbered, starting from 0.

// 🛒 Example of an Array
let fruits = ["Apple🍎", "Orange🍊", "Banana🍌"]; // 🧺 Array with 3 fruits.

// 🎯 Accessing by Index
// Indexes start at 0, so `fruits[0]` gives the first item ("Apple🍎").
// console.log(fruits[0]); // 🍎
// console.log(fruits[1]); // 🍊
// console.log(fruits[2]); // 🍌

// 🛠️ Changing an Array Element
// fruits[1] = "Grapes🍇"; // 🍊 is replaced with 🍇.
// console.log(fruits[0]); // 🍎
// console.log(fruits[1]); // 🍇
// console.log(fruits[2]); // 🍌

// 🔄 ARRAY METHODS 🔄

// 1️⃣ .push() - Adds a new element to the end.
// fruits.push("Grapes🍇"); // 🧺 Adds 🍇 to the end of the array.

// 2️⃣ .pop() - Removes the last element.
// fruits.pop(); // 🧺 Removes the last element (🍇).

// 3️⃣ .unshift() - Adds an element to the beginning.
// fruits.unshift("Grapes🍇"); // 🧺 Adds 🍇 at the beginning.

// 4️⃣ .shift() - Removes the first element.
// fruits.shift(); // 🧺 Removes 🍇 from the beginning.

// 📊 Getting Array Length
// let numOfFruits = fruits.length; // Number of elements in the array.
// console.log(numOfFruits); // 🧮 Outputs the number of fruits.

// 🔍 Finding an Index
// let index = fruits.indexOf("Orange🍊"); // Finds the index of 🍊. If not found, it returns -1.
// console.log(index); // 🧭 Outputs the index or -1 if not found.

// 🔄 Looping through Arrays

// 5️⃣ Regular Loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // 🧺 Outputs each fruit.
// }

// 6️⃣ Looping in Reverse
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]); // 🔄 Outputs each fruit in reverse order.
// }

// 🅰️ Sorting (A to Z)
fruits.sort(); // Sorts the array in alphabetical order (A-Z).
console.log(fruits); // 🧾 Displays the sorted array.

// 🔄 Sorting in Reverse (Z to A)
// fruits.sort().reverse(); // Sorts in reverse order (Z-A).
// console.log(fruits); // 🧾 Displays the reverse sorted array.

// 7️⃣ Enhanced Loop (for..of)
for (let fruit of fruits) {
  console.log(fruit); // 🍎 Outputs each fruit in a simpler way.
}

// 🧠 Simple Analogy 🧠
// Think of an array as a grocery basket 🧺 where each item (fruit) has its own spot (index).
// You can add or remove items to/from the basket, search for an item, or even rearrange the items.
// This makes arrays super useful for organizing and managing collections of data!

// 🎯 Possible Use Cases:
// 1️⃣ Creating a to-do list 📝 where each task is an array item that can be added or removed.
// 2️⃣ Building an e-commerce shopping cart 🛒 that stores selected items in an array.
// 3️⃣ Managing a game leaderboard 🏆, where players' scores are stored and sorted.
// 4️⃣ Creating a gallery of images 🖼️ in a photo app, where each image is an array element.
// 5️⃣ Storing quiz questions and answers ❓ in an array to dynamically display them.
// 6️⃣ Handling a playlist 🎶 in a music player where users can add or remove songs.
// 7️⃣ Storing contact information 📇 in a phonebook app where each contact is an array element.
// 8️⃣ Building an inventory system 📦 for a store, where each product is stored in an array.
// 9️⃣ Managing form inputs ✅, like a list of checkboxes or radio buttons, to track user selections.
// 🔟 Tracking user actions or activities 🕒 in a log, where each action is an array item.
