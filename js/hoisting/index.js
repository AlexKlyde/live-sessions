/* eslint-disable */

// hoisting example 1
console.log(message);
var message = 'Hoisting is here!';

// hoisting example 2
/* let a = 55;

if (a) {
  let a = 1;

  console.log(a);
} */

/* console.log(a);

var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a); */

/* var a;
a = 55;

if (a) {
  a = 1;

  console.log(a);
}

console.log(a); */

// hoisting example 3

var a = 77;

function print() {
  console.log(a);
  const a = 2;
}

print();

console.log(a);

/* var a
a = 77;

function print() {
  var a
  a = 2;
  console.log(a);
}

print();

console.log(a); */

/* run();

function run() {
  console.log('Run');
} */

/*
//put your code here
export function createLogger() {
  const messages = [];
  function warn(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }
  function error(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }
  function log(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }
  function getRecords(type) {
    const sorted = messages.sort((a, b) => a.dateTime < b.dateTime);
    return type ? sorted.filter(item => item.type === type);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
logger1.error('we have a problem');
logger1.error('error');
logger1.log('hello');

console.log(logger1.getRecords()); */

// const logger2 = createLogger();
// logger2.log('Hello2');
