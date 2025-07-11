const prisma = require('../config/prisma.js')

function criarUsuario(data) {
    
    return prisma.user.create({data})
}

function encontrarUsuario(email){
    return prisma.user.findUnique({
        where:{email}
    })
}

module.exports = {
    criarUsuario, encontrarUsuario
}