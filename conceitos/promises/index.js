/* Promise -> promessa de que algo vai acontecer, 
certo ou errado, mas vai acontecer */

const promessa = new Promise((resolve, reject) => {
    if(true){
        return resolve('Promessa deu certo!');
    }
    return reject('Promessa deu errado!');
})


promessa.then(result => {
    console.log(result);
}).catch(erro => console.log(erro))
.finally(() => console.log('Finalizada'))

/* .then para quando der certo 
   .catch para quandod der erro 
   .finally para finalizar 

 TODOS são callbacks do objeto Promise*/

 console.log('aguardando');