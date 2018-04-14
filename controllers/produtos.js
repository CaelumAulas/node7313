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

    req.assert('titulo', 'Titulo está vazio').notEmpty()
    req.assert('preco', 'Preco inválido').isNumeric()

    const promiseValidacao = req.asyncValidationErrors()

    promiseValidacao
        .then(function(){
            const LivrosDAO = require('../db/LivrosDAO3')
            const livrosDAO = new LivrosDAO()
        
            return livrosDAO.cadastra(livro)
        })
        .then(function(erro){
            res.redirect('/produtos')
        })
        .catch(function(listaErros) {
            res.render('produtos/form.ejs', {
                validationErrors: listaErros 
            })
        })

}

module.exports = {
    lista: listaProdutos
    ,form: formProduto
    ,cadastra: cadastraProduto
}