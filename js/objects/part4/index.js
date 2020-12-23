/* Отметить всех администраторов
Задан массив пользователей и массив идентификаторов тех пользователей, которые являются администраторами. Нужно отметить всех администраторов

Основные требования:
Ф-ция должна называться markAdmins и находиться в файле index.js
markAdmins принимает массив пользователей в первом аргументе и массив идентификаторов во втором аргументе
Ф-ция markAdmins должна создать новый массив пользователей, у которых будет свойство isAdmin на основе идентификаторов из массива adminIds
markAdmins не должна изменить исходный массив пользователей
Пример работы функции смотри в редакторе */

// input: arr(of objects), arr
// output: arr(of objects)

// algo
// 1. itarate array of objects - map
// 2. check if el is admin => add isAdmin: true or false

// Option 1
// function markAdmins(usersList, adminIds) {
//   return usersList.map(el => {
//     if (adminIds.includes(el.id)) {
//       return { ...el, isAdmin: true };
//     }
//     return { ...el, isAdmin: false };
//   });
// }

// // Option 2
// function markAdmins(usersList, adminIds) {
//   return usersList.map(el => {
//     return adminIds.includes(el.id) ?
//     { ...el, isAdmin: true } : { ...el, isAdmin: false };
//   });
// }

// // Option 3
// cosnt markAdmins = (usersList, adminIds) =>
//   usersList.map(el =>
//     adminIds.includes(el.id) ?
//       { ...el, isAdmin: true } :
//       { ...el, isAdmin: false });

// Option 4 - the best option
function markAdmins(usersList, adminIds) {
  return usersList.map(el => {
    const isAdmin = adminIds.includes(el.id);
    return { ...el, isAdmin };
  });
}

// examples
const adminIds = ['', '1', '3'];
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
console.log(markAdmins(users, adminIds));
// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
