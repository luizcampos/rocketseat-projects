function createPhrases(){
    console.log('Estudar é muito bom');
}

//Function scope

let subject = 'running';

function createThink(subject){  //como parâmetro, não será o mesmo que o de fora
    subject = 'study';
    return subject;
}

console.log(createThink(subject)); //subject da função
console.log(subject); //subject do escopo global


//Callback function 

function sayMyName(name){
	name(); //chama função recebida por parâmetro
}

sayMyName(
	() => { //envia uma função
		console.log('Estou em uma callback');
	}
);