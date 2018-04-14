const connectionFactory = require('../db/connectionFactory')

function listaProdutos(request, response){
    
    const LivrosDAO = require('../db/LivrosDAO3')
    const livrosDAO = new LivrosDAO()
   
    livrosDAO.lista(function responde(erro, lista){
        if(erro){
           response.render('erros/500.ejs', {
               erro: erro
           })
        }else {
            response.render('produtos/lista.ejs', {
                livros: lista,
                msgErro: ""
            })
        }
    })
}

function formProduto(req, res){
    res.render('produtos/form.ejs', {
      validationErrors: []  
    })
}

function cadastraProduto(req, res){
    const livro = req.data

    const LivrosDAO = require('../db/LivrosDAO3')
    const livrosDAO = new LivrosDAO()

    livrosDAO.cadastra(livro, function(erro){
        if(erro){
            res.render('erros/500.ejs', {
                erro: erro
            })
        } else {
            // ir para a lista
            res.redirect('/produtos')
        }
    })
}

module.exports = {
    lista: listaProdutos
    ,form: formProduto
    ,cadastra: cadastraProduto
}