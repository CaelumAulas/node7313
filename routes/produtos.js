const ProdutoController = require('../controllers/produtos')
module.exports = function (app){
    // ProdutoController.lista é um handler
    app.get("/produtos", ProdutoController.lista)
    app.get("/produtos/form", ProdutoController.form)
    app.post("/produtos", ProdutoController.cadastra)
    app.get("/produtos/:id", ProdutoController.exclui)
}
