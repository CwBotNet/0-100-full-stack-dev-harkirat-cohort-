const fs = require("fs");

let count = 0;

// setInterval counter
const Counter = () => {
  count += 1;
  console.log(count);
};

// setInterval(Counter, 1000);

// setTime counter
const setTimeCounter = () => {
  count++;
  console.log(count);
  setTimeout(Counter, 1000);
};

// Counter();

const fileReader = () => {
  fs.readFile("x.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log("file data: " + data);
  });
};

fileReader()

console.log("first thread")