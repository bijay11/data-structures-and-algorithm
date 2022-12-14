// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirstLetter = (item) =>
  item.charAt(0).toUpperCase() + item.slice(1);

function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  if (!array.length) return;

  if (array.length === 1) return [capitalizeFirstLetter(array[0])];

  // solution using map
  // return array.map((item) => item.toUpperCase());

  //using recursion - my Solution
  //   let tempArr = [];

  //   const helper = (array) => {
  //     if (!array.length) return;
  //     let item = array.pop();
  //     item = capitalizeFirstLetter(item);
  //     tempArr = [item, ...tempArr];
  //     helper(array);
  //   };
  //   helper(array);
  //   return tempArr;

  //using recursion - colt Solution
  let res = capitalizeFirst(array.slice(0, -1));
  const [item] = array.slice(array.length - 1);
  res.push(capitalizeFirstLetter(item));
  console.log("test res", res);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
