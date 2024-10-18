// 16. Learn JS METHOD CHAINING

// 🔗 Method chaining is calling one method after another in a single, continuous line of code.
// 🚀 It allows you to perform multiple operations on a string or other objects in a single statement.

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

// 🧠 Simple Analogy 🧠
// 🏭 Method chaining in JavaScript is like a factory assembly line where tasks are performed in sequence without interruptions.
// 🛠️ Imagine shaping, painting, and packaging a product in one smooth flow, making the process more efficient.
// 🔗 Method chaining allows you to call multiple methods on an object, where each method returns the object for the next step in the chain.
// ✂️ For example, `str.trim().toUpperCase().replace("OLD", "NEW")` is like shaping a product, painting it, and then packaging it, all in one go.
// 🚀 Method chaining makes your code more efficient and concise, just like using an assembly line to streamline production.

// 🎯 Possible Use Cases:
// 1️⃣ Formatting input ✍️: Chain methods to change the case of text (e.g., "john DOE" → "John doe").
// 2️⃣ Cleaning form data 📝: Use chaining to trim spaces and correct casing in one step.
// 3️⃣ Data formatting 📞: Manipulate strings for phone numbers, dates, or other data formats.
// 4️⃣ Writing cleaner code 📜: Combine multiple operations into a single line for better readability.
// 5️⃣ Efficient DOM manipulation 🌐: Chain methods to add classes, set attributes, and modify the DOM in one line.
// 6️⃣ Data processing 🔄: Chain methods for filtering, sorting, and transforming data.
// 7️⃣ Event handling 🎯: Chain methods for adding and managing event listeners and actions.
// 8️⃣ Improving readability 🧩: Group related actions together for clearer, more concise code.
// 9️⃣ Reducing variables 🚀: Avoid unnecessary variables by chaining methods, leading to faster and cleaner code.
// 🔟 Building complex behavior 🔗: Chain functions together to create advanced functionality with ease.
