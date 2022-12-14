//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6

const findLongestSubstring = (str) => {
  // if empty string.. return 0;
  // store the index and value of strings, if duplicate found, make the index to run loop after the duplicate is found..
  // count the length

  if (!str.length) return 0;
  let strObj = {};
  let pointer = 0;
  let longestSubstringCount = 0;
  let substringCount = 0;
  while (pointer < str.length) {
    if (str[pointer] in strObj) {
      pointer = strObj[str[pointer]];
      strObj = {};

      substringCount = 0;
    } else {
      strObj[str[pointer]] = pointer;
      substringCount++;
    }
    longestSubstringCount =
      longestSubstringCount > substringCount
        ? longestSubstringCount
        : substringCount;
    pointer++;
  }
  return longestSubstringCount;
};

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
