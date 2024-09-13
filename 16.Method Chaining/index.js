// 16. Learn JS METHOD CHAINING

// 🧩 Method Chaining = Calling one method after another in one continuous line of code.
// It allows you to perform multiple operations on a string or other objects in a single statement.

let username = window.prompt("Enter your Username: "); // 📝 User is prompted to enter their username.

// No Method Chaining Approach

// username = username.trim();          // 🚿 Removes any extra spaces from the beginning and end.
// let letter = username.charAt(0);     // 🔠 Gets the first character.
// letter = letter.toUpperCase();       // 🆙 Converts the first character to uppercase.
// let extraChar = username.slice(1);   // ✂️ Extracts the rest of the characters.
// extraChar = extraChar.toLowerCase(); // 🔡 Converts the rest of the string to lowercase.
// username = letter + extraChar;       // 🔄 Combines the first letter and the remaining string.
// console.log(username);               // 🖥️ Outputs the final result.

// Method Chaining Approach
// 🧠 In one line, this approach trims extra spaces, capitalizes the first letter, and converts the rest to lowercase.
username =
  username.trim().charAt(0).toUpperCase() + // 🧼 Trim, get first letter, uppercase it.
  username.trim().slice(1).toLowerCase(); // ✂️ Trim again, slice the rest of the string, and lowercase it.

console.log(username); // 🖥️ Outputs the final transformed username.

// 🎯 Example Output:
// If user enters: "   nErOdCd   "
// After processing: "Nerodcd"

// 🎯 Possible Use Cases:
// 1️⃣ Formatting user input, like capitalizing names or fixing letter cases (e.g., "john DOE" → "John doe").
// 2️⃣ Cleaning up form data before submission (e.g., removing spaces and ensuring correct casing).
// 3️⃣ Manipulating strings (e.g., converting all phone numbers to a standard format).
// 4️⃣ Efficient code writing, reducing multiple lines of code to just one continuous statement.
// 5️⃣ Easily chaining DOM manipulations, such as adding classes or setting attributes in one line.
