const connectionFactory = require('../db/connectionFactory')

function listaProdutos(request, response, next){
    
    const LivrosDAO = require('../db/LivrosDAO3')
    const livrosDAO = new LivrosDAO()
   
    livrosDAO.lista(function responde(erro, lista){
        try {
            if(erro){
               next(erro)
            }else {
                response.render('produtos/lista.ejs', {
                    livros: lista,
                    msgErro: ""
                })
            }
        } catch (erro) {
            next(erro)
        }
    })
}

function formProduto(req, res){
    res.render('produtos/form.ejs', {
      validationErrors: []  
    })
}

function cadastraProduto(req, res, next){
    
    const livro = req.body
    const LivrosDAO = require('../db/LivrosDAO3')
    const livrosDAO = new LivrosDAO()

    livrosDAO.cadastra(livro, function(erro){
        if(erro){
           next(erro)
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