/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

for (let i = 0; i < 5; i++) {
  console.log('Hello');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  let weight = 100;
  let count = 0;

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
    console.log(weight);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function countMessage() {
    count++;
    console.log(count + 'was sent');
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    countMessage,
  };
}

const messanger1 = createMessenger();
messanger1.setMessage('Happy new Year!')
messanger1.sendMessage('FE-15')
// clousere is created
messanger1.countMessage();
messanger1.countMessage();
messanger1.countMessage();

const messanger2 = createMessenger();
messanger2.setMessage('Merry Christmass!');
messanger2.sendMessage('Gromcode');
messanger2.countMessage();
messanger2.countMessage();
messanger2.countMessage();


// messanger.sendMessage()
// run();

// global lex environment
/* {
  envirenmentRecords: {
    message: 'Test',
      weight: 55,
      run: func,
      createMessenger: func;
  },

  outer: null
} */

/* Loop lex environment
{
  envirenmentRecords: {
    i: 0,
  }
  outer: global
}
*/

/* sendMessage lex environment 
{
  envirenmentRecords: {
  
}

/* createMessenger lex environment 
{
  envirenmentRecords: {
    message: 'T',
    sender: '',
    ssendMessage: func,
    weight: 100,
    ...
  },
}
*/