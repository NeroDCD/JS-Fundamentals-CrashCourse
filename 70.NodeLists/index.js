// 70. What are NodeLists in JavaScript?

// 🌐 NodeList = A static collection of HTML elements selected by (id, class, or element type).
// 🔍 Can be created using `querySelectorAll()`.
// 📋 Similar to an array, but lacks methods like (map, filter, reduce).
// 🔄 NodeList won't automatically update to reflect changes in the DOM.

// 🧑‍🏫 NodeLists are collections of nodes (elements) in the document.
// 🌱 They are static, meaning once created, they don’t automatically reflect changes in the DOM.
// 🔎 This makes them useful for getting a snapshot of elements at a specific time.

// // 1️⃣ Example 1 (Styling All Buttons)
// // 🎨 In this example, we select all buttons with the class "myButton" and change their background color to "Tomato".
// // 🔄 Each button's text is also updated to include a sleepy face emoji.

// let buttons = document.querySelectorAll(".myButton"); // 📋 Select all buttons with class 'myButton'

// // Iterate through each button in the NodeList
// buttons.forEach((button) => {
//   button.style.backgroundColor = "Tomato"; // 🎨 Change background color
//   button.textContent += " 😴"; // 💤 Add a sleepy face emoji to the button text
// });

// // 2️⃣ Example 2 (Interactive Button Effects)
// // 🎉 Here, we add event listeners to each button to change its background color on click and hover.
// // ✨ The buttons will change colors on mouseover and revert back on mouseout.

// let buttons = document.querySelectorAll(".myButton"); // 📋 Select all buttons

// // Add click event listener to change background color to "Tomato"
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "Tomato"; // 🎨 Change background color on click
//   });
// });

// // Add mouseover event listener to change background color on hover
// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "#0d1d68"; // 🌊 Change background color on hover
//   });
// });

// // Add mouseout event listener to revert background color
// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "#0f2db3"; // 🔵 Revert background color when not hovering
//   });
// });

// // 3️⃣ Example 3 (Adding a New Button)
// // 🔄 In this example, we create a new button, add it to the document, and then log the updated NodeList.
// // 🆕 This demonstrates how NodeLists do not automatically update to include newly added elements.

// let buttons = document.querySelectorAll(".myButton"); // 📋 Select existing buttons

// const newButton = document.createElement("button"); // ✨ Create a new button
// newButton.textContent = "Button 5"; // 🔢 Set button text
// newButton.classList = "myButton"; // 🌟 Assign class to new button
// document.body.appendChild(newButton); // 🏗️ Add the new button to the document

// // Re-select buttons to update NodeList
// buttons = document.querySelectorAll(".myButton"); // 📋 Now includes the new button
// console.log(buttons); // 📃 Log the updated NodeList

// 4️⃣ Example 4 (Removing Buttons)
// ❌ This example demonstrates removing buttons from the DOM and how it affects the NodeList.
// 🔍 After removing a button, we reselect the NodeList to see the changes.

let buttons = document.querySelectorAll(".myButton"); // 📋 Select all buttons

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove(); // ❌ Remove the clicked button

    // Remove the buttons from NodeList
    buttons = document.querySelectorAll(".myButton"); // 📋 Reselect buttons
    console.log(buttons); // 📃 Log the updated NodeList after removal
  });
});

// 🧠 Simple Analogy 🧠
// 🗂️ Think of a NodeList like a folder containing files (elements).
// 📁 Once you open the folder, you see the files inside, but if you add or remove files later, the opened folder doesn’t update automatically.
// 🔄 You need to reopen or refresh it to see the changes!

// 🎯 Possible Use Cases:
// 1️⃣ Batch Element Styling 🎨: Change the style of multiple elements at once, like changing button colors.
// 2️⃣ Event Listeners Setup 📅: Attach events to multiple elements simultaneously for interactivity.
// 3️⃣ Dynamic Content Update 📄: Handle changes to a set of elements without reloading the page.
// 4️⃣ Form Handling 📝: Manage groups of inputs in a form for validation or submission.
// 5️⃣ Image Galleries 🖼️: Control a collection of images for effects like slideshows or filtering.
// 6️⃣ Navigation Menus 📜: Manipulate menu items in a navigation bar dynamically.
// 7️⃣ Game Elements 🎮: Manage game pieces or actions for multiple objects on screen.
// 8️⃣ Content Management 📚: Update displayed articles or sections based on user interactions.
// 9️⃣ Responsive Design 📱: Adapt UI components for various screen sizes with ease.
// 🔟 Animations 🎊: Apply animations to groups of elements for coordinated effects.
