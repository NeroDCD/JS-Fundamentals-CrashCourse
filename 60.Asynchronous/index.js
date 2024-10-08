// 60. What is asynchronous JavaScript code

// synchronous ⏳
// - Executes code line by line, consecutively in a sequential manner.
// - Each operation waits for the previous one to complete before moving to the next.
// - The code waits for an operation to finish before proceeding.

// asynchronous ⚡
// - Allows multiple operations to be performed concurrently, without waiting.
// - Doesn't block the execution flow, letting the program continue while tasks are being handled in the background.
// - Common in tasks like: I/O operations, network requests, fetching data.
// - Handled with: Callbacks, Promises, Async/Await.

// 1️⃣ Example: Using Callbacks
// 🔍 This example demonstrates how asynchronous operations can be executed using callbacks.

function func1(callback) {
  // 🔧 Function that takes a callback
  setTimeout(() => {
    // ⏳ Simulates a delay of 3 seconds
    console.log("Task 1"); // 📜 Logs "Task 1" after 3 seconds
    callback(); // 🔄 Calls the callback function to proceed to the next task
  }, 3000);
}

function func2() {
  // 📜 Function that logs subsequent tasks
  console.log("Task 2"); // 📜 Logs "Task 2"
  console.log("Task 3"); // 📜 Logs "Task 3"
  console.log("Task 4"); // 📜 Logs "Task 4"
}

func1(func2); // 🚀 Initiates func1, passing func2 as the callback

// 🧠 Simple Analogy 🧠
// 🍰 Imagine you're baking a cake. 🕰️ You put the cake in the oven (func1) and while it's baking (asynchronous operation), 
// ⏳ you start preparing the icing (func2).  You don’t wait for the cake to bake before starting on the icing; 
// 🎉 you do them concurrently. The cake (Task 1) will let you know when it's done, 
// and then you can finish the icing (Tasks 2, 3, and 4).

// 🎯 Possible Use Cases:
// 1️⃣ Network Requests 🌐: Fetching data from APIs without blocking the main thread.
// 2️⃣ File I/O 📁: Reading or writing files asynchronously to keep the application responsive.
// 3️⃣ User Input Handling 🖱️: Responding to user actions without freezing the interface.
// 4️⃣ Timers ⏲️: Using functions like setTimeout or setInterval to execute code after a delay.
// 5️⃣ Animation Effects 🎨: Performing animations in a non-blocking way to enhance user experience.
// 6️⃣ Database Queries 🗄️: Executing database queries without halting the application's performance.
// 7️⃣ Event Listeners 📣: Handling events like clicks, mouse movements, and keyboard inputs asynchronously.
// 8️⃣ Real-time Data Processing 📊: Processing data streams without interrupting the main application flow.
// 9️⃣ Background Tasks 🔄: Performing long-running operations in the background while keeping the UI responsive.
// 🔟 WebSocket Communication 🌍: Maintaining real-time communication with servers without blocking the main execution thread.
