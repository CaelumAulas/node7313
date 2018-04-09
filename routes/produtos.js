const ProdutoController = require('../controllers/produtos')
module.exports = function (app){
    // ProdutoController.lista é um handler
    app.get("/produtos", ProdutoController.lista)
}
