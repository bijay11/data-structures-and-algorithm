const longString = "loried loled";
let shortString = "lol";
function nativeStringSearch(longStr, shortStr) {
  //if both the string is empty return 1
  if (!longStr.length && !shortStr.length) return 1;

  //if longStr is shorter than shortStr return 0
  if (longStr.length < shortStr.length) return 0;

  //declare count and set it to 0
  // declare left at 0 and right at the length of short Str
  let count = 0;
  let shortStrLength = shortStr.length;
  let left = 0;
  let right = shortStrLength;

  while (right <= longStr.length) {
    let tempStr = longStr;
    let strToMatch = tempStr.slice(left, right);

    if (strToMatch === shortStr) {
      count++;
      left += shortStrLength;
      right += shortStrLength;
    }
    left++;
    right++;
  }
  return count;

  //create while loop and loop to the length of shortStr, if it doesnt match, make left and right move 1
  //if it matches, incresae left and right with the length of short Str
}

console.log(
  "test nativeStringSearch",
  nativeStringSearch(longString, shortString)
);
