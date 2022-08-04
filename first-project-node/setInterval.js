//setInterval irá rodar uma função N vezes a cada X milissegundos
//Roda de tempo em tempo de acordo com o intervalo definido

const timeOut = 3000;
const finished = () => console.log('done!');

setInterval(finished, timeOut);