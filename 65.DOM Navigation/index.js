// 65. Learn JavaScript DOM Navigation

// 🌐 DOM Navigation 🌐
// DOM navigation is the process of navigating through the structure of
// an HTML document using JavaScript to access and manipulate elements.
// This allows for dynamic interaction with web pages by modifying the content and structure.

// 📝 Key Methods for DOM Navigation 📝
// 1️⃣ .firstElementChild: 🏁 Retrieves the first child element of the specified parent element.
// 2️⃣ .lastElementChild: 🚩 Retrieves the last child element of the specified parent element.
// 3️⃣ .nextElementSibling: ➡️ Retrieves the next sibling element that follows the specified element.
// 4️⃣ .previousElementSibling: ⬅️ Retrieves the previous sibling element that precedes the specified element.
// 5️⃣ .parentElement: 👨‍👧‍👦 Retrieves the parent element of the specified child element.
// 6️⃣ .children: 👶 Retrieves a live HTMLCollection of the child elements of the specified parent element.

// ⚠️ Important Note ⚠️
// If there is no previous or next sibling, the respective properties return null,
// which can be handled in your code to avoid errors.

// // 1️⃣ Example 1: Accessing First Child Elements
// // 🔍 This example demonstrates how to retrieve and style the first child of multiple parent elements.

// // Option 1: Directly Accessing Elements
// const elementFruits = document.getElementById("fruits"); // 📥 Get the element with ID "fruits"
// const elementVegetables = document.getElementById("vegetables"); // 📥 Get the element with ID "vegetables"
// const elementDessert = document.getElementById("desserts"); // 📥 Get the element with ID "desserts"

// const firstChildFruits = elementFruits.firstElementChild; // 🌀 Get the first child element of fruits
// const firstChildVegetables = elementVegetables.firstElementChild; // 🌀 Get the first child element of vegetables
// const firstChildDessert = elementDessert.firstElementChild; // 🌀 Get the first child element of dessert

// firstChildFruits.style.backgroundColor = "#ff9452"; // 🎨 Change background color of first child of fruits
// firstChildVegetables.style.backgroundColor = "#78f24b"; // 🎨 Change background color of first child of vegetables
// firstChildDessert.style.backgroundColor = "#af8bfc"; // 🎨 Change background color of first child of dessert

// // Option 2: Using querySelectorAll for Multiple Elements
// const ulElements = document.querySelectorAll("ul"); // 📥 Select all <ul> elements
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild; // 🌀 Get the first child element
//   firstChild.style.backgroundColor = "#ff9452"; // 🎨 Change its background color
// });

// // 2️⃣ Example 2: Accessing Last Child Elements
// // 🔍 This example shows how to retrieve and style the last child of multiple parent elements.

// // Option 1: Directly Accessing the Last Child
// // const element = document.getElementById("fruits"); // 📥 Get the element with ID "fruits"
// // const lastChild = element.lastElementChild; // 🌀 Get the last child element
// // lastChild.style.backgroundColor = "#78f24b"; // 🎨 Change its background color

// // Option 2: Using querySelectorAll for Last Child Access
// const ulElements = document.querySelectorAll("ul"); // 📥 Select all <ul> elements
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild; // 🌀 Get the last child element
//   lastChild.style.backgroundColor = "#ff9452"; // 🎨 Change its background color
// });

// // 3️⃣ Example 3: Accessing Next Sibling Elements
// // 🔍 This example demonstrates how to retrieve and style the next sibling of a specified element.

// // Option 1: Accessing Next Sibling of a List Item
// // const element = document.getElementById("apple"); // 📥 Get the element with ID "apple"
// // const nextSibling = element.nextElementSibling; // 🌀 Get the next sibling element
// // nextSibling.style.backgroundColor = "#ff9452"; // 🎨 Change its background color

// // Option 2: Accessing Next Sibling of a Parent Element
// const element = document.getElementById("fruits"); // 📥 Get the element with ID "fruits"
// const nextSibling = element.nextElementSibling; // 🌀 Get the next sibling element
// nextSibling.style.backgroundColor = "#78f24b"; // 🎨 Change its background color

