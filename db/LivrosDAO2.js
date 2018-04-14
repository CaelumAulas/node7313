const connectionFactory = require('../db/connectionFactory')

LivrosDAO.prototype.lista = function listaLivros(callback){
    this.conexao.query("SELECT * FROM livros", callback)
}

function LivrosDAO(){
    this.conexao = connectionFactory.getConnection()
}
module.exports = LivrosDAO