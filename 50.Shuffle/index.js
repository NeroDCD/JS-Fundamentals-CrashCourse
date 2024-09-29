// 50. How to SHUFFLE AN ARRAY

// 🔀 The Fisher–Yates shuffle is an algorithm for randomly shuffling a list.
// It works by going through the list and swapping each element with a randomly chosen one,
// ensuring every possible order is equally likely. The modern version is efficient,
// shuffling the list in place with a time complexity proportional to the list size.

// 1️⃣ Example 1 (Shuffle Elements in an Array)

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// ⚠️ Inefficient Method
// 📝 Using sort with Math.random() doesn’t give equal likelihood of all orders.
// This method isn't ideal for random shuffling, especially for large arrays.
// cards.sort(() => Math.random() - 0.5);
// console.log(cards)

// 🔄 The Fisher–Yates Algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 🎲 Generates random index for shuffling
    const random = Math.floor(Math.random() * (i + 1)); 

    // 🔄 Swapping current element with a random element
    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
console.log(cards);
// 🖨️ Logs: Randomly shuffled array of cards, such as ["K", 2, "Q", "A", 8, 5, 3, "J", 10, 9, 7, 6, 4]

// 🧠 Simple Analogy 🧠
// Shuffling an array using Fisher-Yates is like shuffling a deck of cards by picking each card
// from a random spot in the deck and swapping it with the one in your hand until all the cards are mixed up.

// 🎯 Possible Use Cases:
// 1️⃣ Deck of Cards ♠️♦️: Shuffle a deck of cards to ensure a random order for card games.
// 2️⃣ Lottery Draw 🎟️: Randomize the selection of lottery numbers or entries for a draw.
// 3️⃣ Music Playlist 🎶: Shuffle songs in a playlist to play them in a random order.
// 4️⃣ Exam Questions 📑: Randomize questions in a quiz or exam to prevent pattern recognition.
// 5️⃣ Game Board Setup 🎲: Shuffle tiles, cards, or game pieces for board games to ensure randomness.
// 6️⃣ Random Sampling 📊: Select random items from a dataset for analysis or testing.
// 7️⃣ Prize Giveaways 🎁: Shuffle participant entries in a giveaway to ensure fair random selection.
// 8️⃣ Puzzle Generation 🧩: Randomly shuffle pieces or elements in a puzzle for each new game.
// 9️⃣ Image Carousel 🖼️: Randomize the display of images in a gallery or slideshow.
// 🔟 Voting Order 🗳️: Shuffle voting ballots or participant names to avoid bias in presentations or votes.
