// maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubarraySum([2, 3], 3); // null

const maxSubArraySum = (arr, num) => {
  //question
  // sum should be from consetive numbers.
  //implementation
  // if the number is greater than array length, return null
  //first find the sum of the numbers of an array equivalent to num
  // then create a maxSum variable to store the sum
  //loop over array starting from num
  //deduct the first element from max sum and add n+1
  //return maxSum

  const arrLength = arr.length;

  if (arrLength < num) return null;

  let maxSum = 0;

  //sum of first num length
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let numTotal = maxSum;

  for (let i = num; i < arrLength; i++) {
    let temp = 0;
    temp = numTotal - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, temp);
    numTotal = temp;
  }
  return maxSum;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubArraySum([2, 3], 3));
