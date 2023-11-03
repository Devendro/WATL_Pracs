// Write a Program to print the first 20 Fibonacci numbers (take input through the command line)

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter the Number`, (num) => {
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i <= parseInt(num); i++) {
    console.log(n1)
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  readline.close();
});

