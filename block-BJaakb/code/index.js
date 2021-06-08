let display = document.querySelector('.display');
let input = document.querySelector('input');

function handleChange(event) {
  if (event.keyCode === 13) {
    display.innerHTML = '';
    function fetch(url) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
          setTimeout(() => resolve(JSON.parse(xhr.response)), 5000);
        };
        xhr.onerror = () =>
          setTimeout(() => reject('Something went Wrong!'), 5000);

        xhr.send();
      });
    }

    let data = fetch(
      `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=PyPksXyG8aBNAVNpEk7cCM8uycMuuzBllmRX39o7E_M`
    )
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          display.innerHTML += `<img src="${data.results[i].urls.small}" alt="${data.results[i].alt_description}"/>`;
        }
      })
      .catch((error) => alert('check internet connection!'));
    input.value = '';
  }
}

input.addEventListener('keyup', handleChange);
