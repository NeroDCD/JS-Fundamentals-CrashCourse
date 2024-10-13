// 69. How to HIDE and SHOW HTML using JavaScript

// 👀 You can control the visibility of HTML elements dynamically using JavaScript.
// 🎛️ By using event listeners like "click," you can make elements appear or disappear, creating a more interactive experience.
// 🎯 Common methods: 'visibility' and 'display'.
// 🔍 'visibility' controls whether an element is visible but keeps its layout intact.
// 🎯 'display' completely removes or shows the element from the layout.

// 1️⃣ Example 1 (Toggle Visibility of an Image)
// 🖼️ This example toggles the visibility of an image by changing the `visibility` CSS property.
// 🔄 When the button is clicked, it hides the image if visible or shows it if hidden, updating the button text accordingly.

const myButton = document.getElementById("myButton"); // 🖱️ Button to toggle the image's visibility
const myImg = document.getElementById("myImg"); // 🖼️ Image that will be hidden or shown

myButton.addEventListener("click", (event) => {
  // 📥 Listen for a button click event
  if (myImg.style.visibility === "hidden") {
    // 🔍 If the image is currently hidden...
    myImg.style.visibility = "visible"; // 👁️ Make it visible
    myButton.textContent = "Hide"; // 🔄 Change the button text to "Hide"
  } else {
    // 👁️ If the image is visible...
    myImg.style.visibility = "hidden"; // 🔍 Hide the image
    myButton.textContent = "Show"; // 🔄 Change the button text to "Show"
  }
});

// 🧠 Simple Analogy 🧠
// 🎬 Think of this like curtains on a stage.
// 🖼️ When you press the button, it's like pulling the curtains back (showing the image) or drawing them closed (hiding the image).
// 🎭 The button simply decides whether the "scene" (image) is visible to the audience (user) or hidden from view. 🎟️

// 🎯 Possible Use Cases:
// 1️⃣ Show/Hide Passwords 🔐: Toggle visibility of password input fields to improve user experience.
// 2️⃣ FAQ Sections ❓: Show and hide answers to frequently asked questions for a cleaner design.
// 3️⃣ Image Galleries 📸: Show or hide images based on user interaction to save screen space.
// 4️⃣ Navigation Menus 🗂️: Show or collapse dropdown or hamburger menus when clicked.
// 5️⃣ Modal Windows 🖼️: Open and close modal popups for displaying important information.
// 6️⃣ Product Descriptions 🛍️: Hide or reveal extra product details in e-commerce applications.
// 7️⃣ Read More Buttons 📖: Toggle between showing a preview and the full content of an article.
// 8️⃣ Form Sections 📝: Show additional form fields dynamically based on user inputs.
// 9️⃣ Notifications Alerts 📬: Hide or show notification messages based on user actions.
// 🔟 Interactive Quizzes 🎓: Show and hide quiz questions or results for an engaging experience.
