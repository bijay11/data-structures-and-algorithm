const arr = [2, 0, 2, 1, 1, 0];
const arr1 = [1, 2, 0];
const arr2 = [2, 0, 1];
const arr3 = [1, 2, 2, 1, 2, 0];
const arr4 = [1, 0];
const arr5 = [8, 1, 2, 3, 4, 5, 6, 7];

const insertionSort = (arr) => {
  const arrLength = arr.length;
  if (!arrLength || arrLength === 1) return arr;

  for (let i = 1; i < arrLength; i++) {
    var currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j] = arr[j + 1];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
};

console.log("test insertionSort", insertionSort(arr));
