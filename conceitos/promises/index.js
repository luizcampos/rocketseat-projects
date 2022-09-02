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


console.log(fetch('https://api.github.com/users/luizcampos'));

fetch('https://api.github.com/users/luizcampos')
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))

//Promessas rodando ao mesmo tempo

Promise.all([
    fetch('https://api.github.com/users/luizcampos'),
    fetch('https://api.github.com/users/maykbrito/repos')
]).then( responses => { //só entra no then quando rodar as promessas
    console.log(responses)
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
}). catch( err => console.log(err.message));

//Forma mais limpa usando async e await

async function start(){
    const response3 = await fetch('https://api.github.com/users/luizcampos');
    const user = await response3.json();
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
}

start().catch(e => console.log(e));

//Outro modo limpo de usar promises
const promessa2 = new Promise( function(resolve, reject){
    return resolve("Promessa deu certo!")
})

async function starting(){
    try{
        const result = await promessa2;
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Rodar sempre que passar pelo finally')
    }
}

starting();