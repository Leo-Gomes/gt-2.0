
const router = require("express").Router();
const {inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController');
const authMiddleware = require('../middleware/AuthMiddleware.js')

// router.use(authMiddleware)


router.post('/', 
    //#swagger.summary = 'Insere itens no carrinho'
    inserirItens);


router.put('/:id', 
    //#swagger.summary = 'Altera a quantidade de itens no carrinho'
    alterarItens);


// Deleta um item do carrinho
router.delete('/:id', 
    //#swagger.summary = 'Deleta itens do carrinho'
    deletarItens);

module.exports = router;