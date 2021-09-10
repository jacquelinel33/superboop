import data from './data.js';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from '../routers/userRouter.js';

const app = express()
const port = 8000

mongoose.connect('mongodb://localhost/superboop', {
  useNewUrlParse: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.get('/api/products/:id', (req,res) => {
  console.log("params", req)
  const product = data.products.find( product => product._id === req.params.id);
  if (product) { 
    res.send(product);
 } else {
   res.status(404).send({ message: 'Product not found' });
 }
});

app.get('/api/products', (req,res) => {
  res.send(data.products);
})

app.get('/api/users', userRouter);
app.get('/', (req,res) => {
  res.send('Server is ready');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

