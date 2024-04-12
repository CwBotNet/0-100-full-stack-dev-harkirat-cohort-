// let count = 0;

// for (let i = 0; i <= 100; i++) {
//   console.log(count);
//   count++;
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 77];

const evenNumberOddNumber = () => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log("even number " + arr[i]);
    } else {
      console.log("odd number " + arr[i]);
    }
  }
};

const biggestNumberFinder = () => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= arr.length - 1) {
      console.log("The biggest number is " + arr[i]);
    }
  }
};

biggestNumberFinder();

// evenNumberOddNumber();
