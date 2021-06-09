- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js
let randomNumber = function getRandomInt() {
  return Math.floor(Math.random() * 100);
};
randomNumber();

let one = new Promise((res, rej) => {
  setTimeout(res(randomNumber()), 1000);
});

let two = new Promise((res, rej) => {
  setTimeout(res(randomNumber()), 2000);
});

let three = new Promise((res, rej) => {
  setTimeout(res(randomNumber()), 3000);
});

let four = new Promise((res, rej) => {
  setTimeout(res(randomNumber()), 4000);
});

let all = Promise.all([one, two, three, four])
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
```

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js
const usernames = [
  'getify',
  'nnnkit',
  'palacharlanarendra',
  'suraj122',
  'piranha',
];

const usernamePromises = Promise.all(
  usernames.map((user) =>
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((users) => console.log(users.followers))
  )
);
```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js
const one = fetch(`https://random.dog/woof.json`).then(() => 'woof');
const two = fetch(`https://aws.random.cat/meow`).then(() => 'meow');

Promise.race([one, two]);
```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
)
  .then((res) => consoel.log(res))
  .catch((error) => console.log(error))
  .finally(console.log('Everything is settled'));
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);
let all = Promise.all([one, two, three])
  .then((res) => console.log(res))
  .catch((error) => console.log(error)); // this will throw an error for two .
let all = Promise.allSettled([one, two, three])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
//   0: {status: "fulfilled", value: "Arya"}
// 1: {status: "rejected", reason: Error: Whoops! at <anonymous>:5:27}
// 2: {status: "fulfilled", value: "John"}
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
let all = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);
//it will take one second.because to resolve the "Arya" , it will take like 1000ms.
```
