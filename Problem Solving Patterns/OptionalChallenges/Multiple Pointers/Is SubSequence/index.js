// isSubsequence("hello", "hello world"); // true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "abracadabra"); // true
// isSubsequence("abc", "acb"); // false (order matters)

const isSubsequence = (str1, str2) => {
  //if string is empty, return true
  if (!str1.length && !str2.length) return true;
  // set two pointers
  let str1Pointer = 0;
  let str2Pointer = 0;

  //my solution
  //   while (str2Pointer < str2.length) {
  //     if (str1[str1Pointer] === str2[str2Pointer]) {
  //       str1 = str1.replace(str1[str1Pointer], " ");
  //       str1Pointer++;
  //       str2Pointer++;
  //     } else {
  //       str2Pointer++;
  //     }
  //   }

  while (str2Pointer < str2.length) {
    if (str2[str2Pointer] === str1[str1Pointer]) str1Pointer++;
    if (str1Pointer === str1.length) return true;
    str2Pointer++;
  }

  return str1.split(" ").join("").length === 0;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
