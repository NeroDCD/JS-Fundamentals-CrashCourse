// 76. JavaScript ASYNC/AWAIT is easy

// 🌟 Async/Await = A way to handle asynchronous operations in JavaScript.
// 🚀 Async = A keyword that makes a function return a Promise automatically.
// ⏳ Await = A keyword that makes an async function wait for a Promise to resolve before continuing execution.
// ✍️ This allows you to write asynchronous code in a more synchronous manner, improving readability.

// 📜 Note: Async functions do not have `resolve` or `reject` parameters like traditional Promises.
// 📜 Everything after the `await` keyword is placed in an event queue, ensuring it executes after the Promise is settled.

// 1️⃣ Example 1 (Title Here)
// Explain this, add emoji also

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
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You take out the trash 🗑️");
      } else {
        reject("You didn't take out the trash❌");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const trashTakenResult = await takeOutTrash();
    console.log(trashTakenResult);

    console.log("You finished all the chores!🏁");
  } catch (error) {
    console.error(error);
  }
}

doChores();

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also

// 🎯 Possible Use Cases:
//10 Use Cases
