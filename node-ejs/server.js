const express = require('express');
const app = express(); //app carrega tudo que tem no express (módulo Node)

//=== ROTAS ===

app.set("view engine", "ejs"); //view enfine - ferramente renderizar HTML

app.get('/', function(req, res){
    const items = [
        {
            title: "D",
            message: "Desenvolver é vida!"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML."
        },
        {
            title: "M",
            message: "Muito fácil de usar."
        },
        {
            title: "A",
            message: "Amorzinho <3"
        },
        {
            title: "I",
            message: "Install EJS"
        },
        {
            title: "S",
            message: "Sintax simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript."

    //res = resposta
    res.render("pages/index", { //objeto 'qualitys' passando o array acima para index.ejs
        qualitys: items,
        subtitle: subtitle,
    }); 
                        // a resposta vai ser renderizar index.ejs para HTML
})

app.get('/sobre', function(req, res){
    res.render("pages/about");
})

app.listen(8080); //listen -> ouve uma porta
                 //chamou uma porta, dando início