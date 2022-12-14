// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates("a", "b", "c", "a"); // true

function areThereDuplicates(...rest) {
  // if only one args, return false
  if (rest.length === 1) return false;
  //create an object and add the values if duplicate
  const findDuplicateObj = {};

  for (const item of rest) {
    findDuplicateObj[item] = findDuplicateObj[item]
      ? findDuplicateObj[item] + 1
      : 1;
  }

  for (const key in findDuplicateObj) {
    if (findDuplicateObj[key] > 1) return true;
  }

  return false;
}

console.log("test areThereDuplicates", areThereDuplicates(1, 2, 3));
console.log("test areThereDuplicates", areThereDuplicates(1, 2, 2));
console.log("test areThereDuplicates", areThereDuplicates("a", "b", "c", "a"));
