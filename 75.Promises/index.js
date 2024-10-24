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
// // Explain this, add emoji also

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

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finished all the chores!🏁"));
//   });
// });

// 1️⃣ Example 2 (🔄 Using Promises)
// Explain this, add emoji also

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't walked the dog❌");
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
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("You take out the trash 🗑️");
      } else {
        reject("You didn't take out the trash❌");
      }
    }, 500);
  });
}

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
  .catch((error) => console.error(error));

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also

// 🎯 Possible Use Cases:
//10 Use Cases
