const { registrar, login } = require("../controllers/userController");

const router = require("express").Router();

router.post('/register', registrar);

router.post('/login', login);

module.exports = router;