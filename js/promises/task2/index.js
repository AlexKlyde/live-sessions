// algo
// 1. addEventHandler
// 2. read form
// 3. make POST request
// 4. validate user form

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

const user = {
  email: 'alexeykalayda@gmail.com',
  firstName: 'Aleksei',
  lastName: 'Kalaida',
  age: 33,
  city: 'Kyiv',
};

const userJson = JSON.stringify(user);
const newUser = JSON.parse(userJson)
// input: url, object
// output: promises

fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  // input: callback
  // output: promise
  .then(response => response.json())
  .then(body => console.log(body));
