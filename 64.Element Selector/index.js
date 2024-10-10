// 64. Learn JavaScript ELEMENT SELECTORS 🌟

// 🌟 Element selectors are methods used to target and manipulate HTML elements.
// These methods allow you to select one or multiple HTML elements from the DOM (Document Object Model)
// to interact with them in JavaScript.

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsByClassName()         // HTML COLLECTION
// 3. document.getElementsByTagName()           // HTML COLLECTION
// 4. document.querySelector()                  // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST

// // 1️⃣ Example 1: document.getElementById()
// // 🔹 Selects an element by its unique ID
// // 🔹 Returns: The element or null if not found

// const myHeading = document.getElementById("my-heading"); // 🟡 Finds the element with ID "my-heading"
// myHeading.style.backgroundColor = "yellow"; // 🟡 Changes its background color to yellow
// myHeading.style.textAlign = "center"; // 🟡 Centers the text
// console.log(myHeading); // 🟡 Logs the element to the console

// // 2️⃣ Example 2: document.getElementsByClassName()
// // 🔹 Selects all elements with a given class name
// // 🔹 Returns: An HTMLCollection (array-like object)

// const fruits = document.getElementsByClassName("fruits"); // 🍊 Selects all elements with the class "fruits"

// // Option 1: Using Index
// // fruits[0].style.backgroundColor = "Red"; // 🍓 Changes the background color of the first element to red
// // fruits[1].style.backgroundColor = "Orange"; // 🍊 Changes the background color of the second element to orange
// // fruits[2].style.backgroundColor = "Violet"; // 🍇 Changes the background color of the third element to violet

// // Option 2: Using a for loop
// // for (let fruit of fruits) {
// //     fruit.style.backgroundColor = "Violet"; // 🍇 Changes the background color of all elements to violet
// // }

// // Option 3: Typecasting to an array and using forEach
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "violet"; // 🍇 Converts the collection to an array and sets the background to violet
// });

// // 3️⃣ Example 3: document.getElementsByTagName()
// // 🔹 Selects all elements with a specified tag name (e.g., 'div', 'p')
// // 🔹 Returns: An HTMLCollection

// const h4Elements = document.getElementsByTagName("h4"); // 📝 Selects all <h4> elements
// const liElements = document.getElementsByTagName("li"); // 📋 Selects all <li> elements

// // Option 1: Using Index (for <h4> elements)
// // h4Elements[0].style.backgroundColor = "Yellow"; // 🟡 Changes the background color of the first <h4> to yellow
// // h4Elements[1].style.backgroundColor = "Yellow"; // 🟡 Changes the background color of the second <h4> to yellow

// // Option 2: Using a for loop for <h4> elements
// // for (let h4Element of h4Elements) {
// //   h4Element.style.backgroundColor = "Yellow"; // 🟡 Loops over all <h4> elements and sets the background to yellow
// // }

// // Typecasting for <h4> and <li> elements and using forEach
// // Array.from(h4Elements).forEach((h4Element) => {
// //   h4Element.style.backgroundColor = "Yellow"; // 🟡 Converts the collection to an array and sets the background to yellow
// // });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "LightGreen"; // 🟢 Converts the collection to an array and sets the background to light green
// });

// // 4️⃣ Example 4: document.querySelector()
// // 🔹 Selects the first element that matches a CSS selector (e.g., '.class', '#id')
// // 🔹 Returns: The first matching element or null if none found

// const element = document.querySelector(".fruits"); // 🍎 Selects the first element with the class "fruits"
// element.style.backgroundColor = "yellow"; // 🟡 Changes its background color to yellow

// // You can also select elements by tag name, like "h4", "li", or "ul"
// // const element = document.querySelector("h4");
// // element.style.backgroundColor = "violet"; // 🍇 Changes the background of the first <h4> to violet

// // const element = document.querySelector("li");
// // element.style.backgroundColor = "orange"; // 🍊 Changes the background of the first <li> to orange

// 5️⃣ Example 5: document.querySelectorAll()
// 🔹 Selects all elements that match a CSS selector
// 🔹 Returns: A NodeList (similar to an array, but not an array)

const foods = document.querySelectorAll("li"); // 🍽️ Selects all <li> elements

// Using forEach to apply styles to all selected elements
foods.forEach((food) => {
  food.style.backgroundColor = "Yellow"; // 🟡 Changes the background color of each <li> to yellow
});

// 🧠 Simple Analogy 🧠
// 🌳 Imagine the DOM as a tree where each element is a leaf. Element selectors act as your tools
// to pick out specific leaves. Whether you're picking one leaf by its ID or gathering a whole bunch by their class name,
// these methods help you "grab" elements from the tree and change them however you like.

// 🎯 Possible Use Cases:
// 1️⃣ Highlighting Elements 🔦: Apply styles to elements dynamically based on their IDs, classes, or tags.
// 2️⃣ Form Manipulation ✏️: Target specific form fields by their ID or class to update values or add validation.
// 3️⃣ Navigation Menus 📂: Use selectors to dynamically add styles or behavior to menu items on hover or click.
// 4️⃣ Real-time Data Display 📊: Dynamically update the content of elements to display live data from an API.
// 5️⃣ Animations 🎨: Trigger animations by selecting and applying styles to elements when an event occurs.
// 6️⃣ Interactive UI 💡: Build dynamic interfaces where elements appear, disappear, or change based on user input.
// 7️⃣ Class-Based Styling 🎨: Select multiple elements with a class name to apply consistent styles across the page.
// 8️⃣ Templating 🧩: Dynamically clone, modify, and insert elements into the page using selectors.
// 9️⃣ Responsive Design 📱: Select elements to modify layout or content based on the device size or orientation.
// 🔟 Event-Driven Interaction 🎟️: Attach event listeners to selected elements to make the page interactive.
