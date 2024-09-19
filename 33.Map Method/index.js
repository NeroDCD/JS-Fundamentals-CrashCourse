// 33. JavaScript map() method

// .map() = accepts a callback and applies that function
//  to each element of an array, then return a new array

// 1️⃣ Example 1: Cubing Numbers
// 📜 This example demonstrates how to apply a function to each element in an array to create a new array where each number is cubed.
// const numbers = [1, 2, 3, 4, 5];

// // const squares = numbers.map(square); // 🧮 Applies the square function to each number
// const cubes = numbers.map(cube); // 🔄 Applies the cube function to each number

// // function square(element) {
// //   return Math.pow(element, 2); // 🔢 Returns the square of the number
// // }

// function cube(element) {
//   return Math.pow(element, 3); // 🔢 Returns the cube of the number
// }

// console.log(cubes); // 📜 Logs: [1, 8, 27, 64, 125]

// 2️⃣ Example 2: Converting Names to Lowercase
// 📜 This example shows how to use .map() to transform each string in an array to lowercase.
// const students = ["Yatoro", "Larl", "Collapse", "Mira", "Miposhka"];

// const studentsUpper = students.map(upperCase); // ✨ Converts each name to uppercase
// const studentsLower = students.map(lowerCase); // ✨ Converts each name to lowercase

// function upperCase(element) {
//   return element.toUpperCase(); // 🔠 Converts the name to uppercase
// }

// function lowerCase(element) {
//   return element.toLowerCase(); // 🔡 Converts the name to lowercase
// }

// console.log(studentsUpper); // 📜 Logs: ["YATORO", "LARL", "COLLAPSE", "MIRA", "MIPOSHKA"]
// console.log(studentsLower); // 📜 Logs: ["yatoro", "larl", "collapse", "mira", "miposhka"]

// 3️⃣ Example 3: Formatting Dates
// 📜 This example demonstrates how to format date strings from "YYYY-MM-DD" to "MM/DD/YYYY" using .map().
const dates = ["2023-07-18", "2024-08-19", "2025-09-20"];
const formattedDates = dates.map(formatDates); // 🔄 Applies the formatDates function to each date

function formatDates(element) {
  const parts = element.split("-"); // 🧩 Splits the date string into parts
  return `${parts[1]}/${parts[2]}/${parts[0]}`; // 🗓️ Reformats to MM/DD/YYYY
}

console.log(formattedDates); // 📜 Logs: ["07/18/2023", "08/19/2024", "09/20/2025"]

// 🧠 Simple Analogy 🧠
// 🧩 Think of .map() like a line of people each holding a different item (array elements).
// Each person passes their item through a special machine (callback function) that changes it in some way.
// At the end of the line, everyone gets a new item (new array) that has been transformed by the machine.

// 🎯 Possible Use Cases:
// 1️⃣ Transforming Data:🔄 Convert elements into a new format or structure, such as changing date formats or numbers.
// 2️⃣ Mapping Over Arrays:🔍 Apply transformations or calculations to each item in an array, like squaring or cubing numbers.
// 3️⃣ Formatting Output:📋 Format strings or data to match a specific requirement, such as converting names to uppercase or lowercase.
// 4️⃣ Generating New Arrays:🧩 Create new arrays based on the transformation of existing arrays, like getting a list of modified elements.
// 5️⃣ Data Preparation:📊 Prepare data for further processing or visualization, like formatting dates or numbers for display.
// 6️⃣ Parsing Data:🧩 Extract and reformat parts of a string or object, such as splitting and reassembling date strings.
// 7️⃣ Applying Operations:🔧 Perform specific operations on each element, such as encoding or decoding data.
// 8️⃣ Customizing Output:🎨 Customize the output based on specific requirements, like adjusting text case or applying calculations.
// 9️⃣ Generating Reports:📈 Create summaries or reports based on transformed data, such as generating a list of formatted dates.
// 🔟 Data Mapping:🗺️ Map data from one structure to another, like converting an array of objects into a different format.
