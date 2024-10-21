// 73. Build a JavaScript IMAGE SLIDER

// 🖼️ This program implements an image slider for beginners.
// 🔍 Element selectors are used to create a NodeList of images to cycle through.
// 🎨 The displayed image will have a class added to its classList that contains display: block.
// 🖼️ At least a few images are needed for this project.
// ⚖️ It is recommended to use images that are roughly the same size.

// 🖼️ Image Slider Implementation
// 🎡 This example initializes the image slider, manages the display of images,
// and provides functions to navigate between slides.

const slides = document.querySelectorAll(".slider img"); // 📷 NodeList of images in the slider
let slideIndex = 0; // 🔢 Initial index for the current slide
let intervalId = null; // ⏲️ Variable to hold the interval ID for automatic sliding

function initializeSlider() {
  // ⚙️ Function to set up the slider
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide"); // 🎨 Add class to display the first slide
    intervalId = setInterval(nextSlide, 5000); // ⏱️ Automatically move to the next slide every 5 seconds
  }
}

function showSlide(index) {
  // 👁️ Function to display a specific slide
  if (index >= slides.length) {
    slideIndex = 0; // 🔄 Loop back to the first slide
  } else if (index < 0) {
    slideIndex = slides.length - 1; // 🔙 Go to the last slide if index is negative
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide"); // ❌ Remove the display class from all slides
  });
  slides[slideIndex].classList.add("displaySlide"); // 🎨 Add display class to the current slide
}

function prevSlide() {
  // ⏪ Function to show the previous slide
  clearInterval(intervalId); // 🛑 Stop the automatic sliding
  slideIndex--; // ➖ Decrement slide index
  showSlide(slideIndex); // 👀 Show the updated slide
}

function nextSlide() {
  // ⏩ Function to show the next slide
  slideIndex++; // ➕ Increment slide index
  showSlide(slideIndex); // 👀 Show the updated slide
}

document.addEventListener("DOMContentLoaded", initializeSlider); // 🗓️ Initialize slider once the DOM is fully loaded

// 🧠 Simple Analogy 🧠
// 🖼️ Think of the image slider as a digital photo album.
// 📖 Each photo represents a slide in the album, and
// 🔄 the slider allows you to flip through the pages, showcasing one photo at a time.
// ⏰ The automatic sliding is like an automatic slideshow, where each photo is displayed for a while before moving to the next one.

// 🎯 Possible Use Cases:
// 1️⃣ Web Design 🖌️: Use in websites to showcase portfolios, products, or features.
// 2️⃣ Promotions 🎉: Display promotional banners or advertisements that cycle through offers.
// 3️⃣ Galleries 🎨: Create photo galleries for artists, photographers, or events.
// 4️⃣ Tutorials 📚: Implement in tutorial pages to highlight different steps or features.
// 5️⃣ News Highlights 📰: Showcase news articles or updates in a visually appealing format.
// 6️⃣ E-commerce 🛒: Feature product images in an online store to help customers visualize items.
// 7️⃣ Event Highlights 🎊: Present event highlights, such as weddings or parties, through an image slider.
// 8️⃣ User Testimonials 🌟: Display rotating testimonials from users or clients for social proof.
// 9️⃣ Fashion Lookbooks 👗: Showcase seasonal collections or lookbooks for fashion brands.
// 🔟 Travel Blogs 🌍: Use to display travel photos and experiences dynamically on travel websites.
