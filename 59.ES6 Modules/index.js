// 59. Learn JavaScript ES6 Modules

// 📦 ES6 Module 📦
// ES6 modules allow you to organize your JavaScript code into separate files and reuse it across different parts of your project.
// A module is just an external file that contains reusable code, like variables, classes, or functions,
// which can be easily imported into other JavaScript files.

// 📝 Key Features of ES6 Modules 📝
// 1️⃣ Exporting: You can define variables, functions, or classes in one file and export them to make them available for use in other files.
// 2️⃣ Importing: Other files can import these exported modules, so you don't need to rewrite the same code again.
// 3️⃣ Scoped to File: The variables and functions inside a module are scoped to the file, which helps avoid naming conflicts between different files.
// 4️⃣ Improves Organization: By splitting code into smaller modules, it makes your project more readable, maintainable, and scalable.

// Example 1: Importing Math Utilities from a Module
// 🔍 This example shows how to import and use exported variables and functions from a separate module called "mathUtil.js".

import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js"; // 📥 Import specific items from mathUtil.js

console.log(PI); // 📏 Logs the value of PI (approximately 3.14)
const circumference = getCircumference(10); // 🌀 Calls the function to calculate the circumference of a circle with radius 10
const area = getArea(10); // 📐 Calls the function to calculate the area of a circle with radius 10
const volume = getVolume(10); // 📦 Calls the function to calculate the volume of a sphere with radius 10

console.log(`${circumference.toFixed(2)}cm`); // 📏 Logs the formatted circumference
console.log(`${area.toFixed(2)}cm²`); // 📐 Logs the formatted area
console.log(`${volume.toFixed(2)}cm³`); // 📦 Logs the formatted volume

// 🧠 Simple Analogy 🧠
// 🧰 Think of ES6 modules like a toolbox. 🔧 Each tool (function or variable) is stored in its own compartment (file), 
// 🌀 making it easier to find and use when needed. 🛠️ Instead of carrying all tools around, 
// 📦 you can just grab the specific ones you need for a task, keeping everything organized and efficient.

// 🎯 Possible Use Cases:
// 1️⃣ Code Organization 📂: Structure complex applications by separating functionalities into distinct modules.
// 2️⃣ Reusable Libraries 📚: Create libraries of utility functions (e.g., math functions, API calls) that can be reused across projects.
// 3️⃣ Team Collaboration 🤝: Enable multiple developers to work on different modules independently without conflicting variable names.
// 4️⃣ Testing 📊: Write tests for specific modules separately, making it easier to identify and fix bugs.
// 5️⃣ Lazy Loading ⏳: Load only the necessary modules when needed to improve initial loading times of applications.
// 6️⃣ Version Control 🔄: Manage versions of individual modules, allowing easier updates without affecting the entire project.
// 7️⃣ Namespace Management 📁: Avoid global variable pollution by encapsulating variables and functions within modules.
// 8️⃣ Framework Development ⚙️: Develop frameworks that provide specific features through modules that can be imported as needed.
// 9️⃣ Dynamic Imports 📥: Use dynamic imports to load modules conditionally based on user interactions or application state.
// 🔟 API Integration 🌐: Create modules to handle different APIs, allowing you to maintain clean and organized code for API calls.
