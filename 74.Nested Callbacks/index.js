// 74. What is JavaScript NESTED CALLBACK

// 🌀 Nested Callback = A situation in JavaScript where callbacks are nested within other callbacks.
// 📚 This leads to code that is difficult to read and maintain.
// ⏳ It was an old pattern used to handle asynchronous functions.
// 🚀 To avoid nested callbacks, use Promises or async/await for cleaner and more manageable code.

// 1️⃣ Example 1 (Title Here)
// Explain this, add emoji also

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Complete");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 Complete");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 Complete");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 Complete");
    callback();
  }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All Task Complete");
            })
        })
    })
});




// 🧠 Simple Analogy 🧠
//Explain this, add emoji also

// 🎯 Possible Use Cases:
//10 Use Cases
