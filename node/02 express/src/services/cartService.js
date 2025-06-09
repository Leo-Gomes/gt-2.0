const { criarCarrinhoRepository, listarCarrinhoItensRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");


async function criarCarrinhoService(user_id) {
    return await criarCarrinhoRepository(user_id)
}

async function listarCarrinhoService(cart_id) {
    return await listarCarrinhoItensRepository(cart_id)
}

async function limparCarrinhoService(cart_id) {
    return await limparCarrinhoRepository(cart_id)
}

module.exports = {
    criarCarrinhoService,listarCarrinhoService,limparCarrinhoService
}