let counter = 0;
let timerInterval;

function printMessage() {
  console.log(`Message ${counter + 1} - Printed every 10 seconds`);
  counter++;
}

module.exports = {
  startTimer: function () {
    timerInterval = setInterval(printMessage, 10000);
  },
  stopTimer: function () {
    clearInterval(timerInterval);
    console.log("Timer stopped after 10 iterations");
  },
};
