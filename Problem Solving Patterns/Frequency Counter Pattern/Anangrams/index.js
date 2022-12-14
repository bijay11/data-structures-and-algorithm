const validAnagram = (str1, str2) => {
  //if string is empty, can we return true?
  if (!str1.length && !str2.length) return true;
  //if length is not equal, retrun false
  if (str1.length !== str2.length) return false;
  // create two objects for each str
  let str1Obj1 = {};
  let str1Obj2 = {};
  //loop through strings to count the number of time it repeats.
  for (const letter of str1) {
    str1Obj1[letter] = str1Obj1[letter] ? str1Obj1[letter] + 1 : 1;
  }
  //do the same for next str

  for (const letter of str2) {
    str1Obj2[letter] = str1Obj2[letter] ? str1Obj2[letter] + 1 : 1;
  }

  // check if both object has same keys and values.

  for (let letter in str1Obj1) {
    // first check if all keys are same
    if (!(letter in str1Obj2)) return false;

    // check if all the values matches
    if (str1Obj1[letter] !== str1Obj2[letter]) return false;
  }
  return true;
};

console.log("test validAnagram", validAnagram("anagram", "nagaram"));
