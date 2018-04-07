module.exports = function (servidorExpress){
    servidorExpress.get("/produtos", function(request, response){
        const lista = [{
            titulo: "Livro 1"
        }]
        response.render('produtos/lista.ejs', {
            lista: lista
        })
    })
}
