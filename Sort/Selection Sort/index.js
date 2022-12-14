const arr = [2, 0, 2, 1, 1, 0];
const arr1 = [1, 2, 0];
const arr2 = [2, 0, 1];
const arr3 = [1, 2, 2, 1, 2, 0];
const arr4 = [1, 0];
const arr5 = [8, 1, 2, 3, 4, 5, 6, 7];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return [arr[i], arr[j]];
};

const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};

console.log("test", selectionSort(arr));
console.log("test", selectionSort(arr1));
console.log("test", selectionSort(arr2));
console.log("test", selectionSort(arr3));
