// 63. JavaScript DOM (Document Object Model)

// 📄 The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of a web page in a 🌳 tree-like format, where each element,
// attribute, and piece of text is represented as an object 🔑. JavaScript provides methods to interact with these objects,
// 🛠️ allowing you to dynamically change the content, 🏗️ structure, and style of the web page as needed.
// 🌐 The DOM is created by the web browser when it loads an HTML document.

// // 1️⃣ Example 1: Changing Document Title and Background Color
// // 🏷️ This example demonstrates how to modify the title of the web page and change the background color using the DOM.

// document.title = "My Website"; // 📝 Sets the title of the document to "My Website"
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; // 🎨 Changes the background color of the body to a dark shade

// console.dir(document); // 🖥️ Displays the DOM tree structure of the document in the console for inspection

// 2️⃣ Example 2: Personalizing a Welcome Message
// 🎉 This example shows how to update a welcome message based on the user's username.

const username = "NeroDCD"; // 👤 This variable holds the username
const welcomeMsg = document.getElementById("welcome-msg"); // 🔍 Fetches the element with ID "welcome-msg"

// 🔤 Updates the welcome message. If the username is empty, it defaults to "Guest"; otherwise, it displays the username
welcomeMsg.textContent += username === "" ? `Guest` : username; // 📝 Output: "Welcome NeroDCD"

// 🧠 Simple Analogy 🧠
// 🌍 Think of the DOM as the blueprint of a house (the webpage). Just like you can change the layout,
// paint the walls, and decorate rooms in a house, you can use JavaScript to modify the elements,
// styles, and structure of the web page represented by the DOM. Each room represents a different part of the page,
// and you can easily rearrange or update them as needed.

// 🎯 Possible Use Cases:
// 1️⃣ Dynamic Content Updates 🔄: Modify webpage content in real-time based on user actions or events.
// 2️⃣ Form Validation ✔️: Validate and display error messages for user input in forms dynamically.
// 3️⃣ Event Handling 🎟️: Attach event listeners to elements to respond to user interactions, like clicks and keystrokes.
// 4️⃣ Animations 🎨: Use the DOM to create animations by manipulating element styles and attributes over time.
// 5️⃣ User Interface Updates 🔄: Change UI elements based on conditions, such as hiding/showing sections or loading new content.
// 6️⃣ Responsive Design 📱: Adjust layouts and styles dynamically based on screen size or orientation changes.
// 7️⃣ Data Fetching and Display 📊: Fetch data from APIs and update the DOM to display new information without reloading the page.
// 8️⃣ Interactive Games 🎮: Create interactive game elements by manipulating the DOM based on player actions.
// 9️⃣ Content Management Systems (CMS) 🗂️: Build dynamic websites that allow users to create, edit, and manage content easily.
// 🔟 Real-time Notifications 🔔: Display real-time updates or notifications to users without needing to refresh the page.
