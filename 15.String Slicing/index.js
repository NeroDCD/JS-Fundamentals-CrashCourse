// 15. Learn JavaScript STRING SLICING

// ✂️ String slicing = Creating a substring from a portion of another string.
// 🧩 It extracts parts of a string using the `slice()` method.
// 📌 Syntax: string.slice(start, end)
// - 🟢 start: The index where slicing begins (inclusive).
// - 🔴 end: The index where slicing ends (exclusive).

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

// 🧠 Simple Analogy 🧠
// 📄 String slicing in JavaScript is like using a pair of scissors ✂️ to cut a portion from a larger piece of paper:
// ✂️ `slice()` is like carefully cutting out a specific section, deciding the start and end points.
// ✂️ `slice(0, 4)` is like cutting from the start to a mark at the fourth inch, getting the first part of the text.
// ✂️ `slice(5)` is like cutting from a mark at the fifth inch to the end, leaving you with the rest of the text.
// ✂️ `slice(-1)` is like cutting the last inch of the paper, getting only the last piece.
// ✂️ `slice(0, indexOf(" "))` is like cutting from the start to the first space, extracting the first word.
// ✂️ `slice(indexOf(" ") + 1)` is like cutting from just after the first space to the end, extracting the second word.
// ✂️ The `slice()` method helps you select and cut exactly the part of the string you need, 
// similar to picking and cutting sections from a document.

// 🎯 Possible Use Cases:
// 1️⃣ Extracting names 👤: Splitting full names into first and last names by cutting at spaces.
// 2️⃣ Email parsing 📧: Separating usernames and domains (e.g., extracting "username" from "username@example.com").
// 3️⃣ File trimming 🗂️: Removing file extensions from names (e.g., ".jpg").
// 4️⃣ URL slicing 🌐: Extracting specific sections from URLs (e.g., paths or query parameters).
// 5️⃣ Initials extraction ✂️: Getting initials by slicing the first letters of each name part.
// 6️⃣ Preview customization 🛒: Displaying only part of a product description for summaries.
// 7️⃣ Log parsing 📝: Extracting useful parts from log files (e.g., error messages).
// 8️⃣ Snippet generation 📄: Creating short previews or summaries from long texts (e.g., articles).
// 9️⃣ Date manipulation 📅: Extracting specific parts of dates (e.g., getting the month from "2024-09-15").
// 🔟 Censoring sensitive content 🚫: Masking or hiding parts of user-generated content.