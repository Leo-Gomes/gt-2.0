
const router = require("express").Router();
const {criarCarrinho} = require('../controllers/cartController')

// Cria um carrinho
router.post('/', criarCarrinho);

// Listar itens
// router.get('/:id/itens', listarItens);

// Deleta itens do carrinho
// router.delete('/:id/itens', deletarItensCarrinho);

module.exports = router;