/* eslint-disable max-classes-per-file */
class Sportsman {
  constructor(firstName) {
    console.log(this);

    this.firstName = firstName;

    console.log(this)
  }

  // get name() {
  //   if (this.name.length < 3) {
  //     throw new Error('Invalid name');
  //   }

  //   return this._name
  // }

  run() {
    console.log(`${this.firstName} is running`);
  }
}

class Swimmer extends Sportsman{
  constructor(firstName, style) {
    // can lose context - example 1
    super(firstName);
    this.style = style;
  }

  swim = () => {
    console.log(`${this.firstName} is swimming ${this.style}`);
  }

  testFunc() {
    setTimeout(this.swim, 3000);
  }
}

/* function setTimeout(func, ms) {
  // ....

  const window = new Window();
  window.func();
} */

// testing
const sportsman = new Sportsman('Alex');
const swimmer = new Swimmer('user', 'some style');

swimmer.firstName;
swimmer.swim();

// can lose context - example 2
// const swimFunc = swimmer.swim;
// swimFunc();

// can lose context - example 3
// console.log('Static call');
// Swimmer.swim();

// can lose context - example 4
swimmer.testFunc()

const obj = {
  name: 'Test',
  run() {
    console.log();
  }
};

// ...new Object();

// console.log(obj);
