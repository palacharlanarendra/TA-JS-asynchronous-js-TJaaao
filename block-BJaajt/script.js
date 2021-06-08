let display = document.querySelector('.display');
let input = document.querySelector('.input');

function createUI(data) {
  display.innerHTML = `<img src=${data.avatar_url} alt="avatar URL"/>
    <h2>${data.login}</h2>
    <p>${data.created_at}</p>
    <p>${data.updated_at}</p>
      <ul>
          <li>Following : ${data.following}</li>
          <li>Followers : ${data.followers}</li> 
      </ul>
  `;
}

function handleChange(event) {
  console.log(event);
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
  }
}

input.addEventListener('keyup', handleChange);
