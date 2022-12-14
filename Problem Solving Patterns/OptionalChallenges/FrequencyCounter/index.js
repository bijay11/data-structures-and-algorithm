// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false

const sameFrequency = (num1, num2) => {
  //change the number to string
  const strNum1 = "" + num1;
  const strNum2 = "" + num2;

  //verify the length
  // if length is not same, return false
  if (strNum1.length !== strNum2.length) return false;

  // create two objects
  let strNum1Obj1 = {};
  let strNum1Obj2 = {};
  //store repetition count
  for (const num of strNum1) {
    strNum1Obj1[num] = strNum1Obj1[num] ? strNum1Obj1[num] + 1 : 1;
  }
  for (const num of strNum2) {
    strNum1Obj2[num] = strNum1Obj2[num] ? strNum1Obj2[num] + 1 : 1;
  }
  console.log("test strNum1Obj1", strNum1Obj1);
  console.log("test strNum1Obj2", strNum1Obj2);

  // compare keys and then values, if matches return true else false
  for (let key in strNum1Obj1) {
    if (!(key in strNum1Obj2)) return false;
    if (strNum1Obj1[key] !== strNum1Obj2[key]) return fals;
  }
  return true;
};

console.log("test sameFrequency", sameFrequency(182, 281));
console.log("test sameFrequency", sameFrequency(34, 14));
