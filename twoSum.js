// Given an array of integers, return the indices  of the two numbers that add up
// to a given target

// Given number 11
// [1,3,7,9,2]    --> the numbers are 9 and 2

const twoSum = function (arr, givenNumber) {
  let sum = 0;
  let firstNumber;
  let secondNumber;
  for (let i = 0; i < arr.length - 1; i++) {
    sum = arr[i] + arr[i + 1];
    if (sum === givenNumber) {
      console.log(
        `index : ${i} , value : ${arr[i]}  +  index : ${i + 1} , value : ${
          arr[i + 1]
        }  `
      );
      firstNumber = arr[i];
      secondNumber = arr[i + 1];
      return [firstNumber, secondNumber];
    }
  }
  return `there is no such number`;
};

console.log(twoSum([1, 4, 7, 9, 2, 4, 5, 6, 7], 11));
