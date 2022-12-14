function capitalizeWords(words) {
  // add whatever parameters you deem necessary - good luck!
  if (words.length === 1) return [...words[0].toUpperCase()];

  //Solution 1 using map function
  // return words.map((item) => item.toUpperCase());

  //Solution 2 using recursions

  const upperCaseItem = words.pop().toUpperCase();
  return [...capitalizeWords(words), upperCaseItem];
}

let words = ["i", "am", "learning", "recursion"];
let oneWord = ["i"];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log("test capitalizeWords", capitalizeWords(words));
