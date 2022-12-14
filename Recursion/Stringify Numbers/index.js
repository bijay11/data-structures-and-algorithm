// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const stringifyNumbers = (obj) => {
  if (Object.keys(obj).length === 0) return null;
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = "" + obj[key];
    } else if (
      typeof obj[key] === "object" &&
      typeof obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

console.log("test stringifyNumbers", stringifyNumbers(obj));
