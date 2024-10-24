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
// // 🐾 This example demonstrates how nested callbacks can lead to complex and hard-to-read code.

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog 🐕");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen 🧹🧼🧽");
//     callback();
//   }, 2500);
// }

// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash 🗑️");
//     callback();
//   }, 2500);
// }

// // Chaining the chores using nested callbacks
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finished all the chores!🏁"));
//   });
// });

// 2️⃣ Example 2 (🔄 Using Promises)
// 🔄 This example shows how Promises simplify the handling of asynchronous operations without deep nesting.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't walk the dog❌");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen 🧹🧼🧽");
      } else {
        reject("You didn't clean the kitchen❌");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false; // This will trigger an error
      if (trashTakenOut) {
        resolve("You take out the trash 🗑️");
      } else {
        reject("You didn't take out the trash❌");
      }
    }, 500);
  });
}

// Chaining the chores using Promises
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!🏁");
  })
  .catch((error) => console.error(error)); // Error handling

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
