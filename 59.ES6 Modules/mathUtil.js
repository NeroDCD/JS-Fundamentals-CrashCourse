// 📦 This module exports constants and functions related to circles and spheres.
// 🌍 Exporting the constant PI for use in calculations.
export const PI = 3.14159;

// 🔄 Function to calculate the circumference of a circle.
// 📏 Accepts the radius as an argument and returns the calculated circumference.
export function getCircumference(radius) {
  return 2 * PI * radius;
}

// 🌐 Function to calculate the area of a circle.
// 📏 Accepts the radius as an argument and returns the calculated area.
export function getArea(radius) {
  return PI * radius * radius;
}

// 📦 Function to calculate the volume of a sphere.
// 📏 Accepts the radius as an argument and returns the calculated volume.
export function getVolume(radius) {
  return (4 / 3) * PI * radius * radius * radius; // Adjusted for correct volume calculation
}
