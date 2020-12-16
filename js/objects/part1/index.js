// input: obj, obj
// output: obj

const obj1 = {
  name: 'Alex',
  lastName: 'Kalaida',
  age: 33,
};

const obj2 = {
  name: 'Tom',
  lastName: 'Foster',
  city: london,
};

const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);

// test func
console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));


const mergeObjectsV3 = (obj1, obj2) => ({ ...obj1, ...obj2 });

const mergeObjectsV4 = (obj1, obj2) => ({ ...obj2, ...obj1 });

// test func
console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));


// pass be reference

const testObj1 = {
  name: Tom,
  age: 17,
}

const testObj2 = testObj1;

testObj2.age = 50;

console.log(testObj1);
console.log(testObj2);

const testArr1 = [4, 5, 6];
const testArr2 = testArr1;

testArr2[1] = 100;

console.log(testArr1);
console.log(testArr2);

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  return Object.assign(userData, { id: userId });
}

function addPropertyV2key(userData, keyName, userId) {
  return Object.assign(userData, { [keyName]: userId });
}

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

const addPropertyV4 = (userData, userId) => {
    return {...userData, id: userId };
}




const user = {
  name: 'Sam',
};

console.log(addPropertyV3(user, '1234567'));
console.log(addPropertyV2key(user, 'id', '1234567'));




