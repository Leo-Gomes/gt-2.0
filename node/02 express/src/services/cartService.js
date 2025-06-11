const { criarCarrinhoRepository, listarCarrinhoItensRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");


async function criarCarrinhoService(user) {
    return await criarCarrinhoRepository(user)
}

async function listarCarrinhoService(cart_id, user, pageNumber, limitNumber) {
    return await listarCarrinhoItensRepository(cart_id, user, pageNumber, limitNumber)
}

async function limparCarrinhoService(cart_id, user) {
    return await limparCarrinhoRepository(cart_id, user)
}

module.exports = {
    criarCarrinhoService,listarCarrinhoService,limparCarrinhoService
}