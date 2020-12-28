const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    window.intervId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
        console.log(this.minsPassed)
      }

      this.secondsPassed += 1;
    }, 1000)
  },

  counter() {
    this.secondsPassed += 1;
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(window.intervId);
  },

  resetTimer() {
    
  },
}