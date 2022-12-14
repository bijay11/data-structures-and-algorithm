// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(arr, num) {
  // if array is emtpy, return false

  if (!arr.length) return false;
  // create two pointers
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let tempAvg = (arr[pointer1] + arr[pointer2]) / 2;
    if (tempAvg === num) return true;
    if (tempAvg > num) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
  return false;
}

console.log("test averagePair", averagePair([1, 2, 3], 2.5));
console.log("test averagePair", averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log("test averagePair", averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log("test averagePair", averagePair([], 4));
