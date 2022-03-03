// Given an array of integers, return the indices  of the two numbers that add up
// to a given target

// Given number 11
// [1,3,7,9,2]    --> the numbers are 9 and 2

const twoSum = function (arr, givenNumber) {
  let sum = 0;
  let firstNumber;
  let secondNumber;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + arr[i + 1];
    if (sum === givenNumber) {
      firstNumber = arr[i];
      secondNumber = arr[i + 1];
      break;
    }
    return [firstNumber, secondNumber];
  }
};

console.log(twoSum([1, 3, 7, 9, 2]));
