let display = document.querySelector('.display');
let objectData = [];
let modalContent = document.querySelector('.modal-content');
let modalList = document.querySelector('.modal-list');
let promise = fetch('https://www.anapioficeandfire.com/api/books')
  .then((res) => res.json())
  .then((userData) => userData.forEach((elem) => createMainUI(elem)));

function createMainUI(arg) {
  console.log(arg);
  let article = document.createElement('article');
  let heading = document.createElement('h2');
  let authorName = document.createElement('p');
  let characterBtn = document.createElement('button');

  heading.innerText = arg.name;
  authorName.innerText = arg.authors[0];
  characterBtn.innerText = `Show Characters (${arg.numberOfPages})`;
  article.setAttribute('class', 'flex-box');
  characterBtn.setAttribute('id', 'myBtn');
  characterBtn.addEventListener('click', () => {
    createModalData(arg.characters);
  });

  article.append(heading, authorName, characterBtn);
  display.append(article);
}

function createModalData(data) {
  modalList.innerHTML = '';
  Promise.all(
    data.map((elem) => {
      return fetch(elem).then((res) => res.json());
    })
  ).then((res) => {
    res.forEach((elem) => {
      createModalUI(elem);
    });
  });
}

function createModalUI(data) {
  let preLoader = document.createElement('img');
  preLoader.src = './images/Spinner-1s-200px.gif';

  let modal = document.getElementById('myModal');
  let btn = document.getElementById('myBtn');
  let span = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';
  span.onclick = function () {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  let li = document.createElement('li');
  li.innerText = `${data.name} : ${data.aliases[0]}`;
  modalList.append(li);
}
