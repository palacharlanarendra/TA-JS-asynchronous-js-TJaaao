let display = document.querySelector('.display');
let catDisplay = document.querySelector('.display2');
let input = document.querySelector('.input');

function fetch(event, url, audience) {
  console.log(event);
  let item = new XMLHttpRequest();

  item.open('GET', url);

  item.onload = function () {
    let itemData = JSON.parse(item.response);
    createUI2(itemData, audience);
  };
  item.send();
}

function createUI(data) {
  display.innerHTML += `<img class="avatar_pic" src=${data.avatar_url} alt="avatar URL"/>
    <h2>${data.name}</h2>
    <p>@${data.login}</p>
  `;
}
function createUI2(data, audience) {
  console.log(data[0].avatar_url);
  let p = document.createElement('p');
  p.innerText = `${audience}`;
  let div = document.createElement('div');
  display.append(p, div);
  for (let i = 0; i < 5; i++) {
    div.innerHTML += `<img class="audience_images" src=${data[i].avatar_url} alt="avatar URL"/>
  `;
  }
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);

    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      createUI(userData);
    };
    xhr.onerror = function () {
      console.log('Something went wrong...');
    };
    xhr.onloadstart = function () {
      console.log('starting');
    };
    xhr.onloadend = function () {
      console.log('ending');
    };
    xhr.onprogress = function () {
      console.log('data loading....s');
    };
    xhr.send();
    fetch(
      event,
      `https://api.github.com/users/${event.target.value}/followers`,
      'Followers'
    );
    fetch(
      event,
      `https://api.github.com/users/${event.target.value}/following`,
      'Following'
    );
  }
}

input.addEventListener('keyup', handleChange);

let getNewCatBtn = document.querySelector('.getNewCat');

getNewCatBtn.addEventListener('click', displayCat);

function catFetch(event, url) {
  console.log(event);
  let item = new XMLHttpRequest();

  item.open('GET', url);

  item.onload = function () {
    let itemData = JSON.parse(item.response);
    createCatUI(itemData);
  };
  item.send();
}

function displayCat(event) {
  catFetch(
    event,
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`
  );
}
function createCatUI(itemData) {
  catDisplay.innerHTML = `<img class="catPhoto" src="${itemData[0].url}"/>`;
}
