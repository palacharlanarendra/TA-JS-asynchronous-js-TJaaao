let display = document.querySelector('.display');

let source = document.querySelector('#source');

function handleChange(event) {
  console.log(event);
  document.querySelector('.display').innerHTML = '';
  let data2 = fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
    .then((res) => res.json())
    .then((userData) =>
      userData.forEach((data) => {
        console.log(data.newsSite, event.target.value);
        if (data.newsSite == event.target.value) {
          createUI(data);
        }
      })
    );
}
source.addEventListener('change', handleChange);

let data = fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
  .then((res) => res.json())
  .then((userData) => userData.forEach((data) => createUI(data)));

function createUI(arg) {
  let outer = document.createElement('div');
  let aside = document.createElement('aside');
  let articleImage = document.createElement('img');
  let article = document.createElement('article');
  let categoryPara = document.createElement('p');
  let articleHeading = document.createElement('h2');
  let readMore = document.createElement('a');

  outer.setAttribute('class', 'flex');
  readMore.innerText = 'READ MORE';
  articleImage.src = arg.imageUrl;
  articleHeading = arg.summary;
  categoryPara.innerText = arg.newsSite;
  readMore.href = arg.url;

  aside.append(articleImage);
  article.append(categoryPara, articleHeading, readMore);
  outer.append(aside, article);
  display.append(outer);
}
