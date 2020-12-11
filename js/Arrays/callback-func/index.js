/**
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
**/

// input: number, number, function
// output: undefined
function sum(from, to, printer) {
  let sum = 0;
  while (from < to) {
    sum += from;
    from++;
  }

  printer(sum)
}

// input: number, number, function
// output: undefined
function printResult(res) {
  console.log('result is: ' + res);
}

sum(10, 15, printResult)
