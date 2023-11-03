// Create a circle module with functions to find the area and perimeter of a circle and use it.

// Run this file

const circle = require('./circleModule');
const radius = 5;
console.log('Radius:', radius);
console.log('Area:', circle.calculateArea(radius));
console.log('Perimeter:', circle.calculatePerimeter(radius));