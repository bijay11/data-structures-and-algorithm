function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!

  return arr.reduce(
    (a, b) => (Array.isArray(b) ? [...a, ...flatten(b)] : [...a, b]),
    []
  );
}

console.log("test flatten", flatten([1, 2, 3, [4, 5]]));
console.log("test flatten", flatten([1, [2, [3, 4], [[5]]]]));
console.log("test flatten", flatten([[1], [2], [3]]));
console.log("test flatten", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
