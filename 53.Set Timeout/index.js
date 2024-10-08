// 53. Learn JavaScript setTimeout()

// ⏳ setTimeout() = function in JavaScript that allows you to schedule the execution of a
// function after a certain delay.
// ⌛ Times are approximate, meaning the delay is not guaranteed to be exact but close.
// 📅 The syntax is setTimeout(callback, delay), where the `callback` is
// the function to execute and `delay` is the time in milliseconds.

// // 1️⃣ Example 1 (Basic Usage of setTimeout)
// // 🛠️ In this example, the function `sayHello()` will show an alert saying "Hello" after 3 seconds (3000 milliseconds).
// // When `setTimeout()` is called, it schedules the `sayHello` function to run once after the specified delay.

// function sayHello() {
//   window.alert("Hello");  // Displays an alert with the message "Hello"
// }
// setTimeout(sayHello, 3000);  // Schedules the `sayHello` function to execute after 3 seconds

// // 2️⃣ Example 2 (Anonymous Function in setTimeout)
// // 🧑‍💻 This example uses an anonymous function instead of a named function like `sayHello()`.
// // The function is written directly inside `setTimeout`, which will execute it after 3 seconds.

// setTimeout(function () {
//   window.alert("Hello");  // Displays an alert with the message "Hello"
// }, 3000);  // Schedules the anonymous function to execute after 3 seconds

// // 3️⃣ Example 3 (Arrow Function in setTimeout)
// // 🏹 This is another version using an arrow function, which is a more concise way to write functions in JavaScript.
// // The arrow function will execute after 3 seconds, showing an alert with "Hello".

// setTimeout(() => window.alert("Hello"), 3000);  // Schedules the arrow function to execute after 3 seconds

// // 4️⃣ Example 4 (Using clearTimeout with setTimeout)
// // 🛑 In this example, `setTimeout()` schedules the function, but `clearTimeout()` cancels it before it can execute.
// // The `clearTimeout(timeoutID)` stops the scheduled function from running.

// const timeoutID = setTimeout(() => window.alert("Hello"), 3000);  // Schedules a function to show "Hello" after 3 seconds
// clearTimeout(timeoutID);  // Cancels the scheduled function before it runs

// 5️⃣ Example 5 (Starting and Stopping Timer Functions)
// ⏳ Here, `startTimer()` schedules an alert to show after 3 seconds, and `clearTimer()` cancels the alert before it shows.
// `setTimeout()` stores the timer ID in `TimeOutID`, which is used by `clearTimeout()` to stop the timer.
let TimeOutID;

function startTimer() {
  TimeOutID = setTimeout(() => window.alert("Hello"), 3000); // Schedules a function to show "Hello" after 3 seconds
  console.log("Started"); // Logs that the timer has started
}

function clearTimer() {
  clearTimeout(TimeOutID); // Cancels the scheduled function
  console.log("Cleared"); // Logs that the timer has been cleared
}

// 🧠 Simple Analogy 🧠
// ⏲️ Think of `setTimeout()` as setting a kitchen timer. 
// ⏰ You set the timer for a certain amount of time, and once that time has passed, the timer goes off (executes the function). 
// ❌ If you decide you don't want the timer to go off, you can cancel it with `clearTimeout()` before it finishes.

// 🎯 Possible Use Cases:
// 1️⃣ Notification System 🔔: Delay notifications or reminders for users after a certain event occurs.
// 2️⃣ Animation Effects 🎬: Start an animation after a short delay, like fading in a modal after a button click.
// 3️⃣ Game Development 🎮: Introduce delays between actions or events in a game, such as showing a countdown timer.
// 4️⃣ Auto-Save Function 📝: Delay saving user input until after a certain amount of idle time.
// 5️⃣ Form Validation 🛡️: Add a delay before checking form input, giving users time to finish typing.
// 6️⃣ Loading Indicators ⏳: Show a "loading" spinner or message for a few seconds before fetching data.
// 7️⃣ Pop-up Ads 📰: Display an ad or modal a few seconds after the user lands on a page.
// 8️⃣ Pausing Script Execution ⏸️: Insert a delay between script executions for smooth functionality.
// 9️⃣ User Experience Enhancements 🎨: Show or hide elements with a slight delay for a better user experience.
// 🔟 Delayed Redirect 🌐: Redirect users to another page after a delay, commonly used in "Thank You" pages.
