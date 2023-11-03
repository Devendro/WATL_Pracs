// Create an application to demonstrate Node.js Functions-timer function (displays every 10 seconds)

// Run this file

const MyTimer = require('./Time');
MyTimer.startTimer();
// Using setTimeout to stop the timer after 10 iterations
setTimeout(() => {
  MyTimer.stopTimer();
}, 110000); // This stops the timer after 11 seconds (10 iterations)

