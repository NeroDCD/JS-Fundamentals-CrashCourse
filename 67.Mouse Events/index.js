// 67. Learn JavaScript MOUSE EVENTS

// 🎧 eventListener = Listen for specific events to create interactive web pages

// 🖲️ click: Fired when a user clicks on an element (e.g., button clicks, link clicks). 👉

// 🖱️ mouseover: Triggered when the mouse pointer hovers over an element
// (e.g., highlighting buttons when the mouse passes over). 🖱️✨

// 🐭 mouseout: Triggered when the mouse pointer leaves an element
// (e.g., stopping the highlight effect when the mouse moves away). 🐾🚶

// 🎛️ .addEventListener(event, callback): Attaches an event listener to an element that
// listens for specific events (e.g., clicks, hovers) and runs the provided function (callback) when the event occurs. 🔄

// // 1️⃣ Example 1 (Change Color on Click)
// // 🖲️  This example demonstrates how to change the background color and text of an element
// // when it is clicked. The 'changeColor' function handles the click event and applies styles. 🖲️

// const myBox = document.getElementById("myBox");

// function changeColor(event) {
//   // 📜 Logs the event object to the console (optional for debugging)
//   // console.log(event);
//   // 🔴 Change the background color and text when the element is clicked
//   event.target.style.backgroundColor = "tomato"; // 🔴 Change background to tomato
//   event.target.textContent = "OUCH! 🤥"; // 🖍️ Update text content
//   event.target.style.color = "#011720"; // 🎨 Change text color
// }

// // Attach the click event listener to the myBox element
// myBox.addEventListener("click", changeColor);

// // 2️⃣ Example 2 (Anonymous Function for Click Event)
// // 🔄 This example uses an anonymous function to achieve the same effect as Example 1.
// // It directly changes styles without declaring a separate function. 🔄

// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", function (event) {
//   // 🔴 Change styles directly in the anonymous function
//   event.target.style.backgroundColor = "tomato"; // 🔴 Change background to tomato
//   event.target.textContent = "OUCH! 🤥"; // 🖍️ Update text content
//   event.target.style.color = "#011720"; // 🎨 Change text color
// });

// // 3️⃣ Example 3 (Arrow Function for Click Event)
// // ✨ This example demonstrates the use of an arrow function to handle the click event.
// // It achieves the same outcome as previous examples using a concise syntax. ✨

// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato"; // 🔴 Change background to tomato
//   event.target.textContent = "OUCH! 🤥"; // 🖍️ Update text content
//   event.target.style.color = "#011720"; // 🎨 Change text color
// });

// // 4️⃣ Example 4 (Multiple Event Listeners)
// // 🎉 This example showcases how to use multiple event listeners on the same element.
// // It changes styles based on mouse events (click, mouseover, mouseout). 🎉

// const myBox = document.getElementById("myBox");

// // Event listener for click event
// myBox.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato"; // 🔴 Change background to tomato
//   event.target.textContent = "OUCH! 🤥"; // 🖍️ Update text content
//   event.target.style.color = "#011720"; // 🎨 Change text color
// });

// // Event listener for mouseover event
// myBox.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "#eeb310"; // 🟡 Change background on hover
//   event.target.textContent = "Don't do it 😬"; // 🖍️ Update text content
//   event.target.style.color = "#011720"; // 🎨 Change text color
// });

// // Event listener for mouseout event
// myBox.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "#001e2b"; // 🔵 Change background when mouse leaves
//   event.target.textContent = "Click Me 👈"; // 🖍️ Update text content
//   event.target.style.color = "#ffffff"; // 🎨 Change text color
// });

// 5️⃣ Example 5 (Button Click Interaction)
// 🔘 This example adds event listeners to a button to change the styles of myBox.
// Clicking the button triggers color changes and updates the text content. 🔘

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// Event listener for button click
myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato"; // 🔴 Change myBox background to tomato
  myBox.textContent = "OUCH!🤥"; // 🖍️ Update text content
  myBox.style.color = "#011720"; // 🎨 Change text color
});

// Event listener for mouseover on button
myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "#eeb310"; // 🟡 Change myBox background on button hover
  myBox.textContent = "Don't do it😬"; // 🖍️ Update text content
  myBox.style.color = "#011720"; // 🎨 Change text color
});

// Event listener for mouseout on button
myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "#001e2b"; // 🔵 Change myBox background when mouse leaves button
  myBox.textContent = "Click the Button👈"; // 🖍️ Update text content
  myBox.style.color = "#ffffff"; // 🎨 Change text color
});

// 🧠 Simple Analogy 🧠
// 🖱️ Think of mouse events like a conversation between you and a box.
// 💬 When you click or hover, it's like talking to the box, and it responds with color changes and messages.
// 🤔 Just as you might react differently depending on how someone interacts with you, the box changes based on mouse actions.

// 🎯 Possible Use Cases:
// 1️⃣ Interactive Buttons 🔲: Make buttons change color or text on hover/click to enhance user interaction.
// 2️⃣ Navigation Menus 📚: Create dropdown menus that expand or change style on hover events.
// 3️⃣ Image Galleries 🖼️: Implement hover effects on images to highlight or zoom in/out.
// 4️⃣ Games 🎮: Handle user inputs like clicks or mouse movements for gameplay interactions.
// 5️⃣ Form Elements 📝: Provide feedback for input fields, like changing colors when focused or validated.
// 6️⃣ Tutorials 🎓: Use mouse events to guide users through a process with visual cues and prompts.
// 7️⃣ Shopping Carts 🛒: Change item appearance in a cart on hover or click for better UX.
// 8️⃣ Animations 🎆: Trigger animations when users interact with elements on the page.
// 9️⃣ Loading Indicators ⏳: Change element styles while waiting for data to load, improving user experience.
// 🔟 Data Visualization 📊: Highlight data points on mouse hover to provide more information.
