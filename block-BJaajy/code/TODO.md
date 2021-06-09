- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
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
