let input = document.querySelector('.todos');
let items_left = document.querySelector('.items_left');
let clearBtn = document.querySelector('.clearBtn');
let arrayTodos = [];

let url = 'https://sleepy-falls-37563.herokuapp.com/api/todo';

function main() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => createUI(data.todos));
}

//To display the Todos on the screen.
fetch(url)
  .then((res) => res.json())
  .then((data) => createUI(data.todos));

function handleKey(event) {
  if (event.keyCode === 13 && event.target.value) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(() => main());

    event.target.value = '';
  }
}

function handleClick(event) {
  let id = event.target.dataset.id;
  fetch(url + `/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => main());

  items_left.innerText = `${arrayTodos.length} items left`;
}
function handleCheckbox(event, title, id) {
  console.log(event);
  console.log(event.target.innerText);
  let data = {
    todo: {
      title: title,
      isCompleted: event.target.checked,
    },
  };
  fetch(url + `/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then(() => main());
}

function handleChange(event, title, id) {
  console.log(event.target.innerText);
  let data = {
    todo: {
      title: event.target.innerText,
      isCompleted: event.target.checked,
    },
  };
  fetch(url + `/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

//function createUI will create the UI.
function createUI(data) {
  console.log(data);
  let ul = document.querySelector('.display');
  ul.innerHTML = '';

  data.forEach((element) => {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('checkbox_style');
    input.addEventListener('input', () => {
      handleCheckbox(event, element.title, element._id);
    });
    input.checked = element.isCompleted;
    let label = document.createElement('label');
    label.innerText = element.title;

    let span = document.createElement('span');
    contenteditable = 'true';
    label.setAttribute('contenteditable', 'true');
    span.setAttribute('data-id', element._id);
    span.innerText = 'x';
    span.addEventListener('click', handleClick);
    label.addEventListener('blur', () => {
      handleChange(event, element.title, element._id);
    });
    items_left.innerText = `${arrayTodos.length} items left`;

    let li = document.createElement('li');
    li.append(input, label, span);
    ul.append(li);
  });
}

input.addEventListener('keyup', handleKey);
