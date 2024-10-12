// 68. Learn JavaScript KEY EVENTS

// 🎧 eventListener = Listen for specific events to create interactive web pages.
// 🌐 Allows your webpage to "listen" for user interactions, like key presses, mouse clicks, etc.

// ⌨️ events: keydown, keyup
// 🔑 'keydown' triggers when a key is pressed down.
// 🔑 'keyup' triggers when the key is released.

// 📄 document.addEventListener(event, callback);
// 🛠️ 'addEventListener' attaches an event handler (callback) to a specific event on the document.

// // 1️⃣ Example 1 (Log Key Presses)
// // 🖱️ This example logs the keys that are pressed and released to the console.
// // 'keydown' logs when the key is pressed, and 'keyup' logs when the key is released. 👇

// document.addEventListener("keydown", (event) => {
//   console.log(`key down = ${event.key}`); // 📜 Logs the key pressed down
// });
// document.addEventListener("keyup", (event) => {
//   console.log(`key up = ${event.key}`); // 📜 Logs the key released
// });

// // 2️⃣ Example 2 (Change Box Content on Key Press)
// // 🖥️ In this example, when a key is pressed, the content and background color of 'myBox' changes.
// // 'keydown' changes the box to show "🙄", and 'keyup' changes it back to "😎". 🎨

// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown", (event) => {
//   myBox.textContent = "🙄"; // 📝 Update text content to show a face while key is pressed
//   myBox.style.backgroundColor = "#00ce58"; // 🎨 Change background to green
// });

// document.addEventListener("keyup", (event) => {
//   myBox.textContent = "😎"; // 📝 Change back to a cool face when the key is released
//   myBox.style.backgroundColor = "#011720"; // 🎨 Revert background color
// });

// 3️⃣ Example 3 (Move Box with Arrow Keys)
// 🕹️ This example uses the arrow keys to move 'myBox' around the page.
// 'keydown' changes the box to show "🙄" and 'keyup' returns it to "😎".
// The box moves in the direction of the arrow key pressed. 🏃

const myBox = document.getElementById("myBox");
const moveAmount = 20; // 🔢 Defines how much the box moves
let x = 0; // 📍 x-axis position
let y = 0; // 📍 y-axis position

document.addEventListener("keydown", (event) => {
  myBox.textContent = "🙄"; // 📝 Show a face while key is pressed
  myBox.style.backgroundColor = "#04552f"; // 🎨 Change background color to dark green
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😎"; // 📝 Change back to a cool face when the key is released
  myBox.style.backgroundColor = "#011720"; // 🎨 Revert background color
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    // ⬆️ Checks if an arrow key was pressed
    event.preventDefault(); // 🛑 Prevents default browser actions like scrolling

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount; // ⬆️ Move box up
        break;
      case "ArrowDown":
        y += moveAmount; // ⬇️ Move box down
        break;
      case "ArrowLeft":
        x -= moveAmount; // ⬅️ Move box left
        break;
      case "ArrowRight":
        x += moveAmount; // ➡️ Move box right
        break;
    }
    myBox.style.top = `${y}px`; // 🔄 Update top position
    myBox.style.left = `${x}px`; // 🔄 Update left position
  }
});

// 🧠 Simple Analogy 🧠
// ⌨️ Think of key events as a remote control for your webpage.
// 💬 When you press a button on the remote (keyboard), the webpage (like the box) responds
// 🎮 by changing colors, moving, or performing some action.
// 📺 Just like using arrow keys to navigate a menu on a TV, you can move elements on the page with key events.

// 🎯 Possible Use Cases:
// 1️⃣ Interactive Games 🎮: Control game characters or objects using keyboard inputs.
// 2️⃣ Form Shortcuts ⌨️: Allow users to navigate or submit forms by pressing certain keys.
// 3️⃣ Navigation Menus 🧭: Use keyboard navigation for dropdown or tab menus.
// 4️⃣ Keyboard Shortcuts 🖥️: Implement custom keyboard shortcuts to improve efficiency.
// 5️⃣ Character Movement 🎬: Move characters or objects in interactive web experiences.
// 6️⃣ Text Editing ✍️: Enable text input manipulation using key events for custom editors.
// 7️⃣ Modal Windows 🖼️: Close modal windows with 'Escape' key or navigate with arrows.
// 8️⃣ Photo Galleries 📷: Navigate through image galleries with left/right arrow keys.
// 9️⃣ Accessibility Features ♿: Make the website more accessible by providing keyboard navigation.
// 🔟 Interactive Animations 🎆: Trigger animations based on key inputs for creative interactions.
