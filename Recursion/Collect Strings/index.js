// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const collectStrings = (obj) => {
  if (!Object.keys(obj).length) return [];

  let stringArr = [];

  const helper = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        stringArr.push(obj[key]);
      } else if (typeof obj[key] === "object" && obj[key] !== "null") {
        helper(obj[key]);
      }
    }
  };
  helper(obj);
  return stringArr;
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