// // 4️⃣ Example 4: Accessing Previous Sibling Elements
// // 🔍 This example shows how to retrieve and style the previous sibling of a specified element.

// // Option 1: Accessing Previous Sibling of a List Item
// // const element = document.getElementById("orange"); // 📥 Get the element with ID "orange"
// // const prevSibling = element.previousElementSibling; // 🌀 Get the previous sibling element
// // prevSibling.style.backgroundColor = "#af8bfc"; // 🎨 Change its background color

// // Option 2: Accessing Previous Sibling of a Parent Element
// const element = document.getElementById("vegetables"); // 📥 Get the element with ID "vegetables"
// const prevSibling = element.previousElementSibling; // 🌀 Get the previous sibling element
// prevSibling.style.backgroundColor = "#af8bfc"; // 🎨 Change its background color

// 5️⃣ Example 5: Accessing Parent Elements
// 🔍 This example demonstrates how to retrieve and style the parent of specified child elements.

// // Option 1: Accessing Parent of a Specific Child Element
// const element1 = document.getElementById("apple"); // 📥 Get the element with ID "apple"
// const parent1 = element1.parentElement; // 🌀 Get the parent element
// parent1.style.backgroundColor = "#ff9452"; // 🎨 Change its background color

// // Option 2: Accessing Parent of Another Child Element
// const element2 = document.getElementById("potatoes"); // 📥 Get the element with ID "potatoes"
// const parent2 = element2.parentElement; // 🌀 Get the parent element
// parent2.style.backgroundColor = "#78f24b"; // 🎨 Change its background color

// // Option 3: Accessing Parent of a Different Child Element
// const element3 = document.getElementById("cake"); // 📥 Get the element with ID "cake"
// const parent3 = element3.parentElement; // 🌀 Get the parent element
// parent3.style.backgroundColor = "#af8bfc"; // 🎨 Change its background color

// 6️⃣ Example 6: Accessing Child Elements
// 🔍 This example demonstrates how to retrieve and style child elements of a specified parent element.

// Accessing Children of a Specified Parent Element
const element = document.getElementById("fruits"); // 📥 Get the element with ID "fruits"
const children = element.children; // 🌀 Retrieve the child elements

// Return HTML Collections
// console.log(children); // 🔍 Logs the HTMLCollection of children

// Iterating Over Child Elements and Applying Styles
// Array.from(children).forEach((child) => { // 🔄 Convert children to array and iterate
//   child.style.backgroundColor = "#af8bfc"; // 🎨 Change each child's background color
// });

// Accessing a Specific Child by Index
children[1].style.backgroundColor = "#af8bfc"; // 🎨 Change the background color of the second child

// 🧠 Simple Analogy 🧠
// 🌳 Think of the DOM like a family tree. Each element is a family member,
// 🏡 where parents, children, and siblings create a structure you can navigate through.
// You can reach any member in this family tree using specific methods, making interaction easy and efficient.

// 🎯 Possible Use Cases:
// 1️⃣ Interactive Web Applications 📲: Enhance user interaction by dynamically modifying the DOM.
// 2️⃣ Real-Time Data Updates ⏰: Update elements on the page without reloading, improving user experience.
// 3️⃣ Form Validation ✅: Access and manipulate form elements for real-time validation feedback.
// 4️⃣ Dynamic Content Loading 📥: Load and display new content based on user actions.
// 5️⃣ Event Handling 🔔: Attach event listeners to elements for interactive functionalities.
// 6️⃣ UI Component Libraries 📚: Create reusable components that navigate the DOM for rendering.
// 7️⃣ Animation Effects 🎇: Manipulate DOM elements to create smooth animations and transitions.
// 8️⃣ Responsive Designs 📐: Adjust layouts based on the viewport or user interactions.
// 9️⃣ Content Management Systems 📝: Dynamically manage and update content displayed on the page.
// 🔟 Single Page Applications 🌍: Efficiently navigate and update the DOM for a seamless user experience.
