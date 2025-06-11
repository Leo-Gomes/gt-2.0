const { deletarItensService } = require('../services/cartItemService.js');
const {criarCarrinhoService, limparCarrinhoService, listarCarrinhoService} = require('../services/cartService.js')

const criarCarrinho = async (req, res) => {
    const user = req.user.id;
    try {
        await criarCarrinhoService(user)
        res.status(201).json({ message: 'Carrinho criado com sucesso' });
    } catch (error) {
        console.log(`Erro ao criar carrinho ${error}`);
        res.status(500).json({
             error: 'Erro ao criar carrinho',
              details: error.message });
    };

}

const listarItens = async (req, res) => {
    const {page, limit} = req.query;
    const user = req.user.id;
    const { id } = req.params;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    try {
        const result = await listarCarrinhoService(id, user, pageNumber, limitNumber);
        res.status(200).json(result);
    } catch (error) {
        console.log(`Erro ao listar itens do carrinho ${error}`);
        res.status(500).json({ error: 'Erro ao buscar itens' });
    }
}

const limparCarrinho = async (req, res) => {
    const user = req.user.id;
    const { id } = req.params;
    try {
        await limparCarrinhoService(id, user)
        res.status(200).json({ message: 'Carrinho limpo', result: result.rows });
    } catch (error) {
        console.log("Erro ao deletar itens do carrinho", error);
        res.status(500).json({ error: 'Erro ao deletar itens do carrinho', details: error.message });
    }
}

module.exports = {
    criarCarrinho, listarItens, limparCarrinho
}