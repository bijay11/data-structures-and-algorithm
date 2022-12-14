const arr = [1, 1, 1, 1, 1, 2];
const arr1 = [-2, -1, -1, 0, 1];
const arr2 = [];

const countUniqueValues = (arr) => {
  if (!arr.length) return 0;
  if (arr.length === 1) return 1;
  //Solution 1
  // let obj = {};
  // for (const item of arr) {
  //   obj[item] = obj[item] ? obj[item] + 1 : 1;
  // }
  // const uniqueCount = Object.keys(obj).length;
  // return uniqueCount;

  // Solution 2
  // let uniqueCount = 1;
  // let pointer = 0;
  // let temp = arr[0];
  // while (pointer < arr.length) {
  //   if (arr[pointer] === temp) {
  //     pointer++;
  //   } else {
  //     uniqueCount++;
  //     temp = arr[pointer];
  //   }
  // }

  // return uniqueCount;

  //Solution 3
  // return [...new Set(arr)].length;

  //Solution 4
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return i + 1;
};

console.log("test countUniqueValues", countUniqueValues(arr));
console.log("test countUniqueValues", countUniqueValues(arr1));
