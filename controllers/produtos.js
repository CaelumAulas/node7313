const connectionFactory = require('../db/connectionFactory')
const LivrosDAO = require('../db/LivrosDAO3')

function listaProdutos(request, response, next){
    
    const livrosDAO = new LivrosDAO()
    const erro = request.param('erro')
    let msg = ''

    if (erro) {
        msg = 'Livro já foi excluido'
    }
   
    livrosDAO.lista(function responde(erro, lista){
        try {
            if(erro){
               next(erro)
            }else {
                response.format({
                    html: () => {
                        response.render('produtos/lista.ejs', {
                            livros: lista,
                            msgErro: msg,
                            
                        })
                    },
                    json: () => {
                        response.json(lista)
                    }
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

function excluiProduto(req, res) {
    const id = req.params.id

    const livrosDAO = new LivrosDAO()

    livrosDAO.exclui(id, (erro, resposta) => {
        if (erro || resposta.affectedRows == 0) {
            res.redirect('/produtos?erro=true')
        } else {
            res.redirect('/produtos')
        }
    })
}

function formAtualizaProduto(req, res) {
    const id = req.params.id
    const livrosDAO = new LivrosDAO()

    livrosDAO.pegarPorId(id, (erro, livro) => {
        console.log(livro)
        res.render('produtos/atualiza.ejs',{ livro })
    })
}

function atualizaProduto(req, res) {
    const livro = req.body

    console.log(livro)

    res.send('FOI')
}

module.exports = {
    lista: listaProdutos
    ,form: formProduto
    ,cadastra: cadastraProduto
    ,exclui: excluiProduto
    ,formAtualiza: formAtualizaProduto
    ,atualiza: atualizaProduto
}