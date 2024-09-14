// 15. Learn JavaScript STRING SLICING

// ✂️ String slicing = Creating a substring from a portion of another string.
// It extracts parts of a string using the slice method.
// Syntax: string.slice(start, end)
// - start: The index where slicing begins (inclusive).
// - end: The index where slicing ends (exclusive).

// Example 1

// const FULL_NAME = "Nero DCD"; // 👤 Full name as a string

// let firstname = FULL_NAME.slice(0, 4);
// 📝 Slices the first 4 characters of "FULL_NAME", starting at index 0 and ending before index 4.
// Result: "Nero"

// let lastname = FULL_NAME.slice(5);
// 📝 Slices from index 5 to the end of the string, extracting "DCD" as the last name.

// let firstchar = FULL_NAME.slice(0, 1);
// 📝 Slices the first character of the string, starting at index 0 and ending before index 1.
// Result: "N"

// let lastchar = FULL_NAME.slice(-1);
// 📝 Using a negative index, this gets the last character of the string.
// Result: "D"

// console.log(firstname);  // Output: "Nero"
// console.log(lastname);   // Output: "DCD"
// console.log(firstchar);  // Output: "N"
// console.log(lastchar);   // Output: "D"

// Example 2

// const FULL_NAME = "Nero DCD"; // 👤 Another full name

// let fname = FULL_NAME.slice(0, FULL_NAME.indexOf(" "));
// 📝 Slices from the start to the first space (" "), dynamically calculating the index using indexOf.
// Result: "Nero"

// let lname = FULL_NAME.slice(FULL_NAME.indexOf(" ") + 1);
// 📝 Slices from the first space to the end, capturing the last name "DCD".
// The `+ 1` skips the space between the first and last names.

// console.log(fname);  // Output: "Nero"
// console.log(lname);  // Output: "DCD"

// Example 3

const EMAIL = "github@gmail.com"; // 📧 An email address string

let username = EMAIL.slice(0, EMAIL.indexOf("@"));
// 📝 Slices from the start of the string up to the "@" symbol to extract the username.
// Result: "github"

let extension = EMAIL.slice(EMAIL.indexOf("@") + 1);
// 📝 Slices from the "@" symbol to the end of the string to extract the email domain (e.g., "gmail.com").
// The `+ 1` skips the "@" symbol itself.

console.log(username); // Output: "github"
console.log(extension); // Output: "gmail.com"

// 🎯 Possible Use Cases:
// 1️⃣ Extracting first names and last names from full names by splitting strings at spaces. 👤
// 2️⃣ Separating usernames and domains from email addresses (e.g., extracting "username" from "username@example.com"). 📧
// 3️⃣ Trimming extra characters from file names or URLs (e.g., removing file extensions like ".jpg"). 🗂️
// 4️⃣ Extracting specific sections of a URL (e.g., getting the path or query parameters). 🌐
// 5️⃣ Displaying only the initials of a name by slicing the first letters of each part. ✂️
// 6️⃣ Customizing content output (e.g., showing only part of a product description). 🛒
// 7️⃣ Parsing log files or data strings to extract meaningful chunks (e.g., error messages). 📝
// 8️⃣ Generating short previews or snippets from longer texts (e.g., showing a summary of an article). 📄
// 9️⃣ Validating or extracting data from structured formats like date or time strings (e.g., getting the month from "2024-09-15"). 📅
// 🔟 Manipulating user-generated content (e.g., censoring or masking sensitive parts of a string). 🚫