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

    cadastra(livro, callback) {
        callback()
    }
}