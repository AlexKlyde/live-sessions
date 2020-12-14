// input: num, num , ...
// output: num

// function multiply() {
//   return Object.values(arguments).reduce((acc, el) => acc * el);
// }

const multiply = (name, age, ...args) => {
  return args.reduce((acc, el) => acc * el);
}

console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// spread
const testArr = [3, 4, 4, 23, 32, 32, 32];

console.log(...testArr);

const testArrCopy = [...testArr];

function sum(a, b) {
  return a + b;
}

sum(testArr[0], testArr[1]);
sum(...testArr);
