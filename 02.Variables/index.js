// 02. JavaScript VARIABLES

// 1. Declaration
// 📜 Declaring a variable with let
// let x;

// 2. Assignment
// 🎯 Assigning the value 100 to the variable x
// x = 100;

// Numbers
// 🔢 Declare variables of different number types
// let age = 29; // Integer
// let price = 69.99; // Floating-point number
// let gpa = 2.1; // Floating-point number

// // Logging the variables to the console
// console.log(age); // Logs the age
// console.log(price); // Logs the price
// console.log(gpa); // Logs the GPA
// console.log(`You are ${age} years old`); // Logs a message with age
// console.log(`The price is $${price}`); // Logs a message with price
// console.log(`Your GPA is: ${gpa}`); // Logs a message with GPA

// String
// 🔠 Declare string variables
// let fname = "Nero"; // First name
// let favoriteApp = "Figma"; // Favorite application
// let email = "github@gmail.com"; // Email address

// Logging string variables to the console
// console.log(typeof fname); // Logs the type of fname (string)
// console.log(`Your name is ${fname}`); // Logs a message with the name
// console.log(`You like ${favoriteApp}`); // Logs a message with the favorite app
// console.log(`Your Email is ${email}`); // Logs a message with the email

// Boolean
// ✅ Declare boolean variables
// let online = false; // Online status
// let forSale = true; // Sale status
// let isStudent = true; // Enrollment status

// Logging boolean variables to the console
// console.log(`Bro is Online: ${online}`); // Logs a message with online status
// console.log(`Is this car for sale: ${forSale}`); // Logs a message with sale status
// console.log(`Enrolled: ${isStudent}`); // Logs a message with enrollment status

// Updating HTML content
// 📝 Set the text content of HTML elements with ID "p1", "p2", and "p3"
let fname = "NeroDCD"; // Updated first name
let age = 44; // Updated age
let isStudent = false; // Updated enrollment status

document.getElementById("p1").textContent = `Your name is ${fname}`; // Updates the text content of the element with ID "p1"
document.getElementById("p2").textContent = `You are ${age} years old`; // Updates the text content of the element with ID "p2"
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`; // Updates the text content of the element with ID "p3"

// 🎯 Possible Use Cases:
// 1️⃣ Storing Values: Use variables to store data such as numbers, strings, or booleans for use in calculations, conditions, or messages (e.g., storing user input, configuration settings).
// 2️⃣ Dynamic Content: Update HTML elements with variable values to display dynamic content on web pages (e.g., showing user profiles, updating page content based on interactions).
// 3️⃣ Data Manipulation: Perform operations on variable values to manipulate or calculate data (e.g., updating scores, adjusting prices, calculating totals).
// 4️⃣ Type Checking: Use variables to work with different data types and ensure that data is handled appropriately (e.g., checking variable types with `typeof` for debugging or validation).
// 5️⃣ State Management: Track and manage application state using boolean variables to control features or behaviors (e.g., managing online status, sale status, or user enrollment).
