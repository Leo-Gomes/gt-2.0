const { inserirItensService, deletarItensService, alterarItensService } = require("../services/cartItemService");


const inserirItens = async (params, body) => {

    // iserir itens
    const { cart_id, product_id, quantity } = req.body;

    try {
        const result = await inserirItensService(cart_id, product_id, quantity)
        res.status(201).json(result);
    } catch (error) {
        console.log("Erro ao inserir item no carrinho", error);
        res.status(error.status || 500).json(
            {
                error: error.message,
                details: error.details || null
            });
    }
}

const alterarItens = async (params) => {

    const { id } = params;
    const { quantity } = req.body;

    try {
        const result = await alterarItensService

        res.status(200).json(result);
    } catch (error) {
        console.log("Erro ao alterar item no carrinho", error);
        res.status(error.status || 500).json(
            {
                error: error.message,
                details: error.details || null
            });
    }
}

const deletarItens = async (params) => {

    const { id } = params;
    try {
        const result = await deletarItensService(id)
        res.status(200).json({ message: 'Item deletado com sucesso', result: result })
    } catch (error) {
        console.log("Erro ao deletar item no carrinho", error);
        res.status(error.status || 500).json(
            {
                error: error.message,
                details: error.details || null
            });
    }
}

module.exports = {
    inserirItens, alterarItens, deletarItens
}

