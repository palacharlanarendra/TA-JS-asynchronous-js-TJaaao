let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30';
let data = fetch(url).then((res) => res.json());
let display = document.querySelector('.display');

let source = document.querySelector('#source');

function handleChange(event) {
  console.log(event);
  document.querySelector('.display').innerHTML = '';

  data.then((userData) =>
    userData.forEach((data) => {
      console.log(data.newsSite, event.target.value);
      if (data.newsSite == event.target.value) {
        createUI(data);
      }
    })
  );
}
source.addEventListener('change', handleChange);

data.then((userData) => userData.forEach((data) => createUI(data)));

function createUI(arg) {
  console.log(arg);
  let outer = document.createElement('div');
  let aside = document.createElement('aside');
  let articleImage = document.createElement('img');
  let article = document.createElement('article');
  let categoryPara = document.createElement('p');
  let articleHeading = document.createElement('h3');
  let readMore = document.createElement('a');

  outer.setAttribute('class', 'flex');
  readMore.innerText = 'READ MORE';
  articleImage.src = arg.imageUrl;
  articleHeading = arg.title;
  categoryPara.innerText = arg.newsSite;
  readMore.href = arg.url;

  aside.append(articleImage);
  article.append(categoryPara, articleHeading, readMore);
  outer.append(aside, article);
  display.append(outer);
}
