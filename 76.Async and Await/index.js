// 76. JavaScript ASYNC/AWAIT is easy

// 🌟 Async/Await = A way to handle asynchronous operations in JavaScript.
// 🚀 Async = A keyword that makes a function return a Promise automatically.
// ⏳ Await = A keyword that makes an async function wait for a Promise to resolve before continuing execution.
// ✍️ This allows you to write asynchronous code in a more synchronous manner, improving readability.

// 📜 Note: Async functions do not have `resolve` or `reject` parameters like traditional Promises.
// 📜 Everything after the `await` keyword is placed in an event queue, ensuring it executes after the Promise is settled.

// 1️⃣ Example 1: Completing Chores with Async/Await
// This example demonstrates how to handle multiple asynchronous tasks in a sequence.
// Each task (walking the dog, cleaning the kitchen, and taking out the trash) is wrapped in a Promise.
// The async/await syntax allows the program to wait for each task to complete before moving to the next one,
// ensuring that the chores are done in order and providing a clear and readable structure to the code.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true; // ✅ Simulate the dog being walked
      if (dogWalked) {
        resolve("You walk the dog 🐕"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't walk the dog❌"); // ❌ Reject the Promise with an error message
      }
    }, 1500); // ⏱️ Wait 1.5 seconds
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true; // ✅ Simulate the kitchen being cleaned
      if (kitchenCleaned) {
        resolve("You clean the kitchen 🧹🧼🧽"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't clean the kitchen❌"); // ❌ Reject the Promise with an error message
      }
    }, 2500); // ⏱️ Wait 2.5 seconds
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true; // ✅ Simulate the trash being taken out
      if (trashTakenOut) {
        resolve("You take out the trash 🗑️"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't take out the trash❌"); // ❌ Reject the Promise with an error message
      }
    }, 500); // ⏱️ Wait 0.5 seconds
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog(); // 🌟 Wait for the dog to be walked
    console.log(walkDogResult); // 📢 Log the result of walking the dog

    const cleanKitchenResult = await cleanKitchen(); // 🌟 Wait for the kitchen to be cleaned
    console.log(cleanKitchenResult); // 📢 Log the result of cleaning the kitchen

    const trashTakenResult = await takeOutTrash(); // 🌟 Wait for the trash to be taken out
    console.log(trashTakenResult); // 📢 Log the result of taking out the trash

    console.log("You finished all the chores!🏁"); // 📢 Log completion
  } catch (error) {
    console.error(error); // ⚠️ Handle any errors that occur
  }
}

// Start the chore sequence
doChores();

// 🧠 Simple Analogy 🧠
// 📝 Think of async/await like waiting for a friend to finish their tasks.
// ⏳ You don’t start the next task until your friend has completed the previous one,
// 🌟 making the flow of activities organized and easy to follow.

// 🎯 Possible Use Cases for Async/Await:
// 1️⃣ Fetching Data from an API 🌐: Simplifies the process of making API calls and handling responses in a readable way.
// 2️⃣ Sequential Task Execution 🔄: Organizes tasks that depend on each other in a clear sequence without nested callback.
// 3️⃣ User Input Handling 📝: Processes user inputs in a way that waits for validation or confirmation without freezing the UI.
// 4️⃣ Chaining Promises 🌊: Allows for easily chaining multiple asynchronous actions where each depends on the previous one.
// 5️⃣ Database Transactions 🗄️: Manages multiple database operations in sequence, ensuring each operation completes before the next.
// 6️⃣ Animation Sequences 🎨: Synchronizes animations, ensuring that one finishes before the next starts for smoother transitions.
// 7️⃣ Form Submissions 📋: Handles submissions and displays results in an orderly fashion without interrupting user experience.
// 8️⃣ Real-time Data Updates 📊: Waits for incoming data from WebSocket connections without blocking the main application thread.
// 9️⃣ File Uploads 📂: Manages multiple file uploads in a sequence, improving user feedback and handling errors gracefully.
// 🔟 Background Processes ⚙️: Runs tasks in the background, allowing the UI to remain responsive while waiting for long operations.
