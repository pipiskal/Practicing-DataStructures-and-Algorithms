// Given an array of integers, return the indices  of the two numbers that add up
// to a given target

// Given number 11
// [1,3,7,9,2]    --> the numbers are 9 and 2

const twoSum = function (arr, givenNumber) {
  let sum;
  let firstIndex;
  let secondIndex;
  if (!arr.length < 1) {
    for (let i = 0; i < arr.length; i++) {
      if (givenNumber - arr[i] > 0) {
        for (let j = i + 1; j < arr.length; j++) {
          sum = 0;
          sum = arr[i] + arr[j];
          if (sum === givenNumber) {
            firstIndex = i;
            secondIndex = j;
            return `index1 : ${firstIndex} - value ${arr[firstIndex]} , index2 : ${secondIndex} - value ${arr[secondIndex]}`;
          }
        }
      }
    }
  }
  return `there is no pair of numbers to match number ${givenNumber}`;
};

console.log(twoSum([1, 3, 7, 9, 2, 4, 5, 6, 7], 11));
