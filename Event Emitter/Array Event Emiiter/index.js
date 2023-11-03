// Create functions to sort, reverse and search for an element in an array. Register and trigger these functions using events.

// Run this file

const { eventEmitter, sortArray, reverseArray, searchArray } = require('./eventEmitter');

const numbers = [4, 2, 8, 1, 6, 3, 7, 5];

// Register event handlers
eventEmitter.on('sorted', (sortedArr) => {
  console.log('Sorted Array:', sortedArr);
});

eventEmitter.on('reversed', (reversedArr) => {
  console.log('Reversed Array:', reversedArr);
});

eventEmitter.on('found', (index) => {
  if (index !== -1) {
    console.log(`Element found at index ${index}`);
  } else {
    console.log('Element not found in the array');
  }
});

// Trigger the functions using events
sortArray(numbers);
reverseArray(numbers);
searchArray(numbers, 7);
searchArray(numbers, 9);
