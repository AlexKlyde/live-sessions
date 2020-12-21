const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-555': {
    name: 'Bob',
    age: 34,
  },
};

// input: obj
// output: arr(of objects);

// algo
// 1. copy obj get object entries
// 2. map array
// 3. sort

// Draft

// const getCustomersList = obj => {
//   // input: obj
//   // output: arr
//   const entries = Object.entries(obj);
//   console.log(entries);

//   // input: callback
//   // output: arr
//   const resArr = entries.map((arr) => {
//     const resObj = arr[1];
//     console.log("array is ", arr);

//     console.log("resObj is ", resObj);

//     return { ...resObj, id: arr[0] };
//   });

//   console.log(resArr);

//   const resArrSorted = resArr.sort((a, b) => a.age - b.age);

//   console.log(resArrSorted)

//   return resArrSorted
// }

// option 1
// const getCustomersList = (obj) => {
//   // input: obj
//   // output: arr
//   return Object.entries(obj)

//   // input: callback
//   // output: arr
//   .map((arr) => {
//     return ({ ...arr[1], id: arr[0] })
//   })

//   .sort((a, b) => {
//      return a.age - b.age
//   });
// };

// Final
const getCustomersList = obj =>
  Object.entries(obj)
    .map(arr => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
// test func

console.log(getCustomersList(customers));

// destructing
const user = {
  name: 'Denis',
  run: () => {
    console.log('Run');
  },
};

function reactRender(obj) {
  const { name, run } = user;

  console.log(name);
  console.log(run);
}

reactRender(user);
