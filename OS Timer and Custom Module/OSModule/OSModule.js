// Write a program to print information about the computer's operating system using the OS module(use any 5 methods).

const os = require('os');

console.log('OS Type:', os.type());
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory (GB):', (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2));