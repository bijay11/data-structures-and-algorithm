function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  // if Obj is null, return 0;
  // recursive function to find if the key is an obj, if it is loop through
  // if the key is a number and is even, add to a variable
  // if the key is an object, pass it to recursive function

  if (Object.keys(obj).length === 0) return 0;
  let evenSum = 0;
  // if none of the key values are not object, terminalte the recursive

  const helper = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        evenSum += obj[key];
      }
      if (typeof obj[key] === "object" && obj[key] !== "null") {
        helper(obj[key]);
      }
    }
  };

  helper(obj);
  return evenSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
