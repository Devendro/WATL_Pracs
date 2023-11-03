// create a Calculator Node.js Module with  functions add, subtract and multiply,Divide. And use the Calculator module in another Node.js file.

// Run this file

const calculator = require('./calculatorModule');
console.log('Addition:', calculator.add(5, 3));
console.log('Subtraction:', calculator.subtract(10, 4));
console.log('Multiplication:', calculator.multiply(6, 7));
console.log('Division:', calculator.divide(10, 2));