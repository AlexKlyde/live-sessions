// Object.values();
// Object.keys();
debugger;
const buildObject = (keys, values) => {
  return keys.reduce((acc, key, index) => {
    // console.log('step ' + index);
    // console.log('acc ', acc);
    // console.log('key ' + key);
    return { ...acc, [key]: values[index] };
  }, {});

  // return keys.reduce(function callback(acc, key, index) {
  //   const value = values[index];

  //   acc[[key]] = value;

  //   return acc;
  // }, {});
};


// For loop example
// const buildObjectWithLoop = (keys, values) => {
//   const res = {};

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const value = values[i];

//     Object.assign(res, { [key]: value });
//   }

//   return res;
// };

// test
//const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];

// step1
// key = 'name', {} ==> {name: 'Bob'}

// step2 
// key = 'adress', {name: 'Bob'} ==> {name: Bob, address: 'Ukraine'}

// test func
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
// const result = buildObjectWithLoop(keys, values);
console.log(result)

console.log([1, null, () => {}, 'string'])