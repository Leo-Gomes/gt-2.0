const express = require('express')
const cartRouter = require('./src/routes/cartRoute')
const cartItemRouter = require('./src/routes/cartItemRoute')
const userRouter = require('./src/routes/userRoute')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/v1/cart', cartRouter);
app.use('/v1/item', cartItemRouter);
app.use('/v1/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})