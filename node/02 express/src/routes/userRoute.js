const { registrar, login } = require("../controllers/userController");

const router = require("express").Router();

router.post('/register', 
    // #swagger.summary = 'Registro de um novo usuário'
    // #swagger.description = 'Cria um novo usuário no sistema com nome, sobrenome, email e senha válidos'
    registrar);

router.post('/login', 
    // #swagger.summary = 'Login de usuário'
    // #swagger.description = 'Autentica um usuário com email e senha. Retorna um token JWT'
    login);

module.exports = router;