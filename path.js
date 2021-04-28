//loading path module
const path=require('path');

let pathObj=path.parse(__filename);//using path modules method parse

console.log(pathObj);