// input: function, context, arguments
// output: function
// option 2
/* const bind = (fn, context, ...rest) => {
  return (...args) => {
    const uniqId = Date.now().toString(); 

    context[uniqId] = fn;

    const result = context[uniqId](...rest.concat(args));

    delete context[uniqId];
    return result;
  }
}

bind(info, person, '12345', 'alex@gmail.com') */

function printMessage(country, city) {
  // console.log(this);

  // console.log(this.firstName);
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`)
}

const user = {
  firstName: 'Alex',
  age: 33,
};
// fix context
// user.printMessage = printMessage;
// user.printMessage('Ukraine', 'Kyiv');

// printMessage('Ukraine', 'Kyiv');


// input: context, args
// output: func
// .bind()


// 1
// const printMessageBinded = printMessage.bind(user, 'Germany', 'Berlin');
// printMessageBinded();

// 2 
// printMessage.bind(user, 'Germany', 'Berlin')();

// 3
// const printMessageBinded = printMessage.bind(user, 'Germany');
// printMessageBinded('Berlin');

// 4
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Germany', 'Berlin');

// 5
// console.dir(printMessage);
// printMessage.bind(user)('Germany', 'Berlin');


// option 1
// input: func, context, args
// output: func
// function myBind(func, context, ...args) {
//   return func.bind(context, ...args);
// }

// const printMessageBinded = myBind(printMessage, user);
// printMessageBinded('Germany', 'Berlin');

// Option 2
// input func, obj, ...args
// output: func

// function myBind(func, context, ...args) {
//   // .call
//   return function (...rest) {
//     return func.call(context, ...args.concat(rest));
//   };
// }

// const printMessageBinded = myBind(printMessage, user);
// printMessageBinded('Germany', 'Berlin');

// Option 3 - using custom js
function myBind(func, context, ...args) {
  return function (...params) {
    const contextCopy = { ...context };
    contextCopy.tempFunc = func;
    contextCopy.tempFunc(...args, ...params)
  };
}

const printMessageBinded = myBind(printMessage, user);
printMessageBinded('Germany', 'Berlin');

console.log(user);
