module.exports = function (app){
    app.get("/", function(request, resposta) {
        resposta.end("Home")
    })
}