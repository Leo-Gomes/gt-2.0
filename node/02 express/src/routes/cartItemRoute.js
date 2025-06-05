
const router = require("express").Router();
const {inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController');



// Insere itens no carrinho
router.post('/item', inserirItens);

// Alterar a quantidade item carrinho
router.put('/item/:id', alterarItens);


// Deleta um item do carrinho
router.delete('/item/:id', deletarItens);

module.exports = router;