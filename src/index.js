const test = require('./service/watch/index');

(async () => {
  console.log('hello world!');
  console.log('cpu:: ', await test.getFreeCPU());
})()
