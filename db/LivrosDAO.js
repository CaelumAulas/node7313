const connectionFactory = require('../db/connectionFactory')

function listaLivros(conexao, callback){
    conexao.query("SELECT * FROM livros", callback)
}

// Função Construtora
// Mais próximo de uma Classe do Java ou C# ou Ruby
module.exports = function(){
    // privado
    const conexao = connectionFactory.getConnection()

    // publico
    return {
        lista: (callback) => listaLivros(conexao, callback)
    }
}