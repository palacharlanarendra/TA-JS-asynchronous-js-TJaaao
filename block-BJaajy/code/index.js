// let randomNumber = function getRandomInt() {
//   return Math.floor(Math.random() * 100);
// };
// randomNumber();

// let one = new Promise((res, rej) => {
//   setTimeout(res(randomNumber()), 1000);
// });

// let two = new Promise((res, rej) => {
//   setTimeout(res(randomNumber()), 2000);
// });

// let three = new Promise((res, rej) => {
//   setTimeout(res(randomNumber()), 3000);
// });

// let four = new Promise((res, rej) => {
//   setTimeout(res(randomNumber()), 4000);
// });

// let all = Promise.all([one, two, three, four])
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// const usernames = [
//   'getify',
//   'nnnkit',
//   'palacharlanarendra',
//   'suraj122',
//   'piranha',
// ];

// const usernamePromises = Promise.all(
//   usernames.map((user) =>
//     fetch(`https://api.github.com/users/${user}`)
//       .then((res) => res.json())
//       .then((users) => console.log(users.followers))
//   )
// );

const one = fetch(`https://random.dog/woof.json`).then(() => 'woof');
const two = fetch(`https://aws.random.cat/meow`).then(() => 'meow');

Promise.race([one, two]);
