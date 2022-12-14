// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (num) => {
  // if num is zero, return 0
  if (num === 1) return 1;
  // add num + call recursiveRange with num -1
  return num + recursiveRange(num - 1);
};

console.log("etst recursiveRange", recursiveRange(6));
console.log("etst recursiveRange", recursiveRange(10));
