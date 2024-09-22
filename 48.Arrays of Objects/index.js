// 48. JavaScript ARRAYS of OBJECTS

// 📚 Array of Objects = In JavaScript, it's a collection where each item is an object.
// 🗂️ Objects store data as key-value pairs, and arrays organize multiple objects in a list.
// ✅ This structure is useful for managing collections of complex data, like lists of people, products, etc.
// 🔄 Each object can have different properties, allowing for a flexible and dynamic data structure.
// 🌟 For example, in a list of fruits, each fruit object can store properties like name, color, and calories.
// 🔍 This makes it easy to perform operations like filtering, mapping, and reducing over the collection to extract or manipulate data.

const fruits = [
  { name: "Apple 🍎", color: "Red", calories: 95 },
  { name: "Banana 🍌", color: "Yellow", calories: 105 },
  { name: "Grapes 🍇", color: "Purple", calories: 55 },
  { name: "Orange 🍊", color: "Orange", calories: 45 },
  { name: "Strawberry 🍓", color: "Red", calories: 33 }
];

// 1️⃣ Example 1: Accessing Properties of Objects
// This example demonstrates how to access specific properties of objects within the array.
// Each fruit object contains properties like name, color, and calories.

// console.log(fruits[0].name); // 🖨️ "Apple 🍎"
// console.log(fruits[0].color); // 🖨️ "Red"
// console.log(fruits[0].calories); // 🖨️ 95

// console.log(fruits[4].name); // 🖨️ "Strawberry 🍓"
// console.log(fruits[4].color); // 🖨️ "Red"
// console.log(fruits[4].calories); // 🖨️ 33

// 2️⃣ Example 2: Manipulating the Array of Objects
// This example shows various methods to manipulate the array, including adding, removing, and transforming objects.

// // ➕ Push: Adds a new fruit object to the end of the array.
// fruits.push({ name: "Peach 🍑", color: "Pink", calories: 58 });
// console.log(fruits); // 🖨️ Displays the updated array with the new fruit.

// // ➖ Pop: Removes the last fruit object from the array.
// fruits.pop();
// console.log(fruits); // 🖨️ Displays the array after removing the last fruit.

// // ✂️ Splice: Removes two fruit objects starting from index 1.
// fruits.splice(1, 2);
// console.log(fruits); // 🖨️ Displays the array after splicing.

// // 🔄 ForEach: Iterates through the array and logs each fruit's name.
// fruits.forEach((fruit) => console.log(fruit.name)); // 🖨️ Logs the names of remaining fruits.

// // 🗺️ Map: Creates new arrays for names, colors, and calories of fruits.
// const fruitName = fruits.map((fruit) => fruit.name); // 🥭 Array of fruit names
// const fruitColors = fruits.map((fruit) => fruit.color); // 🥭 Array of fruit colors
// const fruitCal = fruits.map((fruit) => fruit.calories); // 🥭 Array of fruit calorie counts
// console.log(fruitName); // 🖨️ Displays the array of fruit names.
// console.log(fruitColors); // 🖨️ Displays the array of fruit colors.
// console.log(fruitCal); // 🖨️ Displays the array of fruit calories.

// // 🍏 Filter: Creates arrays of fruits based on specific criteria.
// const RedFruits = fruits.filter((fruit) => fruit.color === "Red"); // 🥭 Array of red fruits
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); // 🥭 Array of low-calorie fruits
// const HighCalFruits = fruits.filter((fruit) => fruit.calories >= 100); // 🥭 Array of high-calorie fruits

// console.log(RedFruits); // 🖨️ Displays red fruits.
// console.log(lowCalFruits); // 🖨️ Displays low-calorie fruits.
// console.log(HighCalFruits); // 🖨️ Displays high-calorie fruits.

// 🔍 Reduce: Finds the maximum and minimum calorie fruits in the array.
const MaxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
); // 🏆 Finds the fruit with the highest calories.

const MinFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
); // 🏅 Finds the fruit with the lowest calories.

console.log(MaxFruit); // 🖨️ Displays the fruit with the maximum calories.
console.log(MinFruit); // 🖨️ Displays the fruit with the minimum calories.

// 🧠 Simple Analogy 🧠
// An array of objects is like a fruit basket. Each fruit represents an object, containing various attributes like name, color, and calories. You can easily add, remove, or inspect the fruits in the basket.

// 🎯 Possible Use Cases:
// 1️⃣ Inventory Management 📦: Manage a list of products in a store, including attributes like name, price, and quantity.
// 2️⃣ User Profiles 🧑‍🤝‍🧑: Store information about users in an application, such as name, email, and preferences.
// 3️⃣ Course Catalog 📚: Organize courses offered by an institution, including title, duration, and instructor.
// 4️⃣ Recipe Collections 🍽️: Maintain a list of recipes with ingredients, cooking time, and instructions.
// 5️⃣ Event Scheduling 📅: Keep track of events, including title, date, location, and participants.
// 6️⃣ Product Reviews ⭐: Store customer reviews for products, including review text, rating, and reviewer name.
// 7️⃣ Social Media Posts 📱: Manage posts on social platforms with content, timestamp, and author details.
// 8️⃣ Shopping Lists 🛒: Create lists of items to buy, including product names, quantities, and prices.
// 9️⃣ Movie Databases 🎥: Organize information about movies, including title, genre, and release date.
// 🔟 Employee Records 🏢: Maintain a list of employees with their roles, departments, and contact information.
