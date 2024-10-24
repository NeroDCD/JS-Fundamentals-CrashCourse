// 74. What is JavaScript NESTED CALLBACK

// 🌀 Nested Callback = A situation in JavaScript where callbacks are nested within other callbacks.
// 📚 This leads to code that is difficult to read and maintain.
// ⏳ It was an old pattern used to handle asynchronous functions.
// 🚀 To avoid nested callbacks, use Promises or async/await for cleaner and more manageable code.

// 1️⃣ Example 1 (Nested Callbacks in Action)
// 🧩 This example demonstrates how asynchronous tasks are chained together using nested callbacks.

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Complete");
    callback();
  }, 2000); // ⏳ Task 1 takes 2 seconds to complete
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 Complete");
    callback();
  }, 1000); // ⏳ Task 2 takes 1 second to complete
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 Complete");
    callback();
  }, 3000); // ⏳ Task 3 takes 3 seconds to complete
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 Complete");
    callback();
  }, 1500); // ⏳ Task 4 takes 1.5 seconds to complete
}

// 🎡 Nesting callbacks to ensure tasks are executed in sequence
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All Task Complete"); // ✅ Final message once all tasks are complete
      });
    });
  });
});

// 🧠 Simple Analogy 🧠
// 🧩 Imagine nested callbacks like stacking building blocks,
// 🔗 but instead of stacking them one on top of another, each block is placed inside the previous one.
// 🚧 While the structure works, it becomes more tangled and complex as the nesting increases.
// 📦 For a cleaner approach, it's better to stack them side-by-side using Promises or async/await instead of nesting them deeply.

// ❌ Why NOT to Use Nested Callbacks:
// 1️⃣ Readability 📖: Deep nesting makes code hard to read due to excessive indentation and complex logic.
// 2️⃣ Maintenance 🛠️: Debugging and updating nested callbacks is difficult and can lead to breaking the code.
// 3️⃣ Error Handling ⚠️: Manually passing errors between callbacks adds complexity and clutters the code.
// 4️⃣ Scalability 🚀: As the codebase grows, managing asynchronous logic with nested callbacks becomes unmanageable.
// 5️⃣ Nested Chaos 🌪️: Excessive nesting of callbacks results in highly convoluted code, making it harder to read, understand, and maintain.
// 6️⃣ Sequential Execution 🚧: Callbacks force a sequential flow, which can slow down performance, especially if not necessary.
// 7️⃣ Inversion of Control 🔄: Nesting gives too much control to external functions, making it harder to follow the program flow.
// 8️⃣ Difficult to Reuse ♻️: Nested callbacks are tightly coupled, making it harder to reuse functions independently in other parts of the code.
// 9️⃣ Testing Challenges 🧪: Writing unit tests for deeply nested callbacks is difficult and can lead to poorly tested code.
// 🔟 Async Alternatives 🏆: Promises and async/await offer a cleaner, more readable, and more efficient way to handle asynchronous code.
