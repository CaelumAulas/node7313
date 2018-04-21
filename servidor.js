// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()

const express = require('express')
// Express Framework
// handler requests/pedido
const servidorExpress = express()

// Interceptor
// Filter
// Middlewares
// Plugin do express
servidorExpress.use(express.urlencoded())

const expressValidator = require('express-validator')
servidorExpress.use(expressValidator())

require('./routes/produtos')(servidorExpress)
require('./routes/home')(servidorExpress)

// handler de arquivos estáticos
servidorExpress.use(express.static('./static'))

servidorExpress.use(function(request, response, next){
    response.render('erros/500.ejs', {
        erro: "404 - Not Found"
    })
})

servidorExpress.use(function(erro, request, response, next){
    response.render('erros/500.ejs', {
        erro: erro
    })
})

module.exports = servidorExpress
