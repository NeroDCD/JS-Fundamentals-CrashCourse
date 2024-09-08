// 07. JavaScript COUNTER PROGRAM
// Get the HTML elements by their IDs and assign them to variables
const decreaseBtn = document.getElementById("decreasedBtn"); // Button to decrease the count
const resetBtn = document.getElementById("resetBtn"); // Button to reset the count
const increaseBtn = document.getElementById("increaseBtn"); // Button to increase the count
const countLabel = document.getElementById("countLabel"); // Element to display the current count
const countPerClick = 50; // Amount to increase or decrease the count by each button click

// Function to trigger a scaling animation on the countLabel element
function triggerScaleAnimation() {
  countLabel.classList.add("scale"); // Add the 'scale' class to apply the animation
  setTimeout(() => countLabel.classList.remove("scale"), 500); // Remove the 'scale' class after 500ms (duration of animation)
}

let count = 0; // Initial value of the counter
let label = " XP"; // Text to append to the counter value

// Function to increase the count
increaseBtn.onclick = function () {
  count += countPerClick; // Increase the count by the value of countPerClick (50)
  countLabel.textContent = count + label; // Update the displayed count with the new value and label
  triggerScaleAnimation(); // Call the function to animate the countLabel
};

// Function to decrease the count
decreaseBtn.onclick = function () {
  count -= countPerClick; // Decrease the count by the value of countPerClick (50)
  countLabel.textContent = count + label; // Update the displayed count with the new value and label
  triggerScaleAnimation(); // Call the function to animate the countLabel
};

// Function to reset the count to its initial value
resetBtn.onclick = function () {
  count = 0; // Reset the count to 100
  countLabel.textContent = count + label; // Update the displayed count with the reset value and label
  triggerScaleAnimation(); // Call the function to animate the countLabel
};
