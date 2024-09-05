// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//1. EASY WAY

// let username = window.prompt("What's your Username?");
// console.log(username);

// 2. PROFESSIONAL WAY
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myHeading").textContent = `Hello ${username}`;
};

// Exploring
// let username;
// document.getElementById("myText").addEventListener("keydown", function (event) {

//   if (event.key === "Enter") {
//     username = document.getElementById("myText").value;
//     document.getElementById("myHeading").textContent = `Hello ${username}`;
//   }
// });
