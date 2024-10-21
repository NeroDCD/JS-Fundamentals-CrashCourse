// 73. Build a JavaScript IMAGE SLIDER

// 🖼️ This program implements an image slider for beginners.
// 🔍 Element selectors are used to create a NodeList of images to cycle through.
// 🎨 The displayed image will have a class added to its classList that contains display: block.
// 🖼️ At least a few images are needed for this project.
// ⚖️ It is recommended to use images that are roughly the same size.

// 1️⃣ Example 1 (Title Here)
// Explain this, add emoji also
const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", initializeSlider);

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also
// [emoji here]: description

// 🎯 Possible Use Cases:
//10 Use Cases, add emoji also
// 1️⃣ Use cases 1 [emoji here]: description
