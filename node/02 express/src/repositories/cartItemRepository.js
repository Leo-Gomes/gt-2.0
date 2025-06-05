const prisma = require('../config/prisma')


async function inserirIntensRepository(cart_id, product_id, quantity) {
   
    return await prisma.cartItem.create({
        data: {cart_id, product_id, quantity}
    })
    
    
}

async function alterarIntensRepository(id, quantity) {
   try {
        const item = await prisma.cartItem.update({
            where: {id: Number(id)},
            data: {quantity}
        })
    return item
   } catch (error) {
        if(error.code === 'p2025'){
            return null
        }
        throw error;
   }
   
}

async function deletarIntensRepository(id) {
    try {
        const item = await prisma.cartItem.delete({
            where: {id: Number(id)}
        })
    return item
   } catch (error) {
        if(error.code === 'p2025'){
            return null
        }
        throw error;
   }
   
}

module.exports = {
    inserirIntensRepository, alterarIntensRepository, deletarIntensRepository
}