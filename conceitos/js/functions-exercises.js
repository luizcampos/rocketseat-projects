//Exercice 1

let note = 80;
let scoreA = note >=90 && NOTE <= 100;
let scoreB = note >=80 && note <= 89;
let scoreC = note >= 70 && note <= 79;
let scoreD = note >=60 && note <= 69;
let scoreF = note < 60 && NOTE >=0;

if(scoreF){
    console.log(`Sua nota ${note} em letra é F.`);
} else if (scoreD){
    console.log(`Sua nota ${note} em letra é D.`);
} else if (scoreC){
    console.log(`Sua nota ${note} em letra é C.`);
} else if (scoreB){
    console.log(`Sua nota ${note} em letra é B.`);
} else if (scoreA){
    console.log(`Sua nota ${note} em letra é A.`);
}
else{
    console.log("Ocorreu um erro. Sua nota não pode ser convertida.");
}

//Exercice 2

const schedule = {
    incomes: [1500,100,70.5],
    expenses: [450,201.3,300]
}

function calculator(schedule){
    let totalIncomes=0, totalExpenses=0;
    
    for (let i of schedule.incomes){
        totalIncomes+=i;
    }
    for (let j of schedule.expenses){
        totalExpenses+=j;
    }

    console.log(`Total de receitas: ${totalIncomes}`);
    console.log(`Total de despesas: ${totalExpenses}`);

    let resul = totalIncomes >= totalExpenses;
    if(resul){
        console.log(`Saldo positivo: R$${totalIncomes-totalExpenses}`);
    } else{
        console.log(`Saldo negativo: R$${totalIncomes-totalExpenses}`);
    }
        
}

calculator(schedule);

//Exercice 3

let degrees = "50C", totalF = 0, totalC = 0;

function transform(degrees){
    const verification1 = degrees.toUpperCase().includes("C");
    const verification2 = degrees.toUpperCase().includes("F");

    if(verification1 || verification2){
        if(verification1){
            totalF = (Number(degrees.toUpperCase().replace("C","")) * (9/5)) + 32;
            console.log(`Total em Fahrenheit: ${totalF}F`);
        } else if (verification2){
            totalC = (Number(degrees.toUpperCase().replace("F",""))-32) * (5/9);
            console.log(`Total em Celsius: ${totalC}C`);
        }
    } else{
        throw new Error(`Você digitou uma medida errada! Tente novamente.`);
    }
    
}

transform(degrees);


//Exercise 4

//Array de objetos
const booksByCategory = [
    { //objeto
        category: "Riqueza",
        books: [ //array de objetos
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    { 
        category: "Romance",
        books: [
            {
                title: "Harry Potter e o Enigma do Príncipe",
                author: "J.K Rowling",
            },
            {
                title: "Harry Potter e a Ordem da Fênix",
                author: "J.K Rowling",
            },
            {
                title: "Harry Potter e as Relíquias da Morte",
                author: "J.K Rowling",
            },
            {
                title: "Percy Jackson e o Ladrão de Raios",
                author: "Rick Riordan",
            },
        ],
    },
];

console.log("\n===== Books =====");
console.log(`Total of categories: ${booksByCategory.length}`);


//Número de livros em cada categoria
for(let x of booksByCategory){
    console.log(`Total os books in the category ${x.category}: ${x.books.length}`);
}

//Alimentar um array c/ todos os autores (repetidos tbm)

let authors =[];

function countAuthors(){
    for(let x of booksByCategory){ // roda o objeto
        for(let z = 0; z < x.books.length; z++){ 
            if(authors.indexOf(x.books[z].author) == -1){
                authors.push(x.books[z].author);
            }
        }
    }
    
    /*
    //Eliminar autores repetidos
    let z2 = 1;
    for(let z = 0; z < authors.length; z++){
        if(authors[z]===authors[z2]){
            authors.splice(z,1);
        }else{
            z2++;
        }
    }*/
    return authors.length;
}

console.log(`Total of authors: ${countAuthors()}`);


//Mostrar livros de um autor específico
function byAuthor(name){
    console.log(`\n=== Books of ${String(name)} ===`);
    for(let x of booksByCategory){ // roda o objeto
        for(let z = 0; z < x.books.length; z++){ 
            if(x.books[z].author === name){
                console.log(`${x.books[z].title}`);
            }
        }
    }
 
}

byAuthor("J.K Rowling");