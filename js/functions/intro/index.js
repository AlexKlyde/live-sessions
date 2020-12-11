'use strict';

function getSenseOfLife() {
  console.log('42');
  // return 42;
}

// run func option 1
const res = getSenseOfLife();
console.log(res);

// run func option 2
console.log(getSenseOfLife());

/* функция sum должна принимать два числа и вернуть сумму */

function getSum(a, b) {
  return a + b;
}

//test function
console.log(getSum(10));
console.log(getSum(10, 2, 5));

// ф-ция sum должна принимать число 
// ф-ция sum должна вывести в консоль строку 'I am 34 years old'
// Где 34 - число, полученное в аргументах

function sum(a) {
  console.log('I am ' + a + ' years old');

  // return 100;
}

// test function
console.log(sum(34));

// function expression
const sumFunc = function (a, b) {
  return a + b;
}

console.log(sumFunc);
console.log(sumFunc(10, 20));

// arrow functions
const mult = (a, b) => {
  return a * b;
}

console.log(mult(10, 5));

// mult - function
// const res = mult(10, 5); res - number

const square = num => {
return num * num;
}

const square = num => num * num;

// test function
console.log(square(14));
console.log(square(6));

const 
