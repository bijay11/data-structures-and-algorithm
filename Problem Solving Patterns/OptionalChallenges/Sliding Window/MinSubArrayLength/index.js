// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52

// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

const minSubArrayLen = (arr, num) => {
  // if empty array, return null
  //set two pointers
  //create while loop, keep adding numbers till the sum is greater or equal to num
  //if greater, move the pointer and substract the first arr and then add the n +1

  if (!arr.length) return null;

  let sum = 0;
  let smSubArr = [];
  for (let item of arr) {
    sum += item;
    smSubArr.push(item);
    if (sum >= num) break;
  }

  let tempSum = 0;
  let tempArr = [];
  for (let i = smSubArr.length; i < arr.length; i++) {
    tempSum += arr[i];
    tempArr.push(arr[i]);
    if (tempSum >= num && tempArr.length < smSubArr.length) {
      smSubArr = tempArr;
      tempSum = 0;
      tempArr = [];
    }
  }

  return smSubArr.length;
};

console.log("test minSubArrayLen", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log("test minSubArrayLen", minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(
  "test minSubArrayLen",
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
);
