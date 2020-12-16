// const TIME_TO_GO = 10;
// const MAGIC_NUMBER = 15;

// Withdraw

// bad
// const withdraw = (clients, balances, client, amount) => {
//   const ind = clients.indexOf(client);
//   if (amount > balances[ind]) {
//     return -1;
//   } else if (amount <= balances[ind]) {
//     const result = [];
//     balances.forEach(num => {
//       if (num === balances[ind]) {
//         result.push(num - amount);
//       } else {
//         result.push(num);
//       }
//     });
//     return result[ind];
//   }
// };

// good
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (amount > balances[ind]) {
    return -1;
  }

  balances[index] -= amount;
  return balances[index];
}

// bad
// function withdraw(clients, balances, client, amount) {
//   let indexOfTheElementClient = clients.indexOf(client);
//   let result;
//   if (clients.includes(client) && balances[clients.indexOf(client)] - amount > 0) {
//     balances.splice(indexOfTheElementClient, 1, balances[indexOfTheElementClient] - amount);
//     return result = balances[indexOfTheElementClient];
//   }
//   return -1;
// }

// good
function withdraw(clients, balances, client, amount) {
  let clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

// bad
// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);
//   const balanceOfClient = balances[indexOfClient];
//   if (amount > balanceOfClient) {
//     return -1;
//   }
//   return balanceOfClient - amount;
// };

// good
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  return amount > balances[indexOfClient] ? -1 : balances[indexOfClient] - amount;
};


// Масссив случайных чисел

// good
function getRandomNumbers(len, start, end) {
  if (Math.abs(end - start) < 1) {
    return null;
  }

  const min = Math.ceil(start);
  const max = Math.floor(end);

  return Array(len).fill().map(() =>
    Math.floor(Math.random() * (max - min) + min));
}
