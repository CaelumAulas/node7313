function listaProdutos(request, response){
    const lista = [{
        titulo: "Livro 1"
    }]
    response.render('produtos/lista.ejs', {
        lista: lista
    })
}

module.exports = {
    lista: listaProdutos
}