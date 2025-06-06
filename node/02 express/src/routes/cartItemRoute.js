
const router = require("express").Router();
const {inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController');



// Insere itens no carrinho
router.post('/', inserirItens);

// Alterar a quantidade item carrinho
router.put('/:id', alterarItens);


// Deleta um item do carrinho
router.delete('/:id', deletarItens);

module.exports = router;