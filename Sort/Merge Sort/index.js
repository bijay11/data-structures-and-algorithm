const arr = [2, 0, 2, 1, 1, 0];
const arr1 = [1, 2, 0, 3, 7];
const arr2 = [2, 0, 1];
const arr3 = [1, 2, 2, 1, 2, 0];
const arr4 = [1, 0];
const arr5 = [8, 1, 2, 3, 4, 5, 6, 7];
const arr6 = [10, 24, 76, 73];

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort(arr6));
