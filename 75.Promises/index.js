// 75. What are JavaScript PROMISES?

// 🔄 Promise = An object that manages asynchronous operations.
// 📦 It wraps around asynchronous code to handle its execution, providing a result at a future time.
// 📝 A Promise can either be resolved (successful) or rejected (failure).

// 📌 Syntax: `let promise = new Promise(function(resolve, reject) { /* asynchronous code */ });`
// 🔧 The `resolve()` function is called when the operation is successful, passing the result.
// ❌ The `reject()` function is called when the operation fails, passing an error message.
// 🚀 Promises make it easier to handle asynchronous operations without falling into nested callbacks.

// 🐕 DO THESE CHORES IN ORDER

// 1️⃣ WALK THE DOG
// 2️⃣ CLEAN THE KITCHEN
// 3️⃣ TAKE OUT THE TRASH

// // 1️⃣ Example 1 (❌ Using Nested Callbacks)
// 🐾 This example demonstrates how nested callbacks can lead to complex and hard-to-read code.

// function walkDog(callback) {
//   // 🔄 Simulates walking the dog with a delay
//   setTimeout(() => {
//     console.log("You walk the dog 🐕"); // 📢 Log that the dog is walked
//     callback(); // 🔗 Call the next function in the chain
//   }, 1500); // ⏱️ Wait 1.5 seconds before executing
// }

// function cleanKitchen(callback) {
//   // 🔄 Simulates cleaning the kitchen with a delay
//   setTimeout(() => {
//     console.log("You clean the kitchen 🧹🧼🧽"); // 📢 Log that the kitchen is cleaned
//     callback(); // 🔗 Call the next function in the chain
//   }, 2500); // ⏱️ Wait 2.5 seconds before executing
// }

// function takeOutTrash(callback) {
//   // 🔄 Simulates taking out the trash with a delay
//   setTimeout(() => {
//     console.log("You take out the trash 🗑️"); // 📢 Log that the trash is taken out
//     callback(); // 🔗 Call the next function in the chain
//   }, 2500); // ⏱️ Wait 2.5 seconds before executing
// }

// // Chaining the chores using nested callbacks
// walkDog(() => {
//   // 🔗 Start with walking the dog, then clean the kitchen
//   cleanKitchen(() => {
//     // 🔗 After cleaning the kitchen, take out the trash
//     takeOutTrash(() => console.log("You finished all the chores!🏁")); // 📢 Log completion
//   });
// });

// 2️⃣ Example 2 (🔄 Using Promises)
// 🔄 This example shows how Promises simplify the handling of asynchronous operations without deep nesting.

function walkDog() {
  // 🔄 Return a Promise for walking the dog
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true; // ✅ Simulate the dog being walked
      if (dogWalked) {
        resolve("You walk the dog 🐕"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't walk the dog❌"); // ❌ Reject the Promise with an error message
      }
    }, 1500); // ⏱️ Wait 1.5 seconds before executing
  });
}

function cleanKitchen() {
  // 🔄 Return a Promise for cleaning the kitchen
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true; // ✅ Simulate the kitchen being cleaned
      if (kitchenCleaned) {
        resolve("You clean the kitchen 🧹🧼🧽"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't clean the kitchen❌"); // ❌ Reject the Promise with an error message
      }
    }, 2500); // ⏱️ Wait 2.5 seconds before executing
  });
}

function takeOutTrash() {
  // 🔄 Return a Promise for taking out the trash
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false; // 🚫 Simulate an error (trash not taken out)
      if (trashTakenOut) {
        resolve("You take out the trash 🗑️"); // 🏆 Resolve the Promise with a success message
      } else {
        reject("You didn't take out the trash❌"); // ❌ Reject the Promise with an error message
      }
    }, 500); // ⏱️ Wait 0.5 seconds before executing
  });
}

// Chaining the chores using Promises
walkDog()
  .then((value) => {
    console.log(value); // 📢 Log the result of walking the dog
    return cleanKitchen(); // 🔗 Proceed to clean the kitchen
  })
  .then((value) => {
    console.log(value); // 📢 Log the result of cleaning the kitchen
    return takeOutTrash(); // 🔗 Proceed to take out the trash
  })
  .then((value) => {
    console.log(value); // 📢 Log the result of taking out the trash
    console.log("You finished all the chores!🏁"); // 📢 Log completion
  })
  .catch((error) => console.error(error)); // ⚠️ Handle any errors that occur

// 🧠 Simple Analogy 🧠
// 🏡 Think of a Promise like ordering a pizza 🍕.
// ⚙️ You place an order (create a Promise), and you either receive the pizza (resolve)
// 🔗 or get a call saying they can't deliver it (reject).
// 🎉 While you wait, you can go about your day, and when the pizza arrives, you enjoy it!

// 🎯 Possible Use Cases:
// 1️⃣ Fetching Data from an API 🌐: Making API calls to retrieve data, ensuring the program continues without blocking.
// 2️⃣ File Operations 📂: Reading or writing files asynchronously, allowing other operations to proceed while waiting for completion.
// 3️⃣ User Authentication 🔐: Handling login processes, where the app waits for a response without freezing the UI.
// 4️⃣ Animations 🎨: Chaining animations in a sequence, where each animation waits for the previous one to finish.
// 5️⃣ Image Loading 📸: Loading images asynchronously, so the application can respond while waiting for large images to download.
// 6️⃣ Database Queries 🗄️: Executing database operations without blocking the main thread, ensuring smooth performance.
// 7️⃣ Form Submissions 📋: Handling form submissions where the response is awaited without interrupting user interactions.
// 8️⃣ Event Handling 🎉: Managing event-driven applications where events depend on asynchronous tasks being completed first.
// 9️⃣ Background Processing ⚙️: Running background tasks without impacting the responsiveness of the main application.
// 🔟 Chaining Tasks 🔗: Organizing complex workflows where each task depends on the previous one’s result.
