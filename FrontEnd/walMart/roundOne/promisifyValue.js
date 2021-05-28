const promisifyValue = new Promise((resolve, reject) => {
  resolve();
});

promisify = promisifyValue.then((val) => val);
console.log(promisify(2));
