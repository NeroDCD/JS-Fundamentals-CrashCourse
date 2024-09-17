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


// 🧠 Simple Analogy 🧠
// Method chaining in JavaScript is like a series of tasks performed in a single step, one after the other, similar to a factory assembly line 🏭:
// Imagine you have a machine that can perform multiple operations in sequence, like shaping, painting, and packaging a product.
// Instead of stopping and starting the machine for each task, you can set it to perform all tasks in one go, producing the final product more efficiently.
// In the same way, method chaining allows you to call multiple methods on a single object, where each method performs an operation and returns the object for the next method in the chain.
// For example, `str.trim().toUpperCase().replace("OLD", "NEW")` is like shaping a product, then painting it, and finally packaging it, all in one smooth process.
// Method chaining makes code more concise and readable, just like using an efficient production line to get the job done faster and cleaner.


// 🎯 Possible Use Cases:
// 1️⃣ Formatting user input by chaining methods to change cases (e.g., "john DOE" → "John doe"). ✍️
// 2️⃣ Cleaning up form data by chaining methods to remove extra spaces and correct casing. 📝
// 3️⃣ Manipulating strings by chaining methods to format phone numbers or other data. 📞
// 4️⃣ Writing cleaner code by combining multiple operations into one line. 📜
// 5️⃣ Updating the DOM efficiently by chaining methods to add classes, set attributes, and more in one line. 🌐
// 6️⃣ Processing data through multiple steps in a single line (e.g., filtering and sorting). 🔄
// 7️⃣ Handling events by chaining methods for adding and managing event listeners. 🎯
// 8️⃣ Making code easier to read by grouping related actions together. 🧩
// 9️⃣ Reducing unnecessary variables and making code faster with method chaining. 🚀
// 🔟 Building complex functionality by chaining functions to create more advanced behavior. 🔗