let first = new Promise((res, rej) => {
  res(1);
}).then((value) => value + 1);
first.then((value) => value + 1);
first.then((value) => value + 1);
first.then((value) => console.log(value));
