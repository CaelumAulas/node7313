const servidor = require('./servidor')
const host = process.env.HOST
const porta = process.env.PORTA
// começar a procurar pela porta
servidor.listen(porta, function(){
    console.log("Servidor subiu em http://" + host + ":" + porta)
    console.log(`Servidor subiu em http://${host}:${porta}`)
    console.log("Pra derrubar o servidor: ctrl + c")
})
