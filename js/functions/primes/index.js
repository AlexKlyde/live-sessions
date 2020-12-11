//1. Learn requirement
// 2. Create step by step algo
// 3. Write draft solution & testing
// 4. Refactoring & final -> final solution

// algo
// 1. itarate from 1 to n
// 2. check if NUM is prime or not
//  2.1 itarate numbers from 2 to num - 1

// input: number
// output: boolean

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
}

function getPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

console.log(getPrime(7));