const EventEmitter = require('events');

// Create an instance of the EventEmitter class
const eventEmitter = new EventEmitter();

// Event handler function for the 'add' event
function addHandler(a, b) {
  const result = a + b;
  console.log(`Addition result: ${a} + ${b} = ${result}`);
}

// Event handler function for the 'subtract' event
function subtractHandler(a, b) {
  const result = a - b;
  console.log(`Subtraction result: ${a} - ${b} = ${result}`);
}

// Event handler function for the 'multiply' event
function multiplyHandler(a, b) {
  const result = a * b;
  console.log(`Multiplication result: ${a} * ${b} = ${result}`);
}

// Event handler function for the 'divide' event
function divideHandler(a, b) {
  if (b !== 0) {
    const result = a / b;
    console.log(`Division result: ${a} / ${b} = ${result}`);
  } else {
    console.error("Division by zero is not allowed.");
  }
}

// Register the event handlers with the custom events
eventEmitter.on('add', addHandler);
eventEmitter.on('subtract', subtractHandler);
eventEmitter.on('multiply', multiplyHandler);
eventEmitter.on('divide', divideHandler);

module.exports = eventEmitter;
