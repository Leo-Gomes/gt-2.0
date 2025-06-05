const {criarCarrinhoService} = require('../services/cartService.js')

const criarCarrinho = async (req, res) => {
    const { user_id } = req.body;
    try {
        await criarCarrinhoService(user_id)
        res.status(201).json({ message: 'Carrinho criado com sucesso' });
    } catch (error) {
        console.log(`Erro ao criar carrinho ${error}`);
        res.status(500).json({
             error: 'Erro ao criar carrinho',
              details: error.message });
    };

}

// const listarItens = async (params) => {

//     const { id } = req.params;
//     try {
//         const result = await 
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.log(`Erro ao listar itens do carrinho ${error}`);
//         res.status(500).json({ error: 'Erro ao buscar itens' });
//     }
// }

// const deletarItensCarrinho = async (params) => {
//     const { id } = req.params;
//     try {
//         await client.query(
//             `Delete FROM cart_item WHERE cart_id = $1 RETURNING *`, [id]
//         );
//         res.status(200).json({ message: 'Itens deletado com sucesso', result: result.rows });
//     } catch (error) {
//         console.log("Erro ao deletar itens do carrinho", error);
//         res.status(500).json({ error: 'Erro ao deletar itens do carrinho', details: error.message });
//     }
// }

module.exports = {
    criarCarrinho
}