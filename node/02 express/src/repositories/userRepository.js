const prisma = require('../config/prisma')

function crirUsuario(data) {
    return prisma.user.create({data})
}

function encontrarUsuario(email){
    return prisma.user.findUnique({
        where: {email}
    })
}

module.exports = {
    crirUsuario, encontrarUsuario
}