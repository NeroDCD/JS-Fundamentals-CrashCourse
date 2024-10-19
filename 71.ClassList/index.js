// 71. Learn the JavaScript classList Property

// 🎨 classList = Element property in JavaScript used to interact with an element's list of classes (CSS classes).
// 🔗 Allows you to make reusable classes for many elements across your webpage.

// 🛠️ Key Methods:
// - add(): ➕ Adds one or more classes to the element.
// - remove(): ➖ Removes one or more classes from the element.
// - toggle(): 🔄 Removes the class if it's present, adds it if it's not.
// - replace(oldClass, newClass): 🔁 Replaces an existing class with a new one.
// - contains(): 🔍 Checks if the element contains a specific class.

// // 1️⃣ Example 1 (Add and Remove Classes)
// // ➕ Adds a class to the button ("enabled") to modify its appearance.
// // and remove the class later to undo that change.

// const myButton = document.getElementById("myButton");

// // add():
// myButton.classList.add("enabled"); // ➕ Adds the "enabled" class

// // remove()
// // myButton.classList.remove("enabled"); // ➖ Removes the "enabled" class

// // 2️⃣ Example 2 (Toggle Classes with Hover Effects)
// // 🔄 The class "hover" is added when you move your mouse over the button,
// // and it's removed when the mouse moves away, creating a hover effect.

// const myButton = document.getElementById("myButton");

// // toggle(): Adds/removes the "hover" class when hovering in/out
// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover"); // 🔄 Toggles the "hover" class
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover"); // 🔄 Toggles the "hover" class back
// });

// // 3️⃣ Example 3 (Checking and Replacing Classes)
// // 🔍 Checks if the button has the class "disabled." If it does, an emoji is added. Otherwise,
// // it replaces the "enabled" class with "disabled."

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled"); // ➕ Adds the "enabled" class

// myButton.addEventListener("click", (event) => {
//   // contains()
//   if (event.target.classList.contains("disabled")) {
//     // 🔍 Checks if "disabled" is present
//     event.target.textContent += "😎"; // 😎 Adds an emoji if "disabled" is found
//   } else {
//     // replace()
//     event.target.classList.replace("enabled", "disabled"); // 🔁 Replaces "enabled" with "disabled"
//   }
// });

// // 4️⃣ Example 4 (Interacting with an H1 Element)
// // 🔁 Similar to Example 3, but this time with an <h1> element. When clicked, the class is replaced,
// and an emoji is added if "disabled" is present.

// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled"); // ➕ Adds "enabled" class

// myH1.addEventListener("click", (event) => {
//   // contains()
//   if (event.target.classList.contains("disabled")) {
//     // 🔍 Checks for "disabled"
//     event.target.textContent += "😎"; // 😎 Adds an emoji if "disabled"
//   } else {
//     // replace()
//     event.target.classList.replace("enabled", "disabled"); // 🔁 Replaces "enabled" with "disabled"
//   }
// });

// 5️⃣ Example 5 (Handling Multiple Buttons with Class Changes)
// 🖱️ Adds the "enabled" class to a group of buttons. On hover, the "hover" class is toggled,
// and clicking will replace the "enabled" class with "disabled."

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled"); // ➕ Adds "enabled" to each button
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover"); // 🔄 Toggles "hover" on mouseover
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover"); // 🔄 Toggles "hover" back on mouseout
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      // 🔍 Checks for "disabled"
      event.target.textContent += "😀"; // 😁 Adds an emoji if "disabled"
    }
    event.target.classList.replace("enabled", "disabled"); // 🔁 Replaces "enabled" with "disabled"
  });
});

// 🧠 Simple Analogy 🧠
// 🎽 Think of the `classList` property like a wardrobe closet full of outfits (classes).
// ➕ When you use `add()`, it's like adding a new shirt to your outfit. 🧥
// ➖ When you use `remove()`, it's like taking a jacket off. 🧢
// 🔄 `toggle()` is like deciding whether to wear a hat depending on the weather. 🎩
// 🔁 `replace()` is swapping your old shirt for a new one. 👕
// 🔍 `contains()` is checking if you're already wearing a certain piece of clothing. 👗

// 🎯 Possible Use Cases:
// 1️⃣ Dynamic Styling 🎨: Add or remove classes to change an element's appearance based on user interaction.
// 2️⃣ Interactive Buttons 🖱️: Highlight buttons when hovering or clicking to enhance user experience.
// 3️⃣ Form Validation ✅: Toggle classes to indicate errors or success based on user input.
// 4️⃣ Animations 💫: Add and remove classes to trigger CSS animations when an event occurs.
// 5️⃣ Dark Mode 🌙: Toggle between light and dark themes by adding/removing classes.
// 6️⃣ Responsive Design 📱: Adjust element styling for different screen sizes dynamically.
// 7️⃣ Game State Changes 🎮: Change the appearance of game elements as players interact with them.
// 8️⃣ Show/Hide Elements 👀: Toggle classes to hide or show content dynamically.
// 9️⃣ Navigation Menus 📜: Toggle active classes on menu items to indicate the current section.
// 🔟 Accessible UI 🧩: Use class changes to highlight or emphasize elements for better accessibility.
