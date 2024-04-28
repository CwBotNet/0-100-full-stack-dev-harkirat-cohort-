/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const result = new Promise((resolve, reject) => {
    if (n < 0) {
      reject("second must be greater than 0");
    } else {
      setTimeout(() => {
        resolve();
      }, n * 1000);
    }
  });

  return result.then(()=> console.log("done"));
}

module.exports = wait;
