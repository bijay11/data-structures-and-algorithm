const binarySearch = (arr, value) => {
  // check arr length, if it is empty, return -1;
  if (!arr.length) return -1;
  // if arr length is 1 and the value doesnt match, return -1
  if (arr.length === 1 && arr[0] !== value) return -1;
  if (arr.length === 1 && arr[0] === value) return 0;
  //declare left[0] and right pointer[arr.length-1], and median
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;

  //create for loop and check if the median matches the value, if it matches return index

  // for (let i = left; left <= right; i++) {
  //   console.log("test ");
  //   let median = Math.floor((left + right) / 2);
  //   if (value === arr[median]) return median;
  //   if (value < arr[median]) {
  //     right = median - 1;
  //   } else {
  //     left = median + 1;
  //   }
  // }

  // Solution using while loop
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  //if the median is smaller than the value, then make the right pointer median -1;
  //if the median is larger than the value, then make the left pointer median+1
  // if the number is not found after the loop is complete, return -1
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
