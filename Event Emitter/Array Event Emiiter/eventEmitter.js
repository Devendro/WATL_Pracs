const EventEmitter = require('events');

// Create an instance of the EventEmitter class
const eventEmitter = new EventEmitter();

// Function to sort an array
function sortArray(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  eventEmitter.emit('sorted', sortedArr);
}

// Function to reverse an array
function reverseArray(arr) {
  const reversedArr = arr.slice().reverse();
  eventEmitter.emit('reversed', reversedArr);
}

// Function to search for an element in an array
function searchArray(arr, element) {
  const index = arr.indexOf(element);
  eventEmitter.emit('found', index);
}

module.exports = {
  eventEmitter,
  sortArray,
  reverseArray,
  searchArray,
};
