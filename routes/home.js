module.exports = function (servidor){
    servidor.get("/", function(request, resposta) {
        resposta.end("Home")
    })
}