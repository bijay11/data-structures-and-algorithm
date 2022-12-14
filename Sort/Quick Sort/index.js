const arr = [2, 0, 2, 1, 1, 0];
const arr1 = [1, 2, 0];
const arr2 = [2, 0, 1];
const arr3 = [1, 2, 2, 1, 2, 0];
const arr4 = [1, 0];
const arr5 = [8, 1, 2, 3, 4, 5, 6, 7];
const arr6 = [4, 8, 2, 1, 5, 7, 6, 3];

const pivot = (arr, start = 0, end = arr.length - 1) => {
  if (arr.length <= 1) return arr;
  // create a pivot point i.e. start of an array
  let pivot = arr[start];
  // create swap Index
  let swapIdx = start;

  //swap method

  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  // create a for loop and start it with start +1 since we dont want to compare the number with same number
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log("test quickSort", quickSort(arr6));
