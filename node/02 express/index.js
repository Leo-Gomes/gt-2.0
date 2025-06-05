const express = require('express')
const cartRouter = require('./src/routes/cartRoute')
const cartItemRouter = require('./src/routes/cartItemRoute')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/v1', cartRouter);
app.use('/v2', cartItemRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})