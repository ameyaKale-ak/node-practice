//loading o module
const os=require('os');

//using os module method
let type=os.type();
let totmem=os.totalmem();

console.log(`OS type is :${type}`);
console.log(`Total memory is :${totmem}`);