const mysql = require('mysql')
module.exports = {
    getConnection: function(){
        console.log("Criou conexao")
        return mysql.createConnection({
            database: process.env.NOME_DB,
            host: process.env.HOST_DB, 
            port: process.env.PORTA_DB, 
            user: process.env.USUARIO_DB, 
            password: process.env.SENHA_DB
        })
    }    
}