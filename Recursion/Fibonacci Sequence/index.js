// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (num) => {
  //set initial arr
  let initialArr = [1, 1];

  const helper = (num) => {
    //if the length of arr is greater than num, return
    if (initialArr.length === num) return;
    initialArr.push(
      initialArr[initialArr.length - 1] + initialArr[initialArr.length - 2]
    );
    helper(num);
  };
  helper(num);

  return initialArr[initialArr.length - 1];
};

console.log("test fib", fib(4));
console.log("test fib", fib(10));
