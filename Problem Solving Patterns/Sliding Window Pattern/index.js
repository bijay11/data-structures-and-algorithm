const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;
const maxSubarraySum = (arr, num) => {
  const arrLength = arr.lengt;
  // if num is greater than arr.length return null
  if (num > arrLength) return null;
  //set two pointers with second pointer with three difference
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arrLength; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum(arr, num));
