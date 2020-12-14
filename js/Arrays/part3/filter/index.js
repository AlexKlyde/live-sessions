// input: arr, func
// output: arr

// callback
// input: num (el), num (index - optinal), arr (optional)
// output: bool

// algo
// 1. Iterate array
// 2. apply callback func for every element
// 3. if callback return true - add el to result

// option 1
// const filterArray = (arr, callback) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const fitsCondition = callback(arr[i], i, arr);

//     if (fitsCondition) {
//       result.push(arr[i]);
//     }
//   }
  
//   return result
// };

// Final solution
const filterArray = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result
};

// test func
const testArr = [5, 6, 10, -2, 44, 5];
// const testCallback = (el, ind, arr) => el > 5;
const testCallback = (el, ind, arr) => ind > 3;

const res = filterArray(testArr, testCallback);
console.log(res);