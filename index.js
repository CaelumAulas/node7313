const servidor = require('./servidor')
// começar a procurar pela porta
servidor.listen(8080, function(){
    console.log("Servidor subiu")
})
