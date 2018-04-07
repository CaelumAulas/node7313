const ProdutoController = require('../controllers/produtos')
module.exports = function (app){
    app.get("/produtos", ProdutoController.lista)
}
