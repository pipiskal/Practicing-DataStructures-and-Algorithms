/*
You are given an array of positive integers where
each integer represents the height of a vertical line
on a chart. FInd two lines which together with the x-axis forms
a container that would hold the greatest amount of water.
Return the area of water it would hold
*/

// [1,8,6,2,9,4]
const checkHighest = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const checkWater = function (arr) {
  let maxWater = 0;
  let tempSum = 0;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        if (j - i - 1 === 0) {
          tempSum = arr[i] * (j - i);
          maxWater = checkHighest(maxWater, tempSum);
        } else {
          tempSum = arr[i] * (j - i - 1);
          maxWater = checkHighest(maxWater, tempSum);
        }
      }
      if (arr[i] > arr[j]) {
        if (j - i - 1 === 0) {
          tempSum = arr[j] * (j - i);
          maxWater = checkHighest(maxWater, tempSum);
        } else {
          tempSum = arr[j] * (j - 1 - i);
          maxWater = checkHighest(maxWater, tempSum);
        }
      }
    }
  }
  return maxWater;
};

console.log(checkWater([10, 11, 6, 2, 9, 7]));
console.log(checkWater([1, 8, 6, 2, 9, 4]));

console.log(checkWater([10, 9, 1, 1, 1, 1]));
