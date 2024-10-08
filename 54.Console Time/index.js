// 54. JavaScript console.time()

// ⏱️ console.time() = A tool in JavaScript that allows you to measure the time it takes for a section of code to execute.
// 🔍 This is very useful for identifying performance "bottlenecks" in your code by providing an easy way to check how long a task takes.

// // 1️⃣ Example 1 (Measuring Loop Execution Time)
// // 🛠️ In this example, `console.time("test")` starts the timer and `console.timeEnd("test")` stops it,
// // printing the time taken by the loop to complete. This is helpful for seeing how long a loop or large task takes.
// console.time("test"); // Starts the timer labeled "test"
// for (let i = 0; i < 1000000000; i++) {
//   // Simulating code execution inside the loop
// }
// console.timeEnd("test"); // Stops the timer and logs the time taken to execute the loop

// 2️⃣ Example 2 (Measuring Multiple Operations)
// 🧑‍💻 This example uses `console.time()` to measure the time taken by two separate functions: `loadData()` and `processData()`.
// Each function has its own timer, showing how long it takes to load data and process it.
function loadData() {
  console.time("loadData"); // Starts the timer for the "loadData" operation

  for (let i = 0; i < 100000000; i++) {
    // Simulate loading data
  }
  console.timeEnd("loadData"); // Stops the timer and logs the time taken for loading data
}

function processData() {
  console.time("processData"); // Starts the timer for the "processData" operation

  for (let i = 0; i < 1000000; i++) {
    // Simulate processing data
  }
  console.timeEnd("processData"); // Stops the timer and logs the time taken for processing data
}

loadData(); // Calls the loadData function
processData(); // Calls the processData function

// 🧠 Simple Analogy 🧠
// ⏱️ Think of `console.time()` as a stopwatch for your code. 
// ▶️ You press start (`console.time()`) when you begin a task,
// and ⏹️ stop (`console.timeEnd()`) when you're done, 
// 🕒 seeing how long it took to complete.

// 🎯 Possible Use Cases:
// 1️⃣ Performance Testing 🏃: Measure how long certain functions take to execute, especially in
// performance-critical applications.
// 2️⃣ Loop Optimization 🔄: Check how long loops take to execute and identify if optimizations are needed.
// 3️⃣ API Response Time 🌐: Measure how long an API request takes from start to finish.
// 4️⃣ Complex Calculations 📊: Find out how long mathematical or complex algorithms take to compute.
// 5️⃣ Rendering Times 🎨: Track how long it takes to render elements on the screen in web applications.
// 6️⃣ File Loading ⏳: Measure how long it takes to load or read large files from disk or network.
// 7️⃣ Debugging Slowness 🔧: Identify the slow parts of your code by checking how long different functions take to execute.
// 8️⃣ Database Queries 💾: Measure the time it takes to run queries against databases and return results.
// 9️⃣ Animation or Media Loading 🎬: Check the performance of loading or processing animation, video, or media files.
// 🔟 Batch Processing 🛠️: Test how long it takes to process large batches of data or files in a system.
