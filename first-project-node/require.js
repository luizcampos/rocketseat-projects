const path = require('path');

console.log(path.basename(__filename));


//Meu módulo criado em exports.js

const myModule = require('./exports');

console.log(myModule);