const express = require('express')
// Express Framework
// handler requests/pedido
const servidorExpress = express()

require('./routes/produtos')(servidorExpress)
require('./routes/home')(servidorExpress)

// handler de arquivos estáticos
servidorExpress.use(express.static('./static'))

module.exports = servidorExpress
