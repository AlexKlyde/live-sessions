const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  /* startTimer() {
    console.log('startTimer was called');

    function handler() {
      this.secondsPassed += 1;
      console.log(this.secondsPassed);
    }

    // input: func, num(ms)
    // output: num(id)
    const handlerWithContext = handler.bind(this);

    setInterval(handlerWithContext, 1000);
    // window.handler();
  }, */
  // Option 2
  startTimer() {
    console.log('startTimer was called');

    const timerId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }

      this.secondsPassed += 1;

      // console.log('timerID' + timerId);
      // console.log(this.secondsPassed);
    }, 1000);

    this.timerId = timerId;
  },

  getTime() {
    return this.secondsPassed < 10
    ? `${this.minsPassed}:0${this.secondsPassed}`
    : `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.timerId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();
console.log(timer.secondsPassed);

