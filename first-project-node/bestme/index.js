//process.stdout.write("Alguma coisa"); /* Escreve saída */


const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + "\nR: ");
}

ask();

const answers = []

process.stdin.on("data", data => { /*Input de dados no terminal */
    answers.push(data.toString().trim());
    if (answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

process.on("exit", () => { /* Aguarda ocorrer o process.exit em alguma parte do código e executa essa função */
    console.log(`
        Okay, Fellipe!

        Você aprendeu hoje:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje foi:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!
    `)
})