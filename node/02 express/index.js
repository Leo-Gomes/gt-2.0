const express = require('express')
const cartRouter = require('./src/routes/cartRoute')
const cartItemRouter = require('./src/routes/cartItemRoute')
const userRouter = require('./src/routes/userRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: 'https://sprint2-omega.vercel.app/'
}))
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => {

  // #swagger.tags = ['documentacao']

  // #swagger.summary = 'Redireciona para documentação API'
  res.redirect('./docs')
})

app.use('/v1/cart', 
  // #swagger.tags = ['carrinho']
  cartRouter);
app.use('/v1/item', 
  // #swagger.tags = ['carrinho-item']
  cartItemRouter);
app.use('/v1/user', 
  // #swagger.tags = ['usuario']
  userRouter);

app.listen(port, () => {
  console.log(`API documentation:${port}/docs`);
})