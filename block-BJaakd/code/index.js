let first = new Promise((res, rej) => {
  res(['A']);
})
  .then((value) => value.push('B'))
  .then((value) => {
    let obj = {};
    obj[0] = value[0];
    obj[1] = value[1];
    return obj;
  })
  .then((value) => console.log(value));
