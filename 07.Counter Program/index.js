// 07. JavaScript COUNTER PROGRAM

// 🔗 Get the HTML elements by their IDs and assign them to variables
const decreaseBtn = document.getElementById("decreasedBtn"); // 🔽 Button to decrease the count
const resetBtn = document.getElementById("resetBtn");        // 🔄 Button to reset the count
const increaseBtn = document.getElementById("increaseBtn");  // 🔼 Button to increase the count
const countLabel = document.getElementById("countLabel");    // 📊 Element to display the current count
const countPerClick = 50; // ➕➖ Amount to increase or decrease the count by each button click

// ✨ Function to trigger a scaling animation on the countLabel element
function triggerScaleAnimation() {
  countLabel.classList.add("scale"); // 🎨 Add the 'scale' class to apply the animation
  setTimeout(() => countLabel.classList.remove("scale"), 500); // ⏱️ Remove the 'scale' class after 500ms (animation duration)
}

let count = 0;    // 🔢 Initial value of the counter
let label = " XP"; // 🏆 Text to append to the counter value

// ➕ Function to increase the count
increaseBtn.onclick = function () {
  count += countPerClick;  // 🔼 Increase the count by the value of countPerClick (50)
  countLabel.textContent = count + label; // 📊 Update the displayed count with the new value and label
  triggerScaleAnimation(); // ✨ Call the function to animate the countLabel
};

// ➖ Function to decrease the count
decreaseBtn.onclick = function () {
  count -= countPerClick;  // 🔽 Decrease the count by the value of countPerClick (50)
  countLabel.textContent = count + label; // 📊 Update the displayed count with the new value and label
  triggerScaleAnimation(); // ✨ Call the function to animate the countLabel
};

// 🔄 Function to reset the count to its initial value
resetBtn.onclick = function () {
  count = 0;  // 🔄 Reset the count to 0
  countLabel.textContent = count + label; // 📊 Update the displayed count with the reset value and label
  triggerScaleAnimation(); // ✨ Call the function to animate the countLabel
};

// 🎯 Possible Use Cases:
// 1️⃣ User Experience Tracking: Track user interactions, like the number of clicks or actions taken on a page. 🖱️
// 2️⃣ Game Scoring: Keep track of scores or levels in a browser-based game, showing user progress. 🎮
// 3️⃣ Progress Tracking: Display the number of completed steps or achievements in a tutorial or progress-based application. 📈
// 4️⃣ Inventory Management: Adjust and display item quantities in shopping carts or inventory systems on e-commerce sites. 🛒
// 5️⃣ Event Counting: Track and display the number of participants or submissions in a contest or event registration system. 📝
// 6️⃣ Timer and Stopwatch: Implement countdowns or timers for various purposes like cooking, exercising, or productivity tracking. ⏲️
// 7️⃣ Notification Counts: Display the number of unread notifications or messages in an application or website. 📬
// 8️⃣ Page Visits: Count the number of visits to a specific page or section within a site for analytics purposes. 📊
// 9️⃣ Form Submissions: Track the number of form submissions or responses received from users. 📝
// 🔟 Activity Monitoring: Monitor and report user activities or interactions over time for analysis or feedback. 📅