// input: arr, func
// output: arr

// callback
// input: arr(el), index - optinal, arr - optional
// output: arr

// algo
// 1. Iterate array
// 2. apply callback func for every element
// 3. add el to result

const mapArrayElements = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result
};

// test func
const testArr = [5, 6, 10, -2, 44, 5];

const testCallback = (el, ind, arr) => el * 2;

const res = mapArrayElements(testArr, testCallback);
console.log(res);