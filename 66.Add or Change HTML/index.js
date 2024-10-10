// 66. ADD/CHANGE HTML using JavaScript ✍️

// 📜 JavaScript can dynamically modify the HTML content of a webpage
// by adding, changing, or removing elements. This is useful for creating interactive web applications
// where the content updates in real-time without reloading the page.

// 1️⃣ Example 1: Add and Modify a Heading 🖋️
// ✨ This example shows how to create, modify, and insert an HTML element dynamically using JavaScript.

// 1️⃣ STEP 1: CREATE THE ELEMENT
// 👉 Create a new HTML element using document.createElement('tagName').

// const newH1 = document.createElement("h1");

// 2️⃣ STEP 2: ADD ATTRIBUTES/PROPERTIES
// 👉 Set attributes or content of the element using setAttribute(), innerHTML, or textContent.

// newH1.textContent = "I Like Github";
// newH1.id = "myH1";
// newH1.style.color = "#71f6ba";
// newH1.style.textAlign = "center";

// 3️⃣ STEP 3: APPEND ELEMENT TO DOM
// 👉 Use parentElement.appendChild(newElement) to add it to the desired part of the webpage.
// ✨ Append: Adds the element as the last child.
// ✨ Prepend: Adds the element as the first child.
// ✨ insertBefore: Inserts the element before a specified element.

// // 🟢 Append to body:
// document.body.append(newH1);

// // 🟢 Prepend to body:
// document.body.prepend(newH1);

// // 🟢 Append to a specific section (box1):
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// // 🟢 Insert before another element:
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// // 🟢 Insert before the first element in a group:
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// 4️⃣ REMOVE HTML ELEMENT
// 👉 Use parentElement.removeChild(element) or element.remove() to remove an element.

// // 🟡 Remove from the body:
// document.body.append(newH1);
// document.body.removeChild(newH1);

// // 🟡 Remove from a specific section:
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);

// 2️⃣ Example 2: Add a List Item 📝
// 🍑 This example adds a new item to a list and demonstrates various ways to place it within the list.

// 1️⃣ STEP 1: CREATE THE ELEMENT
const newListItem = document.createElement("li");

// 2️⃣ STEP 2: ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "🍑 Peach";
newListItem.id = "peach";
newListItem.style.fontWeight = "bold";
newListItem.style.color = "White";

// // 3️⃣ STEP 3: APPEND ELEMENT TO DOM
// // 🟢 Prepend to the list:
// document.getElementById("fruits").prepend(newListItem);

// // 🟢 Append to the list:
// document.getElementById("fruits").append(newListItem);

// // 🟢 Insert before another list item (orange):
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// // 🟢 Insert before the second list item:
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// 4️⃣ REMOVE HTML ELEMENT
// 🟡 Remove from the list:
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").removeChild(newListItem);

// 🧠 Simple Analogy 🧠
// 🏗️ Imagine building a webpage like assembling a toy. You pick a piece (createElement),
// 🎨 give it color and a label (attributes), then decide where to place it (append, prepend, insertBefore).
// ❌ If you no longer need a piece, you can remove it (removeChild).

// 🎯 Possible Use Cases:
// 1️⃣ Dynamic Content Loading 📥: Load new articles or sections on a webpage dynamically.
// 2️⃣ Interactive Web Apps 🖱️: Add interactive elements like buttons or forms without reloading the page.
// 3️⃣ Real-Time Updates ⏱️: Update parts of a page with live data, like live scores or stock prices.
// 4️⃣ Form Validation ✅: Add or change form elements based on user input or selection.
// 5️⃣ User Interface Changes 🎨: Modify the UI on the fly based on user interactions.
// 6️⃣ Custom Modals and Popups 📊: Dynamically add or remove modals, tooltips, or notifications.
// 7️⃣ Adding Animation Elements 🎬: Create and append animated elements to enhance visual feedback.
// 8️⃣ Shopping Cart 🛒: Add or remove items from a virtual shopping cart in e-commerce websites.
// 9️⃣ Game UI 🎮: Dynamically adjust game elements like scoreboards, timers, or player statistics.
// 🔟 Responsive Layouts 📐: Dynamically change content based on screen size or user preferences.
