function listaProdutos(request, response){
    const mysql = require('mysql')
    const conexao = mysql.createConnection({
        database: "cdc",
        host: "localhost", 
        port: 32768, 
        user: "root", 
        password: ""
    })
    conexao.query("SELECT * FROM livros", function responde(erro, lista){
        if(erro){
           console.error(erro) 
        }else {
            response.render('produtos/lista.ejs', {
                livros: lista,
                msgErro: ""
            })
        }
    })
}

module.exports = {
    lista: listaProdutos
}