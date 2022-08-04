const express = require('express');
const app = express(); //app carrega tudo que tem no express (módulo Node)

//=== ROTAS ===

app.set("view engine", "ejs"); //view enfine - ferramente renderizar HTML

app.get('/', function(req, res){
    res.render("index"); //res = resposta
                        // a resposta vai ser renderizar index.ejs para HTML
})

app.get('/sobre', function(req, res){
    res.render("about");
})

app.listen(8080); //listen -> ouve uma porta
                 //chamou uma porta, dando início