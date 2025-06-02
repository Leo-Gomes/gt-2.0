const express = require('express')
const cartRouter = require('./src/routes/cartRoute')
const app = express();
const client = require('./db.js')
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/carrinho', cartRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})