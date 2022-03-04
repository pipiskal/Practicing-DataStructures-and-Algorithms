const waterBlocks = function (arr) {
  let sum = 0;
  let blocks = 0;
  let counter = 0;
  let max = 0;
  let tempmax = 0;

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
      console.log(`${arr[i]} < ${arr[i - 1]} && ${arr[i]} < ${arr[i + 1]}`);
      tempmax = Math.max(arr[i - 1], arr[i + 1]);
      max = Math.max(max, tempmax);
      console.log(`max is : ${max}`);
      blocks += Math.min(arr[i - 1], arr[i + 1]);
      console.log(`blocks are : ${blocks}`);
    } else {
      if (i === arr.length - 1) {
        // do nothing
      } else {
        tempmax = Math.max(arr[i - 1], arr[i + 1]);
        max = Math.max(max, tempmax);
        console.log(`max is : ${max}`);
        console.log(`tempMax is : ${max}`);
      }
    }

    if (max > arr[i]) {
      console.log(` i is : ${i}`);
      console.log(`max : ${max} > arr[i] : ${arr[i]}`);
      counter += 1;
      console.log(`counter is : ${counter}`);
      sum += arr[i];
      console.log(`sum is : ${sum}`);
    } else {
      blocks = blocks + (counter * max - sum);
      console.log(`blocks are : ${blocks}`);
      max = 0;
      counter = 0;
      sum = 0;
    }

    if (i === arr.length - 1) {
      break;
    }
    console.log("-------------------end of itteration------------------");
  }
  return `the water blocks are ${blocks}`;
};
// console.log(waterBlocks([4, 1, 0, 4, 1, 0, 3, 1, 0, 1, 4]));
console.log(waterBlocks([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
