const arr = [2, 0, 2, 1, 1, 0];
const arr1 = [1, 2, 0];
const arr2 = [2, 0, 1];
const arr3 = [1, 2, 2, 1, 2, 0];
const arr4 = [1, 0];
const arr5 = [8, 1, 2, 3, 4, 5, 6, 7];

var sortColors = function (nums) {
  let twoI = nums.length - 1;
  let zeroI = 0;
  for (let i = 0; i <= twoI; i++) {
    if (nums[i] == 0) {
      [nums[i], nums[zeroI]] = [nums[zeroI], nums[i]];
      zeroI++;
    } else if (nums[i] == 2) {
      [nums[i], nums[twoI]] = [nums[twoI], nums[i]];
      twoI--;
      i--;
    }
  }
  return nums;
};

console.log("test bubbleSort 4", sortColors(arr5));
