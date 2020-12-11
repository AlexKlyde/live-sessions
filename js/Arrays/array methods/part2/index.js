// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// input: callback
// output: num or undefined
const findRes = numbersList.find(el => el % 2 === 1);
  

console.log(findRes);


/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// input: callback
// output: undefined

// input: num, ind, arr
// output: undefined
const numbersList = [5, 0, 8, 10, -4, 50, 220];
const forEachRes = numbersList.forEach(el => {
  if (el >= 0) {
    console.log(el);
  }
})
/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce
// input: callback, num (optinal) Object(optinal);
// output: number
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// option 1

// transactions.reduce((acc, val) => {
//   console.log('acc: ' + acc);
//   console.log('val ' + val);

//   if (val > 100) {
//     return acc + val;
//   } else {
//     return acc;
//   }
// }, 0);

// option: 2
const reduceRes = transactions.reduce((acc, val) => {
  return val > 100 ? acc + vel : acc;
}, 0);

// option: 3
const reduceRes = transactions.reduce((acc, val) => val > 100 ? acc + vel : acc, 0);


/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];

// input: callback
// output: arr
const sortRes = numbersList1.sort((a, b) => {
  return res = b - a;
});

console.log(sortRes)
// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

// Option 1

const numbersList2 = [6, 20, 33, 43, 8];

const sortResCopy = numbersList2.slice().sort((a, b) => {
  return res = b - a;
});


const sortResCopy = numbersList2.slice().sort((a, b) => b - a);

console.log(sortResCopy)
