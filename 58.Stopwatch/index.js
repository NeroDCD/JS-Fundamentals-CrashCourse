// 58. Build this JS STOPWATCH

// ⏱️ A stopwatch measures the time elapsed from when you start it, and can be paused or reset.
// This project uses `setInterval()` to track the time in hours, minutes, seconds, and milliseconds.
// It updates the display every 10 milliseconds, allowing smooth time tracking for accurate measurement.

// 1️⃣ Variable Declarations
// 🖥️ `display`: Gets the HTML element to show the stopwatch time.
// 🕰️ `timer`: Holds the interval that updates the stopwatch every 10 milliseconds.
// ⏲️ `startTime`: Stores the time when the stopwatch starts.
// ⌚ `elapsedTime`: Tracks the total elapsed time since the stopwatch started.
// ✅ `isRunning`: A boolean to track whether the stopwatch is running or not.

const display = document.getElementById("display");
let timer = null; // 🔄 Will store the interval to update the display
let startTime = 0; // 🕒 Tracks when the stopwatch started
let elapsedTime = 0; // ⌛ How much time has passed since the stopwatch started
let isRunning = false; // ✅ Tracks if the stopwatch is active

// 2️⃣ Function start()
// 🟢 Starts the stopwatch if it's not already running.
// 💡 `Date.now()` captures the current timestamp and subtracts the elapsed time to calculate the start time.
// 🔄 The `setInterval()` function calls the `update()` function every 10 milliseconds to refresh the display.

function start() {
  if (!isRunning) {
    // 🛑 Only start if the stopwatch isn't already running
    startTime = Date.now() - elapsedTime; // 🕒 Set the start time considering already elapsed time (in case of pause)
    timer = setInterval(update, 10); // 🔄 Call update() every 10ms
    isRunning = true; // ✅ Mark the stopwatch as running
  }
}

// 3️⃣ Function stop()
// 🛑 Stops the stopwatch if it's running by clearing the interval.
// ⏸️ Saves the elapsed time so it can be resumed later.

function stop() {
  if (isRunning) {
    // 🛑 Only stop if the stopwatch is running
    clearInterval(timer); // ❌ Stop the interval that updates the time
    elapsedTime = Date.now() - startTime; // ⏱️ Save how much time has passed
    isRunning = false; // ❌ Mark the stopwatch as stopped
  }
}

// 4️⃣ Function reset()
// 🔄 Resets the stopwatch back to zero, stopping any intervals and resetting variables.

function reset() {
  clearInterval(timer); // ❌ Stop the interval
  startTime = 0; // 🔄 Reset start time
  elapsedTime = 0; // ⏲️ Reset elapsed time
  isRunning = false; // ❌ Mark the stopwatch as not running
  display.textContent = "00:00:00:00"; // 🖥️ Reset the display to show all zeros
}

// 5️⃣ Function update()
// 🔄 This function runs every 10 milliseconds to update the display with the current elapsed time.
// 🕒 It calculates hours, minutes, seconds, and milliseconds, then updates the screen.

function update() {
  const currentTime = Date.now(); // 🕒 Get the current time
  elapsedTime = currentTime - startTime; // ⏲️ Calculate how long the stopwatch has been running

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // ⏳ Convert elapsed time to hours
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60); // ⏳ Convert to minutes
  let seconds = Math.floor((elapsedTime / 1000) % 60); // ⏳ Convert to seconds
  let milliseconds = Math.floor((elapsedTime % 1000) / 10); // ⏲️ Get milliseconds

  // 🔢 Pad the numbers to ensure double digits (e.g., 01, 02)
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  // 🖥️ Update the display with the formatted time
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// 🧠 Simple Analogy 🧠
// ⏲️ Imagine starting a timer on your phone to time how long it takes to do a task. 
// ⌚ The stopwatch checks the system time every moment and keeps showing the updated time, 
// 🔄 even if you stop it and resume later, picking up where it left off.

// 🎯 Possible Use Cases for JavaScript Stopwatch:
// 1️⃣ Web Application Timer ⏱️: Implement a stopwatch feature in web applications for
// measuring user interactions, such as the time spent on each page.
// 2️⃣ Performance Measurement 🏎️: Use the stopwatch to time the execution of functions or API calls in your
// JavaScript code for performance profiling and optimization.
// 3️⃣ Debugging Tool 🛠️: Integrate the stopwatch in debugging processes to measure how long
// specific parts of your code take to execute, helping identify bottlenecks.
// 4️⃣ Real-time Data Fetching 🗂️: Monitor how long it takes to fetch data from APIs in your applications,
// providing insights into loading times for better user experience.
// 5️⃣ Event Listener Timing ⏲️: Measure the time it takes for event listeners to respond to user actions,
// which can be useful for optimizing user interfaces.
// 6️⃣ Game Development ⌛: Implement a stopwatch in games to track time spent on various game levels,
// which can enhance user engagement and competitiveness.
// 7️⃣ Automation Scripts ⚙️: Use the stopwatch to measure the execution time of automation scripts or
// tasks, providing logs for performance analysis.
// 8️⃣ Testing Frameworks 📊: Integrate a stopwatch in testing frameworks to measure the duration of tests,
// helping identify slow tests and improve overall performance.
// 9️⃣ User Interaction Metrics 📈: Track how long users spend on certain actions within your application,
// providing valuable data for analytics.
// 🔟 Interactive Tutorials 🎓: Use the stopwatch to time user interactions in tutorials or guides,
// offering feedback on how quickly users complete tasks.
