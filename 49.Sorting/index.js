// 49. Learn JavaScript SORTING

// 🔡 sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical.
// ℹ️ Lexicographic = (alphabet + numbers + symbols) as strings.

// 📖 Lexicographic refers to the order in which words or strings are arranged in a dictionary-like sequence.
// It’s based on the alphabetical order of their component characters,
// comparing one character at a time from left to right.


// 1️⃣ Example 1 (Sorting Strings)
// 🍎 Sorting an array of fruits by lexicographic order (dictionary-like).

// let fruits = [
//   "🍎 Apple",
//   "🍌 Banana",
//   "🍇 Grape",
//   "🍉 Watermelon",
//   "🍍 Pineapple"
// ];

// // 📝 Since sort() uses lexicographic order by default, it compares each string character by character,
// // leading to an unexpected order based on the first character of the word.

// fruits.sort(); // Lexicographic sort
// console.log(fruits);
// // 🖨️ Logs: ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍍 Pineapple", "🍉 Watermelon"]


// 2️⃣ Example 2 (Sorting Numbers with Arrow Function)
// 🧮 Sorting an array of numbers in ascending and descending order.

// let numbers = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9];
// // Ascending
// // 📝 Using sort with a comparison function to sort numbers correctly in ascending order.
// numbers.sort((a, b) => a - b);
// // Descending
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// // Descending Numbers
// // 🖨️ Logs: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// 3️⃣ Example 3 (Sorting Objects by a Given Property)
// 🧑‍🤝‍🧑 Sorting an array of people by different properties like age, GPA, and name.

const people = [
  { name: "Alice", age: 25, gpa: 3.8 },
  { name: "Bob", age: 30, gpa: 3.5 },
  { name: "Charlie", age: 22, gpa: 3.9 },
  { name: "Diana", age: 28, gpa: 3.4 },
  { name: "Eve", age: 23, gpa: 3.7 }
];

// //Ascending Age
// people.sort((a, b) => a.age - b.age);

// //Descending Age
// people.sort((a, b) => b.age - a.age);

// //Ascending GPA
// people.sort((a, b) => a.gpa - b.gpa);

// //Descending GPA
// people.sort((a, b) => b.gpa - a.gpa);

// //Ascending Name (using localeCompare for strings)
// people.sort((a, b) => a.name.localeCompare(b.name));

// //Descending Name
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
// 🖨️ Logs: [{name: "Eve"}, {name: "Diana"}, {name: "Charlie"}, {name: "Bob"}, {name: "Alice"}]

// 🧠 Simple Analogy 🧠
// Sorting is like organizing items on a shelf:
// - Lexicographic sorting is like sorting books by the first letter of their title,
//   but numbers come after letters.
// - Sorting numbers with a comparison function is like arranging boxes by their weight.
// - Sorting objects is like arranging photos by date or category.

// 🎯 Possible Use Cases:
// 1️⃣ Inventory Management 📦: Organize products by name, price, or quantity in a store.
// 2️⃣ User Profiles 🧑‍🤝‍🧑: Sort users by age, name, or location in an application.
// 3️⃣ Course Catalog 📚: Arrange courses by title, instructor, or duration in a learning platform.
// 4️⃣ Recipe Collections 🍽️: Sort recipes by cooking time, difficulty, or ingredients in a cookbook app.
// 5️⃣ Event Scheduling 📅: Order events by date, time, or priority in a scheduling tool.
// 6️⃣ Product Reviews ⭐: Sort product reviews by rating, review date, or reviewer name in an e-commerce site.
// 7️⃣ Social Media Posts 📱: Organize posts by likes, comments, or posting date on a social platform.
// 8️⃣ Shopping Lists 🛒: Sort items in a shopping list by category, price, or quantity.
// 9️⃣ Movie Databases 🎥: Order movies by title, genre, or release year in a streaming service.
// 🔟 Employee Records 🏢: Sort employee information by name, role, or hire date in a company database.
