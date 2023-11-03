const fs = require('fs');

// Data to be written to the file
const dataToWrite = 'This is some data to write to the file.';

// Specify the file name and content
fs.writeFile('example.txt', dataToWrite, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('Hello World in this file from Sweety ');
  }
});
