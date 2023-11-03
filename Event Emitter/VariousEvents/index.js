// Create an application to demonstrate various Node.js Events in event emitter class.

// Run this file

const eventEmitter = require('./eventEmitter');

// Emit custom arithmetic events
eventEmitter.emit('add', 10, 5);
eventEmitter.emit('subtract', 10, 5);
eventEmitter.emit('multiply', 10, 5);
eventEmitter.emit('divide', 10, 5);
