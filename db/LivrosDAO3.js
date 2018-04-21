const connectionFactory = require('../db/connectionFactory')
// Função Construtora
// Mais próximo de uma Classe do Java ou C# ou Ruby
module.exports = class LivrosDAO {
    constructor(){
        this._conexao = connectionFactory.getConnection()
    }

    lista(callback){
        this._conexao.query("SELECT * FROM livros", callback)
    }

    pegarPorId(id, callback) {
        this._conexao.query("SELECT * FROM livros WHERE id=?", id, (erro, result) => {
            callback(erro, result[0])
        })
    }

    cadastra(livro, callback) {
        this._conexao.query("INSERT INTO livros SET ?", livro, callback)
    }

    exclui(id, callback) {
        this._conexao.query('DELETE FROM livros WHERE id=?', id, callback)
    }
}










