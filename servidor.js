const express = require('express')
// Express Framework
// handler requests/pedido
const servidorExpress = express()

require('./routes/produtos')(servidorExpress)

module.exports = servidorExpress