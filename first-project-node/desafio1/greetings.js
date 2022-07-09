//Importar função
const getFlagValue = require('./exportFunctions'); //Atribui a função toda

console.log(`Oi, ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);