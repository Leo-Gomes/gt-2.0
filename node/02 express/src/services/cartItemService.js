const { inserirIntensRepository, alterarIntensRepository, deletarIntensRepository } = require("../repositories/cartItemRepository");
const { cartCheck } = require("../repositories/cartRepository");


async function inserirItensService(cart_id, product_id, quantity) {
    console.log(cart_id, product_id, quantity);
        // const carrinhoCheck = await cartCheck(cart_id)
        // if(!carrinhoCheck){
        //     const error = new Error("Carrinho não encontrado")
        //     error.status = 404;
        //     throw error;
        // }
    
        
        if(!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)){
            const error = new Error("Erro no corpo da requisição");
            error.status = 400;
            throw error;
        }
       return await inserirIntensRepository({cart_id, product_id, quantity})
}


async function alterarItensService(id, quantity) {
    
    if(!Number.isInteger(quantity) || quantity < 1){
        const error = new Error("Quantidade inválida. Deve ser um número inteiro maior que zero")
            error.status = 400;
            throw error;
    }
    
    const result = await alterarIntensRepository(id, quantity)
    
        if(!result){
            const error = new Error("Item não encontrado para alterar")
            error.status = 404;
            throw error;
        }

        return result;
}

async function deletarItensService(id) {
    const result = await deletarIntensRepository(id)


    return result;
}

module.exports = {
    inserirItensService, alterarItensService, deletarItensService
}
