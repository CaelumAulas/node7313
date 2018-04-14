const mysql = require('mysql')
module.exports = {
    getConnection: function(){
        console.log("Criou conexao")
        return mysql.createConnection({
            database: "cdc",
            host: "localhost", 
            port: 32768, 
            user: "root", 
            password: ""
        })
    }    
}