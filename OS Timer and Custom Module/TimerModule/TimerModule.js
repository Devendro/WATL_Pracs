// Print  "Hello" every 500 milliseconds using the Timer Module. The  message should be printed exactly 10 times. Use SetInterval ,ClearInterval and SetTimeout methods.

let count = 0;

const intervalId = setInterval(() => {
  console.log('Hello');
  count++;

  if (count === 10) {
    clearInterval(intervalId);
  }
}, 500);


setTimeout(() => {
  console.log('Message after 8 seconds');
}, 8000);