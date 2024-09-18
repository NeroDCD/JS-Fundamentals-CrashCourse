// 26. Learn 2D ARRAYS in JavaScript

// 2D array = multi-dimensional array that stores a matrix of data in rows and columns.
// Useful for games 🎮, spreadsheets 📊, or representing images 🖼️.

// 1️⃣ Example 1 explanation: 🖨️ This example prints each row of the matrix as a string, displaying the 2D array in a clean format. Useful for showing grid-like structures.

// const matrix = [
//   [1, 2, 3],         // First row of the matrix
//   [4, 5, 6],         // Second row of the matrix
//   [7, 8, 9]          // Third row of the matrix
// ];

// for (let row of matrix) {           // 🔄 Loops through each row of the matrix
//   const rowString = row.join(" ");  // 🔗 Joins elements of the row with a space
//   console.log(rowString);           // 🖨️ Prints the row as a string to the console
// }

// 2️⃣ Example 2 explanation: 🎮 This example updates specific elements in the matrix (mimicking a game board like Tic-Tac-Toe) and prints the result.

// const matrix = [
//   [1, 2, 3],         // First row
//   [4, 5, 6],         // Second row
//   [7, 8, 9]          // Third row
// ];

// matrix[0][0] = "x";  // ✖️ First row, first column becomes "x"
// matrix[0][1] = "o";  // ⚪ First row, second column becomes "o"
// matrix[0][2] = "x";  // ✖️ First row, third column becomes "x"

// matrix[1][0] = "o";  // ⚪ Second row, first column becomes "o"
// matrix[1][1] = "x";  // ✖️ Second row, second column becomes "x"
// matrix[1][2] = "o";  // ⚪ Second row, third column becomes "o"

// matrix[2][0] = "x";  // ✖️ Third row, first column becomes "x"
// matrix[2][1] = "o";  // ⚪ Third row, second column becomes "o"
// matrix[2][2] = "x";  // ✖️ Third row, third column becomes "x"

// for (let row of matrix) {            // 🔄 Loops through each row of the updated matrix
//   const rowString = row.join(" ");   // 🔗 Joins the elements of the row with a space
//   console.log(rowString);            // 🖨️ Prints the updated matrix row by row
// }

// 3️⃣ Example 3 explanation: 🔢 This example introduces a matrix with numbers and special characters, showing that arrays can hold different data types.

const matrix = [
  [1, 2, 3], // 1️⃣ First row with numbers
  [4, 5, 6], // 2️⃣ Second row with numbers
  [7, 8, 9], // 3️⃣ Third row with numbers
  ["*", 0, "#"] // 🌟 Fourth row with special characters
];

for (let row of matrix) {
  // 🔄 Loops through each row in the matrix
  const rowString = row.join(" "); // 🔗 Joins the row elements with a space
  console.log(rowString); // 🖨️ Prints each row of the matrix as a string
}

// 🧠 Simple Analogy 🧠
// A 2D array is like a grid 🗺️ of data, similar to an Excel spreadsheet or
// a game board 🎮. You can organize information in rows and columns, making it
// easy to manipulate specific elements, like marking cells in Tic-Tac-Toe.

// 🎯 Possible Use Cases:
// 1️⃣ Game boards (Chess, Tic-Tac-Toe 🎮) using 2D arrays to represent player moves.
// 2️⃣ Organize spreadsheet data 📊 in rows and columns for easy updates.
// 3️⃣ Manipulate images 🖼️ by storing pixel data in a 2D array.
// 4️⃣ Arrange UI elements 🖥️ in a grid for responsive layouts.
// 5️⃣ Track seat reservations 🎟️ in theaters or airplanes using a grid.
// 6️⃣ Solve matrix problems ➗ in math with 2D arrays.
// 7️⃣ Store weather data 🌦️ across locations and time periods.
// 8️⃣ Design puzzles or mazes 🧩 by mapping the layout in 2D.
// 9️⃣ Manage calendar events 📅 by organizing days in a grid.
// 🔟 Track scores and rankings 🏆 with leaderboard data in a 2D array.
