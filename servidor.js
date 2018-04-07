const express = require('express')

// Express Framework
// handler requests/pedido
const servidor = express()

// Rota
servidor.get("/", function(request, response){
    response.render('home.ejs', {
        lista: [
            {titulo: "Livro 1"}
        ]
    })
})

servidor.listen(3000)
console.log("Servidor foi criado")