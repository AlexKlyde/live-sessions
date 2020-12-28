const items = document.querySelectorAll('.list-item');

/* console.log(items);

function handleClick() {
  console.log('clicked');
}

items.forEach(item => {
  item.addEventListener('click', handleClick);
})
 */
// Option 2
const list = document.querySelector('.list');

function handleListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  };

  console.log(event.target.innerText);
}

list.addEventListener('click', handleListClick)

// Web flow !!!
// 1. get data from server ===> [{...}, {...}, {...}]
// 2. render (!!!)
// 3. handle event - update [{...}, {...}, {...}], don't touch DOM
// 4. re render


// algo
// 1. find task in array 
// 2. update done field
// 3. call render

function handleTaskClick(event) {
  // to do
}

