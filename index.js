const servidor = require('./servidor')
// começar a procurar pela porta
servidor.listen(3000, function(){
    console.log("Servidor subiu")
})
