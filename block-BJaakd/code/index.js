let data = new Promise((res, rej) => {
  setTimeout(() => rej(`Rejected Promise!`), 5000);
}).catch((error) => console.log(error));
