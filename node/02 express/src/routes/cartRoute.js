
const router = require("express").Router();
const {criarCarrinho, listarItens, limparCarrinho} = require('../controllers/cartController')
const authMiddleware = require('../middleware/AuthMiddleware.js')

// router.use(authMiddleware);

// Cria um carrinho
router.post('/', criarCarrinho);

// Listar itens
router.get('/:id/itens', listarItens);

// Deleta itens do carrinho
router.delete('/:id/itens', limparCarrinho);

module.exports = router;